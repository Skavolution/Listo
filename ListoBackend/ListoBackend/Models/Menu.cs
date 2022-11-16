using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Menu
    {
        public Menu()
        {

        }

        public int IdPlato { get; set; }
        public string NomPlato { get; set; } = null!;
        public string DesPlato { get; set; } = null!;
        public int Precio { get; set; }
        public byte[]? Imagen { get; set; }
        public int IdRest { get; set; }
        public bool EstadoPlato { get; set; }

    }
}
