import React, {useEffect} from 'react'
import Tech_Video from '../assets/video/Tech_video.mp4'
import Exp from '../assets/img/Hero/experiences.webp'
import Dots from '../assets/img/illustrations/Dots.webp'
import Roadmap from '../assets/img/icons/roadmap.svg'
import Users from '../assets/img/icons/users-wm.svg'
import Share from '../assets/img/icons/share-91.svg'
import Video_Meeting from '../assets/img/icons/video_meeting.svg'
import Open from '../assets/img/icons/opening-times.svg'
import Card_Fav from '../assets/img/icons/card-favorite.svg'
import Wave_2 from '../assets/img/illustrations/Wave_2.svg'


function Service() {

    useEffect(() => {
        if (window.videoControllerInit) {
            window.videoControllerInit();
        }
    }, []);

    return (
        <section className="experience position-relative overflow-hidden" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="position-relative z-1 text-center mb-8 mb-lg-9 video-player-paused" data-video-player-container="data-video-player-container"><video className="w-100 h-100 rounded-4" src={Tech_Video} poster={Exp} type="video/mp4" data-video-player="data-video-player"></video>
                            <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 rounded-4 bg-1100 object-cover" data-overlay="data-overlay"> </div><button className="btn play-button position-absolute justify-content-center align-items-center bg-white rounded-circle cursor-pointer" data-play-button="data-play-button"> <img className="play-icon w-25" src="assets/img/illustrations/play-solid.svg" alt="" data-play-icon="data-play-icon" /><img className="pause-icon w-25" src="assets/img/illustrations/pause-solid.svg" alt="" data-pause-icon="data-pause-icon" /></button>
                            <div className="position-absolute dots d-none d-sm-block"><img className="img-fluid w-100" src={Dots} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <h2 className="fs-4 fs-lg-3 fw-bold text-center text-white mb-5 mb-lg-9 lh-sm">We made this app to solve your problems.</h2>
                    </div>
                    <div className="col-12">
                        <div className="row gy-4 g-md-3 pb-8 pb-lg-11 px-1">
                            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Roadmap} alt="" />
                                <div>
                                    <h5 className="fs-8 text-white lh-lg fw-bold">Unlimited Projects</h5>
                                    <p className="text-white text-opacity-50 lh-xl mb-0">Manage multiple projects at once and for seamless business operation.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Users} alt="" />
                                <div>
                                    <h5 className="fs-8 text-white lh-lg fw-bold">Team Management</h5>
                                    <p className="text-white text-opacity-50 lh-xl mb-0">Manage your cross-functional teams better than ever with our easily manageable app.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Share} alt="" />
                                <div>
                                    <h5 className="fs-8 text-white lh-lg fw-bold">File Sharing</h5>
                                    <p className="text-white text-opacity-50 lh-xl mb-0">Easily share files where necessary and keep them safe with enhanced security and protection.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Video_Meeting} alt="" />
                                <div>
                                    <h5 className="fs-8 text-white lh-lg fw-bold">Video Meeting</h5>
                                    <p className="text-white text-opacity-50 lh-xl mb-0">Conduct video meetings and keep records for further use with its cloud storage.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Open} alt="" />
                                <div>
                                    <h5 className="fs-8 text-white lh-lg fw-bold">Time Tracking</h5>
                                    <p className="text-white text-opacity-50 lh-xl mb-0">Track time to ensure meeting all the deadlines and never lag behind managing multiple projects.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-start gap-2"><img src={Card_Fav} alt="" />
                                <div>
                                    <h5 className="fs-8 text-white lh-lg fw-bold">Payment System</h5>
                                    <p className="text-white text-opacity-50 lh-xl mb-0">With its easy payment system create invoices and get paid all at the same place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 start-0 end-0">
                <div className="bg-white py-3 py-md-9 py-xl-10"> </div><img className="wave" src={Wave_2} alt="" />
            </div>
        </section>
    )
}

export default Service