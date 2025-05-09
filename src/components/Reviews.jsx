import React from 'react';
import Reviewer1 from '../assets/img/feedback/reviewer_1.webp';
import Reviewer2 from '../assets/img/feedback/reviewer_2.webp';
import Reviewer3 from '../assets/img/feedback/reviewer_3.webp';
import Kakashi from '../assets/img/feedback/kakashi.webp';
import Obito from '../assets/img/feedback/obito.webp';

function Reviews() {
  return (
    <section className="bg-1100 mt-n1">
      <div className="mx-auto text-center">
        <hr className="horizontal-rule m-0 d-inline-block" />
      </div>
      <div className="container pb-8 pb-lg-10">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <h2 className="fs-6 fs-lg-5 fw-bold text-white text-center pt-7 pb-4 pt-lg-9 pb-lg-6 lh-lg">
              <span className="underline">1,749 remote teams</span> have shared their experience with our app!
            </h2>
          </div>
          <div className="col-12 mb-4 mb-lg-6">
            <div className="row g-2">
              <div className="swiper-theme-container">
                <div
                  className="swiper position-relative"
                  data-swiper='{"spaceBetween":20,"mousewheel":{"forceToAxis":true,"sensitiviye":20,"releaseOnEdges":true},"autoplay":{"delay":3000,"disableOnInteraction":false},"breakpoints":{"0":{"slidesPerView":1,"direction":"horizontal","centeredSlide":true,"loop":true},"768":{"direction":"horizontal","centeredSlide":true,"slidesPerView":2,"loop":true},"992":{"slidesPerView":3,"direction":"vertical","loop":false}}}'
                >
                  <div className="swiper-wrapper gap-3">
                    {[{
                      img: Reviewer1,
                      text: '“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”',
                      name: 'Isaac Olson',
                      cardClass: 'review-card-1',
                    }, {
                      img: Reviewer2,
                      text: '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”',
                      name: 'Barry Young',
                      cardClass: 'review-card-2',
                    }, {
                      img: Reviewer3,
                      text: '“Must have book for all, who want to be Product Designer or Interaction Designer.”',
                      name: 'Esther Allison',
                      cardClass: 'review-card-3',
                    }, {
                      img: Kakashi,
                      text: '“Every day, I eat, sleep, and worry about stupid things. My job is to ensure that these kids have as many days as possible where they can be idiots like this.”',
                      name: 'Kakashi Hatake',
                      cardClass: 'review-card-4',
                    }, {
                      img: Obito,
                      text: '“Life isn’t permanent or predictable. You never know when you will run out of time. The best thing you can do is to be honest with those around you and let them know how you really feel. You never know if you have a tomorrow to come.”',
                      name: 'Obito Uchiha',
                      cardClass: 'review-card-5',
                    }].map((review, i) => (
                      <div className="col-12 swiper-slide mb-3" key={i}>
                        <div className="d-flex justify-content-center gap-2">
                          <div className={`d-flex flex-column flex-lg-row gap-2 px-4 py-x1 ${review.cardClass}`}>
                            <div className="text-center text-lg-start">
                              <img className="card-image rounded-circle object-fit-cover" src={review.img} alt={review.name} />
                            </div>
                            <div className="text-center text-lg-start">
                              <p className="fs-8 mb-2 lh-lg line-clamp-3 text-1100">{review.text}</p>
                              <p className="text-800 lh-xl mb-0">{review.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a className="py-1 link-success" href="#!">
              <span>Read more reviews </span>
              <span className="uil uil-arrow-right icon"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
