import Image from "next/image";

const Logo = () => {
  return (
    <div>
      {/* grid-cols-6 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center mt-16 px-20 space-y-10 my-10">
        {/* Image 1 */}
        <Image
          src="/images/symbol1.png"
          alt="pic"
          width={153}
          height={34}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 2 */}
        <Image
          src="/images/symbol2.png"
          alt="pic"
          width={146}
          height={59}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 3 */}
        <Image
          src="/images/symbol3.png"
          alt="pic"
          width={152}
          height={15}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 4 */}
        <Image
          src="/images/symbol4.png"
          alt="pic"
          width={151}
          height={42}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 6 */}
        <Image
          src="/images/symbol5.png"
          alt="pic"
          width={151}
          height={72}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 5 */}

        <Image
          src="/images/symbol6.png"
          alt="pic"
          width={151}
          height={62}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110 "
        />
      </div>
    </div>
  );
};

export default Logo;