using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Restaurante
    {
        public Restaurante()
        {

        }

        public int IdRest { get; set; }
        public string NomRest { get; set; } = null!;
        public int TelfijRest { get; set; }
        public int CelRest { get; set; }
        public string DirRest { get; set; } = null!;
        public string CiudadRest { get; set; } = null!;
        public string EmailRest { get; set; } = null!;
        public string ContraseñaRest { get; set; } = null!;

    }
}
