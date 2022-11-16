using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Domicilio
    {
        public Domicilio()
        {

        }

        public int IdDomicilio { get; set; }
        public int IdCli { get; set; }
        public int IdRest { get; set; }
        public int IdSrv { get; set; }
        public int DireccionEntrega { get; set; }

    }
}
