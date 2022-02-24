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

        // GET: api/Email
        public string Get(Guid cardId)
        {
            var session = _currentObjectContextProvider.GetOrCreateApplicationPoolSessionContext();
            IStaffService staffService = _currentObjectContextProvider.GetOrCreateCurrentObjectContext().GetService<IStaffService>();
            var cardData = session.AdvancedCardManager.GetCardData(cardId);
            return string.Join(";", (from row in cardData.Sections[CardDocument.Addressees.ID].GetAllRows()
                                      select row.GetGuid(CardDocument.Addressees.EmployeeId) into employeeId
                                      where employeeId.HasValue
                                      select staffService.Get(employeeId.Value).Email into email
                                      where !string.IsNullOrEmpty(email)
                                      select email).Distinct());
        }
    }
}
