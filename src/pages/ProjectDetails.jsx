import React from 'react'
import product1 from '../../src/assets/projectimg/project_page2/product1.png'
import product2 from '../../src/assets/projectimg/project_page2/product2.png'
import product3 from '../../src/assets/projectimg/project_page2/product3.png'
import product4 from '../../src/assets/projectimg/project_page2/product4.png'
import product5 from '../../src/assets/projectimg/project_page2/product5.png'
import product6 from '../../src/assets/projectimg/project_page2/product6.png'
import product7 from '../../src/assets/projectimg/project_page2/product7.png'
import product8 from '../../src/assets/projectimg/project_page2/product8.png'
import product9 from '../../src/assets/projectimg/project_page2/product9.png'
import product10 from '../../src/assets/projectimg/project_page2/product10.png'



function ProjectDetails() {
  const productdata = [
    {
      product_img: product1,
      text: "Commercial Building, GA USA"
    },
    {
      product_img: product2,
      text: "Commercial Building, LA USA"
    },
    {
      product_img: product3,
      text: "Commercial Building, MD USA"
    },
    {
      product_img: product4,
      text: "Commercial Building, FL USA"
    },
    {
      product_img: product5,
      text: "Commercial Building USA"
    },
    {
      product_img: product6,
      text: "Industrial Building, AR USA"
    },
    {
      product_img: product7,
      text: "Commercial Building, FL USA"
    },
    {
      product_img: product8,
      text: "Commercial Building, IL USA"
    },
    {
      product_img: product9,
      text: "Commercial Building, FL USA"
    },
    {
      product_img: product10,
      text: "Commercial Building, MD USA"
    },

  ]

  return (
    <>
      <div className='container mt-5'>
        <div className="row justify-content-center">
          {productdata.length === 1 ? (
            // If only ONE product, center it
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
              <img src={productdata[0].product_img} className="img-fluid img_product" />
              <p className="product_name mt-3">{productdata[0].text}</p>
            </div>
          ) : (
            // Otherwise, show all normally
            productdata.map((a, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 text-center">
                <div className="img_container">
                  <img src={a.product_img} className="img-fluid img_product" />
                </div>
                <p className="product_name mt-3">{a.text}</p>
              </div>
            ))
          )}
        </div>

        <div class="card product2_buttom_card mb-3">
          <div class="card-body">
            <div className='container'>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 border-right-column ">
                  <h2 className='wbf_steel_name '>WBF Steel</h2>
                  <p className='Detailing_num'>Detailing in Numbers</p>
                  <p className='gettouch mt-3'><b>Get in Touch</b> <i class="fa-solid fa-square-arrow-up-right ml-2"></i></p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 colou2">
                  <p className='workingpara'>We work across the <b className='bold_work'>world</b></p>
                  <p className='para_card mt-3'>Contact WBF Steel for professional advice on steel detailing and industry best
                    Practices</p>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default ProjectDetails
