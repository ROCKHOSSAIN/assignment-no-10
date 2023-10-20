const Advertisement = () => {
    return (
        <div className="py-20">
            <h1 className="text-center  font-poppins font-semibold text-xl md:text-4xl text-purple-500 mb-10">Summer Sale <span className="text-orange-400">Discount!!</span> </h1>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/bKwgrH2/35414256-rentrz-7.jpg" className="w-[1000px] mx-auto md:h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-[500px] right-0 md:right-[500px] top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/QQ6vd9Q/14669631-5510136.jpg" className="w-[1000px] mx-auto md:h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-[500px] right-0 md:right-[500px] top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/prVtqWy/33485153-black-friday-banner-16.jpg" className="w-[1000px] mx-auto md:h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-[500px] right-0 md:right-[500px] top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/gt7ysHc/14603593-5495558.jpg" className="w-[1000px] mx-auto md:h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 md:left-[500px] right-0 md:right-[500px] top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Advertisement;
