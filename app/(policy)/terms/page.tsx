import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const revalidate = 360000;

const TermsPage = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-0 sm:px-2 md:px-4 xl:px-0">
      <h1
        className={cn(
          "md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Terms of Service
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          Welcome to PT <strong>Twibbonize Teknologi Indonesia, </strong>doing
          business as Twibbonize (“the Company”, “we”, “our”, “us”)!
        </p>
        <p className="w-full text-left">
          These Terms of Service govern your use of the website located at
          https://www.twibbonize.com and any related services provided by
          Twibbonize.
        </p>
        <p className="w-full text-left">
          By accessing https://www.twibbonize.com , you agree to comply with
          these Terms of Service and to comply with all applicable laws and
          regulations. If you do not agree to these Terms of Service, you are
          prohibited from using or accessing this website or using any other
          services provided by Twibbonize.
        </p>
        <p className="w-full text-left">
          We, Twibbonize, reserve the right to review and change these Terms of
          Service at our sole discretion. After doing so, we will update this
          page. Any changes to these Terms of Service will take effect
          immediately from the date of publication.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Communication
        </h2>
        <p className="w-full text-left">
          By using our Services, you agree to subscribe to newsletters,
          marketing or promotional materials, and other information that we may
          send you. However, you may choose not to receive any, or all, of these
          communications from us.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Usage Restrictions
        </h2>
        <p className="w-full text-left">
          By using this website, you warrant on behalf of yourself, your users
          and others you represent that you will not:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            Modify, copy, prepare derivative works of, decompile or reverse
            engineer any material and software contained on this website;
          </li>
          <li>
            Remove any copyright or other proprietary notations from any
            material and software on this website;
          </li>
          <li>
            Transfer the material to another person or “mirror” the material on
            any other server;
          </li>
          <li>
            To impersonate or attempt to impersonate the Company, Company
            employees, other users, or other persons or entities.
          </li>
          <li>
            Knowingly or negligently use this website or its related services in
            a way that abuses or interferes with our network or other services
            that Twibbonize provides;
          </li>
          <li>
            Use this website or its related services to post or publish material
            that is harassing, obscene,, fraudulent or otherwise unlawful;
          </li>
          <li>Harvest, or collect user data without user consent; or</li>
          <li>
            Using this website or its related services in a manner that may
            violate the privacy, intellectual property rights or other rights of
            third parties.
          </li>
        </ul>
        <p className="w-full text-left">In addition, you agree not to:</p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            Use the Service in any way that could disable, overburden, impair,
            or interfere with the Service or interfere with other parties’ use
            of the Service, including their ability to engage in real-time
            activities through the Service.
          </li>
          <li>
            Use a robot, spider or other automated device, process or means to
            access the Service for any purpose, including monitoring or copying
            any material on the Service.
          </li>
          <li>
            Use any manual process to monitor or copy any material on the
            Service or for any other unauthorized purpose without our prior
            written consent.
          </li>
          <li>
            Use any device, software or routine that interferes with the proper
            working of the Service.
          </li>
          <li>
            Introduce viruses, trojan horses, worms, logic bombs, or other
            material that is harmful or technologically harmful.
          </li>
          <li>
            Attempt to gain unauthorized access to, interfere with, damage or
            interfere with any part of the Service, the server on which the
            Service is stored, or any server, computer or database connected to
            the Service.
          </li>
          <li>
            Attack the Service via a denial of service attack or a distributed
            denial of service attack.
          </li>
          <li>
            Take any action that could undermine or falsify the Company’s
            rating.
          </li>
          <li>
            Otherwise, try to interfere with the proper working of the Service.
          </li>
        </ul>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Twibbonize Acceptable Use Policy
        </h2>
        <p className="w-full text-left">
          This acceptable use policy covers the products, services, and
          technologies (collectively referred to as the “Products”) provided by
          Twibbonize under any ongoing agreement. It’s designed to protect us,
          our customers, and the general Internet community from unethical,
          irresponsible, and illegal activity.
        </p>
        <p className="w-full text-left">
          Twibbonize customers found engaging in activities prohibited by this
          acceptable use policy can be liable for service suspension and account
          termination. In extreme cases, we may be legally obliged to report
          such customers to the relevant authorities.
        </p>

        {/* Fair Use Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Fair use
        </h2>
        <p className="w-full text-left">
          We provide our facilities with the assumption your use will be
          “business as usual”, as per our offer schedule. If your use is
          considered to be excessive, then additional fees may be charged, or
          capacity may be restricted.
        </p>
        <p className="w-full text-left">
          We are opposed to all forms of abuse, discrimination, rights
          infringement, and/or any action that harms or disadvantages any group,
          individual, or resource. We expect our customers and, where
          applicable, their users (“end-users”) to likewise engage our Products
          with similar intent.
        </p>

        {/* Customer Accountability Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Customer accountability
        </h2>
        <p className="w-full text-left">
          We regard our customers as being responsible for their own actions as
          well as for the actions of anyone using our Products with the
          customer’s permission. This responsibility also applies to anyone
          using our Products on an unauthorized basis as a result of the
          customer’s failure to put in place reasonable security measures.
        </p>
        <p className="w-full text-left">
          By accepting Products from us, our customers agree to ensure adherence
          to this policy on behalf of anyone using the Products as their end
          users. Complaints regarding the actions of customers or their
          end-users will be forwarded to the nominated contact for the account
          in question.
        </p>

        {/* Violation and Termination Section */}
        <p className="w-full text-left">
          If a customer — or their end-user or anyone using our Products as a
          result of the customer — violates our acceptable use policy, we
          reserve the right to terminate any Products associated with the
          offending account or the account itself or take any remedial or
          preventative action we deem appropriate, without notice. To the extent
          permitted by law, no credit will be available for interruptions of
          service resulting from any violation of our acceptable use policy.
        </p>

        {/* Prohibited Activity Section */}
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Prohibited activity
        </h2>
        <p className="w-full text-left">
          Copyright infringement and access to unauthorized material
        </p>
        <p className="w-full text-left">
          Our Products must not be used to transmit, distribute, or store any
          material in violation of any applicable law. This includes but isn’t
          limited to:
        </p>
        <ul className="flex flex-col items-start gap-y-4 list-decimal ml-4">
          <li>
            any material protected by copyright, trademark, trade secret, or
            other intellectual property right used without proper authorization,
            and
          </li>
          <li>
            any material that is obscene, defamatory, constitutes an illegal
            threat or violates export control laws.
          </li>
        </ul>
        <p className="w-full text-left">
          The customer is solely responsible for all material they input,
          upload, disseminate, transmit, create or publish through or on our
          Products, and for obtaining legal permission to use any works included
          in such material.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          SPAM and unauthorized message activity
        </h2>
        <p className="w-full text-left">
          Our Products must not be used for the purpose of sending unsolicited
          bulk or commercial messages in violation of the laws and regulations
          applicable to your jurisdiction (“spam”). This includes but isn’t
          limited to sending spam, soliciting customers from spam sent from
          other service providers, and collecting replies to spam sent from
          other service providers.
        </p>
        <p className="w-full text-left">
          Our Products must not be used for the purpose of running unconfirmed
          mailing lists or telephone number lists (“messaging lists”). This
          includes but isn’t limited to subscribing email addresses or telephone
          numbers to any messaging list without the permission of the email
          address or telephone number owner, and storing any email addresses or
          telephone numbers subscribed in this way. All messaging lists run on
          or hosted by our Products must be “confirmed opt-in”. Verification of
          the address or telephone number owner’s express permission must be
          available for the lifespan of the messaging list.
        </p>
        <p className="w-full text-left">
          We prohibit the use of email lists, telephone number lists, or
          databases purchased from third parties intended for spam or
          unconfirmed messaging list purposes on our Products.
        </p>
        <p className="w-full text-left">
          This spam and unauthorized message activity policy applies to messages
          sent using our Products, or to messages sent from any network by the
          customer or any person on the customer’s behalf, that directly or
          indirectly refer the recipient to a site hosted via our Products.
        </p>

        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Unethical, exploitative, and malicious activity
        </h2>
        <p className="w-full text-left">
          Our Products must not be used for the purpose of advertising,
          transmitting, or otherwise making available any software, program,
          product, or service designed to violate this acceptable use policy or
          the acceptable use policy of other service providers. This includes
          but isn’t limited to facilitating the means to send spam and the
          initiation of network sniffing, pinging, packet spoofing, flooding,
          mail-bombing, and denial-of-service attacks.
        </p>
        <p className="w-full text-left">
          Our Products must not be used to access any account or electronic
          resource where the group or individual attempting to gain access does
          not own or is not authorized to access the resource (e.g., “hacking”,
          “cracking”, “phreaking”, etc.).
        </p>
        <p className="w-full text-left">
          Our Products must not be used for the purpose of intentionally or
          recklessly introducing viruses or malicious code into our Products and
          systems.
        </p>
        <p className="w-full text-left">
          Our Products must not be used for purposely engaging in activities
          designed to harass another group or individual. Our definition of
          harassment includes but is not limited to denial-of-service attacks,
          hate-speech, advocacy of racial or ethnic intolerance, and any
          activity intended to threaten, abuse, infringe upon the rights of, or
          discriminate against any group or individual.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Amendment to Terms
        </h2>
        <p className="w-full text-left">
          Our Products must not be used for the purpose of advertising,
          transmitting, or otherwise making available any software, program,
          product, or service designed to violate this acceptable use policy or
          the acceptable use policy of other service providers. This includes
          but isn’t limited to facilitating the means to send spam and the
          initiation of network sniffing, pinging, packet spoofing, flooding,
          mail-bombing, and denial-of-service attacks.
        </p>
        <p className="w-full text-left">
          We may change the Terms at any time by posting the modified terms on
          this site. It is your responsibility to review these Terms
        </p>
        <p className="w-full text-left">
          If you continue to use the Platform after the announcement of the
          revised Terms, you accept and agree to the changes. You are expected
          to check this page frequently so that you are aware of any changes, as
          they are binding on you.
        </p>
        <p className="w-full text-left">
          By continuing to access or use our Services after the revision becomes
          effective, you agree to be bound by the revised terms. If you do not
          agree to the new terms, you are no longer authorized to use the
          Service.
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
