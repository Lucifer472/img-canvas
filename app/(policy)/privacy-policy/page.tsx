import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const revalidate = 360000;

const PrivacyPolicy = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-0 sm:px-2 md:px-4 xl:px-0">
      <h1
        className={cn(
          "md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Privacy Policy
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          PT Twibbonize Teknologi Indonesia (“we”, “us”, or “our”) operates
          twibbonize.com. Our Privacy Policy governs your visit to
          twibbonize.com and describes how we collect, maintain and disclose
          information that results from your use of our services.
        </p>
        <p className="w-full text-left">
          Your privacy is important to us. It is Twibbonize’s policy to respect
          your privacy and comply with applicable laws and regulations regarding
          any personal information we collect about you, including across our
          website, https://www.twibbonize.com, and other sites we own and
          operate.
        </p>
        <p className="w-full text-left">
          Personal information is any information about you that can be used to
          identify you. This includes information about you personally (such as
          your name, address, and date of birth), your device, and even
          information about how you use websites or online services.
        </p>
        <p className="w-full text-left">
          If our site contains links to third-party sites and services, please
          be aware that these sites and services have their own privacy
          policies. After following a link to any third-party content, you
          should read the privacy policy information they post about how they
          collect and use personal information. This Privacy Policy does not
          apply to your activities after you leave our site. By using
          Twibbonize, you consent to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy
          Policy, the terms used in this Privacy Policy have the same meanings
          as in our Terms of Service.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Information We Collect
        </h2>
        <p className="w-full text-left">
          Information we collect falls into one of two categories: “voluntarily
          provided” information and “automatically collected” information.
        </p>
        <p className="w-full text-left">
          “Voluntarily provided” information refers to any information you
          knowingly and actively provide us when using or participating in any
          of our services and promotions.
        </p>
        <p className="w-full text-left">
          “Automatically collected” information refers to any information
          automatically sent by your devices in the course of accessing our
          products and services.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Log Data
        </h2>
        <p className="w-full text-left">
          When you visit our website, our servers may automatically log standard
          data provided by your web browser. It may include your device’s
          Internet Protocol (IP) address, your browser type and version, the
          pages you visit, the time and date of your visit, the time spent on
          each page, and other details about your visit.
        </p>
        <p className="w-full text-left">
          Additionally, if you encounter certain errors while using the site, we
          may automatically collect data about the error and the circumstances
          surrounding the error. This data may include technical details about
          your device, what you were trying to do when the error occurred, and
          other technical information related to the problem. You may or may not
          receive notification of the error, even at the time it occurred, that
          the error has occurred, or what the nature of the error is.
        </p>
        <p className="w-full text-left">
          Please note that while this information may not be personally
          identifiable by itself, it is possible to combine it with other data
          to personally identify individuals.
        </p>

        {/* Fair Use Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Device Data
        </h2>
        <p className="w-full text-left">
          When you visit our website or interact with our services, we may
          automatically collect data about your device, such as:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>Device Type.</li>
          <li>Operating System.</li>
          <li>Unique Device Identifier.</li>
          <li>Device settings.</li>
          <li>Geographic location data.</li>
          <li>Internet Speed</li>
        </ul>
        <p className="w-full text-left">
          The data we collect may depend on the individual settings of your
          device and software. We recommend checking the policies of your device
          manufacturer or software provider to learn what information they
          provide us.
        </p>
        {/* Prohibited Activity Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Personal information
        </h2>
        <p className="w-full text-left">
          We may ask for personal information — for example, when you submit
          content to us or when you contact us — which may include one or more
          of the following
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
