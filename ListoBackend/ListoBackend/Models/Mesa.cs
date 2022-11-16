using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Mesa
    {
        public Mesa()
        {

        }

        public int IdMesa { get; set; }
        public string NombreInt { get; set; } = null!;
        public int PuMesa { get; set; }
        public int IdRest { get; set; }

    }
}
