import MoveBack from "../../components/MoveBack";
import PropTypes from "prop-types";

export default function PrivacyPolicy() {
  return (
    <div className="bg-bgBody min-h-screen w-full px-2">
      <MoveBack />

      <div className="max-w-4xl mx-auto rounded-xl shadow-lg px-6 pb-20">
        <h4 className="text-lg font-extrabold text-white mb-6 border-b border-gray-600 pb-4">
          Ganjibets Privacy Policy
        </h4>

        <div className="space-y-6 leading-relaxed text-sm sm:text-base text-white">
          <Section title="1. Introduction">
            <p>
              This Privacy Policy outlines how Telora Technologies Limited
              (“we”, “our”, “us”) collects, uses, discloses, and protects your
              personal information when you access and use the betting services
              provided via <strong>www.ganjibets.com</strong> (“Ganjibets” or
              “the Site”).
            </p>
            <p>
              Telora Technologies Limited is a company registered under the laws
              of Kenya, with its registered office located at Rosslyn Square
              Luxury Mall, Redhill Road, Nairobi.
            </p>
            <p>
              We are committed to respecting your privacy and ensuring your
              personal data is handled securely and in accordance with
              applicable data protection laws, including the Data Protection
              Act, 2019 (Kenya).
            </p>
            <p>
              If you have any questions regarding this policy, please contact us
              through our Live Chat feature on the website or via email at{" "}
              <strong>support@ganjibets.com</strong>.
            </p>
          </Section>

          <Section title="2. Scope">
            <p>This Privacy Policy applies to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All users who visit, register with, or use www.ganjibets.com
              </li>
              <li>
                All information collected via our platform, communications, or
                associated services.
              </li>
            </ul>
            <p>
              By accessing or using our services, you agree to the terms of this
              Privacy Policy.
            </p>
          </Section>

          <Section title="3. Information We Collect">
            <h3 className="font-semibold">
              3.1. Information You Provide to Us
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Identity Information: Full name, date of birth, national
                ID/passport number.
              </li>
              <li>
                Contact Information: Email address, phone number, residential
                address.
              </li>
              <li>Account Details: Username, password, preferences.</li>
              <li>
                Payment Information: M-Pesa or bank transaction details,
                including confirmation codes.
              </li>
              <li>
                Communication Records: Live chat transcripts, email
                communications.
              </li>
            </ul>

            <h3 className="font-semibold mt-4">
              3.2. Information We Collect Automatically
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Usage Data: Pages visited, games played, time spent, betting
                activity.
              </li>
              <li>
                Device Data: IP address, device type, operating system, browser
                type.
              </li>
              <li>Cookies & Tracking Technologies: See Section 10 below.</li>
            </ul>

            <h3 className="font-semibold mt-4">
              3.3. Information from Third Parties
            </h3>
            <p>
              We may receive information about you from identity verification
              services, financial institutions, and regulatory authorities as
              required to comply with legal obligations.
            </p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <ul className="list-disc list-inside space-y-1">
              <li>
                Performance of a contract: To provide betting and gaming
                services.
              </li>
              <li>
                Legal obligation: To comply with AML, KYC, and regulatory
                requirements.
              </li>
              <li>
                Legitimate interests: For fraud prevention, service improvement,
                and customer support.
              </li>
              <li>Consent: For direct marketing where applicable.</li>
            </ul>
          </Section>

          <Section title="5. How We Use Your Information">
            <ul className="list-disc list-inside space-y-1">
              <li>To create and manage your user account.</li>
              <li>To process deposits, withdrawals, and wagers.</li>
              <li>To verify your identity and ensure legal compliance.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To personalize your user experience.</li>
              <li>To detect and prevent fraudulent or illegal activity.</li>
              <li>
                To send service-related communications and (if consented)
                marketing messages.
              </li>
            </ul>
          </Section>

          <Section title="6. Disclosure of Information">
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Service Providers under confidentiality: payment processors,
                verification agencies, IT vendors.
              </li>
              <li>
                Regulatory Authorities: BCLB, FRC, or law enforcement when
                required by law.
              </li>
              <li>Corporate Transactions: Mergers, sales, or acquisitions.</li>
            </ul>
            <p>
              We will never sell or rent your personal data to third parties.
            </p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              Where your personal data is transferred outside of Kenya, we
              ensure adequate safeguards are in place to protect it in
              compliance with applicable law.
            </p>
          </Section>

          <Section title="8. Data Retention">
            <p>We retain your personal data:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>As long as your account is active.</li>
              <li>
                For at least 5 years after account closure or last transaction
                (per legal requirements).
              </li>
              <li>
                Longer where required for disputes, fraud prevention, or legal
                enforcement.
              </li>
            </ul>
          </Section>

          <Section title="9. Your Rights">
            <p>You have the following rights under Kenyan law:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Right to Access</li>
              <li>Right to Rectify</li>
              <li>Right to Erasure</li>
              <li>Right to Object</li>
              <li>Right to Data Portability</li>
            </ul>
            <p>
              To exercise your rights, contact{" "}
              <strong>support@ganjibets.com</strong>.
            </p>
          </Section>

          <Section title="10. Cookies and Tracking Technologies">
            <p>We use cookies to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Maintain session integrity.</li>
              <li>Remember preferences.</li>
              <li>Analyze usage and improve performance.</li>
            </ul>
            <p>You may manage cookie preferences via browser settings.</p>
          </Section>

          <Section title="11. Security">
            <p>We implement appropriate security measures to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Protect your data from unauthorized access or misuse.</li>
              <li>Encrypt sensitive data during transmission and storage.</li>
              <li>Restrict access to authorized personnel only.</li>
            </ul>
            <p>
              Despite our efforts, no system is completely secure. You are
              responsible for keeping your login credentials safe.
            </p>
          </Section>

          <Section title="12. Minors">
            <p>
              Ganjibets services are limited to users aged 18+. We do not
              knowingly collect data from minors. If identified, such data will
              be deleted promptly.
            </p>
          </Section>

          <Section title="13. Marketing Communications">
            <p>
              With your consent, we may send promotional emails or SMS. You can
              opt-out by:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Clicking the “unsubscribe” link in emails.</li>
              <li>
                Contacting <strong>support@ganjibets.com</strong>.
              </li>
            </ul>
          </Section>

          <Section title="14. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy anytime. Updates will be posted
              on
              <strong> www.ganjibets.com</strong> with a new “Effective Date”.
              Please review periodically.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy or
              your personal data, contact:
            </p>
            <p className="text-sm mt-2">
              <strong>Telora Technologies Limited</strong>
              <br />
              Rosslyn Square Luxury Mall, Redhill Road, Nairobi, Kenya
              <br />
              Email: <strong>support@ganjibets.com</strong>
              <br />
              Live Chat: Available on <strong>www.ganjibets.com</strong>
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
