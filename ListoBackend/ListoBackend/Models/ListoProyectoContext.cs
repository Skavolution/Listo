using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ListoBackend.Models
{
    public partial class ListoProyectoContext : DbContext
    {
        public ListoProyectoContext()
        {
        }

        public ListoProyectoContext(DbContextOptions<ListoProyectoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cliente> Clientes { get; set; } = null!;
        public virtual DbSet<Domicilio> Domicilios { get; set; } = null!;
        public virtual DbSet<Empleado> Empleados { get; set; } = null!;
        public virtual DbSet<Menu> Menus { get; set; } = null!;
        public virtual DbSet<Mesa> Mesas { get; set; } = null!;
        public virtual DbSet<Ordene> Ordenes { get; set; } = null!;
        public virtual DbSet<Pago> Pagos { get; set; } = null!;
        public virtual DbSet<Reservacion> Reservacions { get; set; } = null!;
        public virtual DbSet<Restaurante> Restaurantes { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-BTSOMPK; Database=ListoProyecto; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCli)
                    .HasName("PK__clientes__D69619171FE9EB22");

                entity.ToTable("clientes");

                entity.Property(e => e.IdCli).HasColumnName("id_cli");

                entity.Property(e => e.CedulaCli).HasColumnName("cedula_cli");

                entity.Property(e => e.CelCli).HasColumnName("cel_cli");

                entity.Property(e => e.Ciudad)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("ciudad");

                entity.Property(e => e.ContraseñaCli)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("contraseña_cli");

                entity.Property(e => e.DirCli)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("dir_cli");

                entity.Property(e => e.EmailCli)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("email_cli");

                entity.Property(e => e.NomCli)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("nom_cli");

                entity.Property(e => e.TelfijCli).HasColumnName("telfij_cli");
            });

            modelBuilder.Entity<Domicilio>(entity =>
            {
                entity.HasKey(e => e.IdDomicilio)
                    .HasName("PK__domicili__A0CCE5C24713B54C");

                entity.ToTable("domicilio");

                entity.Property(e => e.IdDomicilio).HasColumnName("id_domicilio");

                entity.Property(e => e.DireccionEntrega).HasColumnName("direccion_entrega");

                entity.Property(e => e.IdCli).HasColumnName("id_cli");

                entity.Property(e => e.IdRest).HasColumnName("id_rest");

                entity.Property(e => e.IdSrv).HasColumnName("id_srv");


            });

            modelBuilder.Entity<Empleado>(entity =>
            {
                entity.HasKey(e => e.IdEmp)
                    .HasName("PK__empleado__D52A94EFE4C566FC");

                entity.ToTable("empleados");

                entity.Property(e => e.IdEmp).HasColumnName("id_emp");

                entity.Property(e => e.CargoEmp)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cargo_emp");

                entity.Property(e => e.CelEmp).HasColumnName("cel_emp");

                entity.Property(e => e.IdRest).HasColumnName("id_rest");

                entity.Property(e => e.NomEmp)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("nom_emp");
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.HasKey(e => e.IdPlato)
                    .HasName("PK__menu__04D4F2C088CDE77E");

                entity.ToTable("menu");

                entity.Property(e => e.IdPlato).HasColumnName("id_plato");

                entity.Property(e => e.DesPlato)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("des_plato");

                entity.Property(e => e.EstadoPlato).HasColumnName("estado_plato");

                entity.Property(e => e.IdRest).HasColumnName("id_rest");

                entity.Property(e => e.Imagen)
                    .HasMaxLength(1)
                    .HasColumnName("imagen");

                entity.Property(e => e.NomPlato)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("nom_plato");

                entity.Property(e => e.Precio).HasColumnName("precio");
            });

            modelBuilder.Entity<Mesa>(entity =>
            {
                entity.HasKey(e => e.IdMesa)
                    .HasName("PK__mesa__68A1E159F2697246");

                entity.ToTable("mesa");

                entity.Property(e => e.IdMesa).HasColumnName("id_mesa");

                entity.Property(e => e.IdRest).HasColumnName("id_rest");

                entity.Property(e => e.NombreInt)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_int");

                entity.Property(e => e.PuMesa).HasColumnName("pu_mesa");
            });

            modelBuilder.Entity<Ordene>(entity =>
            {
                entity.HasKey(e => e.IdOrd)
                    .HasName("PK__ordenes__6E0C5F36F40E4DE8");

                entity.ToTable("ordenes");

                entity.Property(e => e.IdOrd).HasColumnName("id_ord");

                entity.Property(e => e.IdDomicilio).HasColumnName("id_domicilio");

                entity.Property(e => e.IdEmp).HasColumnName("id_emp");

                entity.Property(e => e.IdPlato).HasColumnName("id_plato");

                entity.Property(e => e.IdReservacion).HasColumnName("id_reservacion");

                entity.Property(e => e.Precio).HasColumnName("precio");


            });

            modelBuilder.Entity<Pago>(entity =>
            {
                entity.HasKey(e => e.IdPago)
                    .HasName("PK__pago__0941B0749F866B3D");

                entity.ToTable("pago");

                entity.Property(e => e.IdPago).HasColumnName("id_pago");

                entity.Property(e => e.DescPago)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("desc_pago");

                entity.Property(e => e.IdOrd).HasColumnName("id_ord");


            });

            modelBuilder.Entity<Reservacion>(entity =>
            {
                entity.HasKey(e => e.IdReservacion)
                    .HasName("PK__reservac__786D5E837720FDB5");

                entity.ToTable("reservacion");

                entity.Property(e => e.IdReservacion).HasColumnName("id_reservacion");

                entity.Property(e => e.FechaReservacion)
                    .HasColumnType("date")
                    .HasColumnName("fecha_reservacion");

                entity.Property(e => e.Hora).HasColumnName("hora");

                entity.Property(e => e.IdCli).HasColumnName("id_cli");

                entity.Property(e => e.IdMesa).HasColumnName("id_mesa");

                entity.Property(e => e.IdRest).HasColumnName("id_rest");

                entity.Property(e => e.IdSrv).HasColumnName("id_srv");


            });

            modelBuilder.Entity<Restaurante>(entity =>
            {
                entity.HasKey(e => e.IdRest)
                    .HasName("PK__restaura__0F473C0A5EABBBCC");

                entity.ToTable("restaurante");

                entity.Property(e => e.IdRest)
                    .ValueGeneratedNever()
                    .HasColumnName("id_rest");

                entity.Property(e => e.CelRest).HasColumnName("cel_rest");

                entity.Property(e => e.CiudadRest)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ciudad_rest");

                entity.Property(e => e.ContraseñaRest)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("contraseña_rest");

                entity.Property(e => e.DirRest)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("dir_rest");

                entity.Property(e => e.EmailRest)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email_rest");

                entity.Property(e => e.NomRest)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nom_rest");

                entity.Property(e => e.TelfijRest).HasColumnName("telfij_rest");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
