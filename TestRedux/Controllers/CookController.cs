using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestRedux.Controllers
{
    [Produces("application/json")]
    [Route("api/cook")]
    public class CookController : ControllerBase
    {
        //api/cook/get-list (get)
        [HttpGet("get-list")]
        public IActionResult GetListBook()
        {
            List<string> model = new List<string>();
            model.Add("Salo");
            model.Add("Salo1");
            model.Add("Salo2");
            model.Add("Salo3");
            model.Add("Salo4");
            model.Add("Salo5");
            model.Add("Salo6");

            return Ok(model);
        }
    }
}