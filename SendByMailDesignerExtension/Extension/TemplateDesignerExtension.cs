using DocsVision.Platform.Tools.LayoutEditor.Extensibility;
using DocsVision.Platform.Tools.LayoutEditor.Helpers;
using DocsVision.Platform.Tools.LayoutEditor.ObjectModel.Descriptions;
using System;
using System.Collections.Generic;
using System.Resources;

namespace SendByMailDesignerExtension.Extension
{
    /// <summary>
    /// Представляет собой пример расширения для редактора разметок
    /// </summary>
    internal class SendByMailDesignerExtension : WebLayoutsDesignerExtension
    {
        /// <summary>
        /// Создаёт новый экземпляр <see cref="SendByMailDesignerExtension"/>
        /// </summary>
        /// <param name="provider">Сервис-провайдер</param>
        public SendByMailDesignerExtension(IServiceProvider provider)
            : base(provider)
        {
        }

        /// <summary>
        /// Возвращает словарь ключ/описание свойства, которые будут использоваться в пользовательских контролах
        /// </summary>
        protected override Dictionary<string, PropertyDescription> GetPropertyDescriptions()
        {
            return new Dictionary<string, PropertyDescription>
            {

            };
        }

        /// <summary>
        /// Возвращает описание пользовательских контролов
        /// описание контрола PartnerLink выполнено альтернативным способом и содержится в каталоге xml
        /// </summary>
        protected override List<ControlTypeDescription> GetControlTypeDescriptions()
        {
            return new List<ControlTypeDescription>
            {
                this.GetSendByMailControlDescription(),
            };
        }

        /// <summary>
        /// Возвращает ResourceManager этого расширения (расширяет словарь локализации конструктора разметок, не путать с окном Localization конструктора разметок)
        /// </summary>
        protected override List<ResourceManager> GetResourceManagers()
        {
            return new List<ResourceManager>
            {
                Resources.ResourceManager
            };
        }

        private ControlTypeDescription GetSendByMailControlDescription()
        {
            var standartCssClass = PropertyFactory.GetStandardCssClassProperty();
            standartCssClass.DefaultValue = "sendbymail-button";

            var controlDescription = new ControlTypeDescription("SendByMailButton")
            {
                DisplayName = "Send By Mail",
                PropertyDescriptions =
                {
                    standartCssClass,
                    PropertyFactory.GetNameProperty(),
                    PropertyFactory.GetVisibilityProperty(),
                    PropertyFactory.GetCustomCssClassesProperty(),
                    PropertyFactory.GetClickEvent(),
                },
            };
            //PropertyFactory.AddSimpleBinding(controlDescription, true);
            return controlDescription;
        }
    }
}
