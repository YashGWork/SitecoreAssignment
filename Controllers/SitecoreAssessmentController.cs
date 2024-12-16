using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.Mvc;
using Sitecore.Mvc.Presentation;
using Sitecore.Mvc.Helpers;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;

namespace Assignment.Controllers
{
    public class SitecoreAssessmentController : Sitecore.Mvc.Controllers.SitecoreController
    {
        // GET: SitecoreAssessment
        public ActionResult HeaderTop()
        {
            // Get the current rendering item
            var renderingItem = RenderingContext.Current.Rendering.Item;

            return View(renderingItem);
        }

        public ActionResult HeaderWidget()
        {
            // Get the current rendering item
            var renderingItem = RenderingContext.Current.Rendering.Item;

            return View(renderingItem);
        }

        public ActionResult HeaderMain()
        {
            // Get the current rendering item
            var renderingItem = RenderingContext.Current.Rendering.Item;

            return View(renderingItem);
        }

        public ActionResult CopyHeaderMain()
        {
            // Get the current rendering item
            var renderingItem = RenderingContext.Current.Rendering.Item;

            return View(renderingItem);
        }

        public ActionResult OffCanvasMenu()
        {
            // Get the current rendering item
            var renderingItem = RenderingContext.Current.Rendering.Item;

            return View(renderingItem);
        }

        public ActionResult Footer()
        {
            // Get the current rendering item
            var renderingItem = RenderingContext.Current.Rendering.Item;

            return View(renderingItem);
        }
    }
}