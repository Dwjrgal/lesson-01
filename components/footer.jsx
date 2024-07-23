const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="flex justify-between px-20 py-20">
        <div>
          <h4 className="font-bold text-2xl pb-3">
            Ready to launch your next project?
          </h4>
          <p className="font-extralight text-gray-400">
            With lots of unique blocks, you can easily build a page without{" "}
            <br /> coding. Build your next landing page.
          </p>
        </div>
        <button>Get started a project</button>
      </div>
      <div className="flex items-center pb-40 ">
        <div className="flex flex-col   px-20 mb-[30px]">
          <h1 className="font-bold text-xl mb-10">Brainwave.io</h1>
          <p className="font-extralight text-gray-400">
            With lots of unique blocks, you can <br />
            easily build a page without coding. <br /> Build your next landing
            page.
          </p>
        </div>
        <div className="flex gap-20">
          <ul className=" flex flex-col gap-4">
            <p className="text-gray-400 mb-6">Company</p>
            <li className="font-extralight">About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
          <ul className=" flex flex-col gap-4">
            <p className="text-gray-400 mb-6">Product</p>
            <li>Features</li>
            <li>Pricing</li>
            <li>News</li>
            <li>Help desk</li>
            <li>Support</li>
          </ul>
          <ul className=" flex flex-col gap-4">
            <p className="text-gray-400 mb-6">Services</p>
            <li>Digital marketing</li>
            <li>Content Writing</li>
            <li>SEO for Business</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
