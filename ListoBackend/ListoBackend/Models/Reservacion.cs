using System;
using System.Collections.Generic;

namespace ListoBackend.Models
{
    public partial class Reservacion
    {
        public Reservacion()
        {

        }

        public int IdReservacion { get; set; }
        public int IdCli { get; set; }
        public int IdRest { get; set; }
        public int IdMesa { get; set; }
        public int IdSrv { get; set; }
        public DateTime FechaReservacion { get; set; }
        public TimeSpan Hora { get; set; }

        public virtual Mesa IdMesaNavigation { get; set; } = null!;
        public virtual Restaurante IdRestNavigation { get; set; } = null!;
        public virtual ICollection<Ordene> Ordenes { get; set; }
    }
}
