using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SuperGeek.Models;

public partial class SuperGeekDbContext : DbContext
{
    public SuperGeekDbContext()
    {
    }

    public SuperGeekDbContext(DbContextOptions<SuperGeekDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ConnectionStrings:SuperGeek");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.Property(e => e.Phone).IsFixedLength();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
