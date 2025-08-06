import MoveBack from "../../components/MoveBack";
import PropTypes from "prop-types";

export default function TermsAndConditions() {
  return (
    <div className="bg-bgBody min-h-screen w-full px-2">
      <MoveBack />

      <div className="max-w-4xl mx-auto rounded-xl shadow-lg px-6 pb-20">
        <h1 className="text-lg font-extrabold text-white mb-6 border-b border-gray-600 pb-4">
          Ganjibets Terms and Conditions
        </h1>

        <div className="space-y-6 leading-relaxed text-sm sm:text-base">
          <p className="text-white">
            Welcome to <strong>www.ganjibets.com</strong> (the Website), a
            betting platform operated by{" "}
            <strong>Telora Technologies Limited</strong>, a company duly
            registered in Kenya with its principal office located at Rosslyn
            Square Luxury Mall, Redhill Road, Nairobi.
          </p>

          <p className="text-white">
            Please read these Terms and Conditions carefully before using our
            services. By accessing or using the Website, you agree to be legally
            bound by these Terms. If you do not agree to any part of these
            Terms, you must not use the Website or the services provided herein.
          </p>

          {/* Section */}
          <Section title="1. Definitions">
            <ul className="text-white list-disc list-inside space-y-1">
              <li>
                <strong>“Company”, “We”, “Us”, “Our”</strong> refers to Telora
                Technologies Limited.
              </li>
              <li>
                <strong>“User”, “You”, “Your”</strong> refers to the individual
                accessing or using the Website.
              </li>
              <li>
                <strong>“Services”</strong> means all betting, gaming, and any
                other products or services offered via the Website.
              </li>
              <li>
                <strong>“Account”</strong> means a registered user profile
                through which you may access our services.
              </li>
            </ul>
          </Section>

          <Section title="2. Eligibility">
            <ul className="text-white list-disc list-inside space-y-1">
              <li>
                Be 18 years of age or older (or the legal age for gambling in
                your jurisdiction, whichever is higher).
              </li>
              <li>Be legally capable of entering into binding contracts.</li>
              <li>
                Not be prohibited from engaging in gambling activities by any
                applicable laws or regulations.
              </li>
            </ul>
            <p className="text-white">
              We reserve the right to request proof of age and to suspend or
              terminate your account if we suspect you are underage.
            </p>
          </Section>

          <Section title="3. Account Registration">
            <p className="text-white">
              To place bets or access certain features, you must create an
              account by providing accurate and complete information. You agree
              to:
            </p>
            <ul className="text-white list-disc list-inside space-y-1">
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>
                Accept full responsibility for all activity under your account.
              </li>
              <li>
                Notify us immediately at <strong>support@ganjibets.com</strong>{" "}
                if you suspect unauthorized use.
              </li>
            </ul>
            <p className="text-white">
              We reserve the right to reject or suspend accounts at our sole
              discretion.
            </p>
          </Section>

          <Section title="4. Responsible Gaming">
            <p className="text-white">
              Ganjibets promotes responsible gaming and provides tools to help
              you manage your betting behavior. Please refer to our Responsible
              Gaming Policy for details.
            </p>
            <p className="text-white">
              You may request temporary or permanent self-exclusion by
              contacting our support team via Live Chat or email.
            </p>
          </Section>

          <Section title="5. Betting Rules">
            <ul className="text-white list-disc list-inside space-y-1">
              <li>Once accepted, bets cannot be cancelled or amended.</li>
              <li>
                It is your responsibility to ensure that all bet details are
                correct.
              </li>
              <li>
                Winnings are calculated based on the odds at the time the bet
                was accepted.
              </li>
              <li>
                In case of disputes, the Company’s decision shall be final,
                subject to applicable dispute resolution mechanisms.
              </li>
            </ul>
            <p className="text-white">
              Full betting rules are available on the relevant product pages.
            </p>
          </Section>

          <Section title="6. Bonuses and Promotions">
            <p className="text-white">
              Bonuses are subject to specific terms and wagering requirements.
              By participating, you agree to be bound by the applicable rules,
              which may be updated from time to time.
            </p>
            <p className="text-white">
              We reserve the right to cancel or reclaim bonuses in case of
              fraud, misuse, or breach of terms.
            </p>
          </Section>

          <Section title="7. Deposits and Withdrawals">
            <ul className="text-white list-disc list-inside space-y-1">
              <li>
                All transactions must be made in Kenyan Shillings (KES) or other
                currencies accepted by the platform.
              </li>
              <li>
                You may only use payment methods registered in your own name.
              </li>
              <li>
                Withdrawals are subject to identity verification and anti-money
                laundering (AML) checks.
              </li>
            </ul>
            <p className="text-white">
              For more information, refer to our AML Policy.
            </p>
          </Section>

          <Section title="8. Account Suspension and Termination">
            <ul className="text-white list-disc list-inside space-y-1">
              <li>
                Suspend or terminate your account for breach of these Terms.
              </li>
              <li>
                Withhold winnings and void bets in cases of cheating, fraud,
                collusion, or manipulation.
              </li>
              <li>
                Comply with requests from legal or regulatory authorities.
              </li>
            </ul>
            <p className="text-white">
              You may terminate your account at any time by contacting support.
            </p>
          </Section>

          <Section title="9. Intellectual Property">
            <p className="text-white">
              All content on the Website, including logos, software, graphics,
              and text, is the intellectual property of Telora Technologies
              Limited or its licensors and may not be copied, modified, or used
              without express written permission.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p className="text-white">
              To the maximum extent permitted by law, Ganjibets shall not be
              liable for:
            </p>
            <ul className="text-white list-disc list-inside space-y-1">
              <li>Loss of profits or revenue.</li>
              <li>Business interruption or data loss.</li>
              <li>Winnings lost due to system failure, errors, or downtime.</li>
            </ul>
            <p className="text-white">
              You agree to use the Website at your own risk and to indemnify us
              against any claims resulting from your breach of these Terms.
            </p>
          </Section>

          <Section title="11. Privacy">
            <p className="text-white">
              Your use of our services is subject to our Privacy Policy, which
              outlines how we collect, use, and safeguard your personal data.
            </p>
          </Section>

          <Section title="12. Changes to Terms">
            <p className="text-white">
              We may revise these Terms at any time. Any changes will be
              effective immediately upon posting. Your continued use of the
              Website constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="13. Governing Law and Jurisdiction">
            <p className="text-white">
              These Terms are governed by the laws of Kenya. Any disputes
              arising under these Terms shall be resolved by the competent
              courts of Kenya, unless otherwise required by mandatory consumer
              protection laws.
            </p>
          </Section>

          <Section title="14. Support and Contact">
            <p className="text-white">
              For any questions or concerns, please contact us via:
            </p>
            <ul className="text-white list-disc list-inside space-y-1">
              <li>Live Chat on the Website</li>
              <li>
                Email: <strong>support@ganjibets.com</strong>
              </li>
            </ul>
          </Section>

          <Section title="15. Entire Agreement">
            <p className="text-white">
              These Terms, together with our Privacy Policy, AML Policy, and
              Responsible Gaming Policy, constitute the entire agreement between
              you and Ganjibets and supersede any prior agreements or
              understandings.
            </p>

            <p className="text-white text-sm mt-4">
              <strong>Telora Technologies Limited</strong>
              <br />
              Rosslyn Square Luxury Mall,
              <br />
              Redhill Road, Nairobi, Kenya
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-3 border-t border-gray-700 pt-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
