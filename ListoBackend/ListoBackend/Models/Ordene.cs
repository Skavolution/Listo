using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Ordene
    {
        public Ordene()
        {
         
        }

        public int IdOrd { get; set; }
        public int? IdReservacion { get; set; }
        public int? IdDomicilio { get; set; }
        public int IdPlato { get; set; }
        public int IdEmp { get; set; }
        public int Precio { get; set; }


    }
}
