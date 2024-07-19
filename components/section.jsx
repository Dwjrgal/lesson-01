const Section = () => {
  return (
    <section className="flex gap-40 px-20 py-10">
      <div className="flex flex-col gap-6">
        <h5 className="text-red-600">Let’s shift your business</h5>
        <h3 className="text-4xl font-bold ">
          Shift your business <br />
          fast with Shade Pro.
        </h3>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding.Build your next consultancy website within few minutes.
        </p>
        <button>Get started a project</button>
      </div>
      <img
        className="rounded-full h-80 w-80"
        src="https://images.unsplash.com/photo-1721205834757-c69d5def190a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGoyemVjNmtkOVZrfHxlbnwwfHx8fHw%3D"
        alt=""
      />
    </section>
  );
};

export default Section;
