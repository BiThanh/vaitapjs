using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using PntBaiDanhGiaGiuaKy.Models;

namespace PntBaiDanhGiaGiuaKy.Controllers
{
    public class PntStudentsController : Controller
    {
        private static List<PntStudent> pntStudents = new List<PntStudent>
        {
            new PntStudent { Id = 0, Name = "Quốc", Image = "imageA.jpg", Quantity = 10, Price = 100, IsActive = true },
            new PntStudent { Id = 1, Name = "Quắc", Image = "imageB.jpg", Quantity = 20, Price = 200, IsActive = true }
        };


        public ActionResult Index()
        {
            return View(pntStudents);
        }


        public ActionResult Create()
        {
            return View(new PntStudent());
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(PntStudent pntProduct)
        {
            if (ModelState.IsValid)
            {
                pntProduct.Id = pntStudents.Any() ? pntStudents.Max(p => p.Id) + 1 : 0;
                pntStudents.Add(pntProduct);
                return RedirectToAction("Index");
            }

            return View(pntProduct);
        }


        public ActionResult Edit(int id)
        {
            var ntqProduct = pntStudents.FirstOrDefault(p => p.Id == id);
            if (ntqProduct == null)
            {
                return HttpNotFound();
            }
            return View(pntStudents);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(PntStudent pntProduct)
        {
            if (ModelState.IsValid)
            {
                var existingProduct = pntStudents.FirstOrDefault(p => p.Id == pntProduct.Id);
                if (existingProduct != null)
                {
                    existingProduct.Name = pntProduct.Name;
                    existingProduct.Image = pntProduct.Image;
                    existingProduct.Quantity = pntProduct.Quantity;
                    existingProduct.Price = pntProduct.Price;
                    existingProduct.IsActive = pntProduct.IsActive;
                }
                return RedirectToAction("Index");
            }

            return View(pntProduct);
        }


        public ActionResult Delete(int id)
        {
            var pntProduct = pntStudents.FirstOrDefault(p => p.Id == id);
            if (pntProduct == null)
            {
                return HttpNotFound();
            }
            return View(pntProduct);
        }


        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            var pntProduct = pntStudents.FirstOrDefault(p => p.Id == id);
            if (pntProduct != null)
            {
                pntStudents.Remove(pntProduct);
            }
            return RedirectToAction("Index");
        }


    }
}