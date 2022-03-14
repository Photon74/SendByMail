using DocsVision.BackOffice.WebClient.State;
using DocsVision.Platform.WebClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DocsVision.BackOffice.CardLib.CardDefs;
using DocsVision.BackOffice.ObjectModel.Services;

namespace SendByMailServerExtension.Controllers
{
    public class EmailController : ApiController
    {
        private readonly ICurrentObjectContextProvider _currentObjectContextProvider;

        public EmailController(ICurrentObjectContextProvider currentObjectContextProvider)
        {
            _currentObjectContextProvider = currentObjectContextProvider;
        }

        public string GetEmail(string cardId)
        {
            var session = _currentObjectContextProvider.GetOrCreateApplicationPoolSessionContext();
            var ctx = _currentObjectContextProvider.GetOrCreateCurrentObjectContext();

            IPartnersService partnersService = ctx.GetService<IPartnersService>();

            var cardData = session.AdvancedCardManager.GetCardData(new Guid(cardId));
            return string.Join(";", (from row in cardData.Sections[CardDocument.ReceiversPartners.ID].GetAllRows()
                                     select row.GetGuid(CardDocument.ReceiversPartners.ReceiverPartnersEmployee) into employeeId
                                     where employeeId.HasValue
                                     select partnersService.Get(employeeId.Value).Email into email
                                     where !string.IsNullOrEmpty(email)
                                     select email).Distinct());

        }
    }
}
