const Hero = () => {
  const style = {
    backgroundColor: "#473BF0",
    height: "600px",
    width: "100vw",
    color: "white",
    textAlign: "center",
  };
  return (
    <section
      style={style}
      className="flex flex-col justify-center items-center gap-10 "
    >
      <h6 className="text-xs  text-lime-500 font-bold">TESTIMONIAL</h6>
      <p className="font-bold text-3xl">
        “Simply the best. Better than all the rest. I’d <br />
        recommend this product to beginners and <br /> advanced users.”
      </p>

      <img
        className="h-20 w-20 rounded-full"
        src="https://images.unsplash.com/photo-1721111648117-191ddb148f91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <h5 className="font-bold ">Ian Klein</h5>
        <p className="font-extralight">Digital Marketer</p>
      </div>
    </section>
  );
};

export default Hero;
