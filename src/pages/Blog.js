import React from 'react'
import { Image } from 'react-bootstrap'

export default function Blog() {
    return (
        <>
            <section className="dashboard-banner">
                <div className="container">
                    <div className="row blog">
                        <h1>Blog Full Right Sidebar With Frame</h1>
                        <p>Caption aligned here</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 my-5">
                            <div className="single-blog">
                                <div className="imgs">
                                    <Image src="images/blog.jpg" alt="" width={730} />
                                </div>
                                <div className="blog-content py-4 px-5">
                                    <div className='d-flex gap-5'>
                                        <span>
                                            <i class="fa-regular fa-clock"></i>
                                            June 6,2016
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-file"></i>
                                            John Smite
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-folder"></i>
                                            Blog
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-comment"></i>
                                            6
                                        </span>
                                    </div>
                                    <h3>Pack wisely before traveling</h3>
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul,
                                        like these sweet mornings of spring which I enjoy with my whole heart.
                                        I am alone, and feel the charm of existence in this spot,
                                        which was created for the bliss of souls like mine.
                                        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that
                                        I neglect my talents. I should be...
                                    </p>
                                    <button>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            <div className="single-blog">
                                <div className="imgs">
                                    <Image src="images/blog.jpg" alt="" width={730} />
                                </div>
                                <div className="blog-content py-4 px-5">
                                    <span className='d-flex gap-5'>
                                        <span>
                                            <i class="fa-regular fa-clock"></i>
                                            June 6,2016
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-file"></i>
                                            John Smite
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-folder"></i>
                                            Blog
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-comment"></i>
                                            6
                                        </span>
                                    </span>
                                    <h3>Pack wisely before traveling</h3>
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul,
                                        like these sweet mornings of spring which I enjoy with my whole heart.
                                        I am alone, and feel the charm of existence in this spot,
                                        which was created for the bliss of souls like mine.
                                        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that
                                        I neglect my talents. I should be...
                                    </p>
                                    <button>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            <div className="single-blog">
                                <div className="imgs">
                                    <Image src="images/blog.jpg" alt="" width={730} />
                                </div>
                                <div className="blog-content py-4 px-5">
                                    <span className='d-flex gap-5'>
                                        <span>
                                            <i class="fa-regular fa-clock"></i>
                                            June 6,2016
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-file"></i>
                                            John Smite
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-folder"></i>
                                            Blog
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-comment"></i>
                                            6
                                        </span>
                                    </span>
                                    <h3>Pack wisely before traveling</h3>
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul,
                                        like these sweet mornings of spring which I enjoy with my whole heart.
                                        I am alone, and feel the charm of existence in this spot,
                                        which was created for the bliss of souls like mine.
                                        I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that
                                        I neglect my talents. I should be...
                                    </p>
                                    <button>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 my-5 blogSideBarr">
                            <div className='widget'>
                                <h5>TEXT WIDGET</h5>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue.
                                    Nulla vitae elit libero, a pharetra augue.
                                    Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.
                                    Etiam porta sem malesuada.
                                </p>
                            </div>
                            <div className="recentWork">
                                <h5>RECENT WORKS</h5>
                                <Image src="images/blog-side.jpg" alt="" />
                                <Image src="images/blog-side-2.jpg" alt="" />
                                <Image src="images/blog-side.jpg" alt="" />
                                <Image src="images/blog-side-2.jpg" alt="" />
                                <Image src="images/blog-side.jpg" alt="" />
                                <Image src="images/blog-side-2.jpg" alt="" />
                                <Image src="images/blog-side.jpg" alt="" />
                                <Image src="images/blog-side-2.jpg" alt="" />
                                <Image src="images/blog-side.jpg" alt="" />
                            </div>
                            <div className="blogSideComment">
                                <h5>
                                    RECENT COMMENTS
                                </h5>
                                <ul>
                                    <li><span>John Smith on</span> Pack wisely before traveling</li>
                                    <li><span>John Smith on</span> Pack wisely before traveling</li>
                                    <li><span>John Smith on</span> Pack wisely before traveling</li>
                                    <li><span>John Smith on</span> Pack wisely before traveling</li>
                                </ul>
                            </div>
                            <div>
                                <h5>
                                    TAG CLOUD
                                </h5>
                                <div className="cloud">
                                    <a href="#">Article</a>
                                    <a href="#">Builing</a>
                                    <a href="#">Industry</a>
                                    <a href="#">Nature</a>
                                    <a href="#">Metal</a>
                                    <a href="#">Mining</a>
                                    <a href="#">Oil</a>
                                    <a href="#">News</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
