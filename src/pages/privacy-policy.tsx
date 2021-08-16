import Head from 'next/head';
import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const PrivacyPolicy: React.FC<Props> = () => {
  const policyContent = `
**Last updated August 15, 2021**

Thank you for choosing to be part of our community at Carberra Tutorials ("Company," "we," "us," or "our"). We are committed to protecting your personal
information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal
information, please contact us at ${process.env.NEXT_PUBLIC_EMAIL_TO}.

This privacy notice describes how we might use your information if you:

- Visit our website at https://carberra.xyz
- Engage with us in other related ways ― including any sales, marketing, or events

In this privacy notice, if we refer to:

- "Website," we are referring to any website of ours that links to this policy
- "Services," we are referring to our Website, and other related services, including any sales, marketing, or events

The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have
in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.

**Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.**

## Table of contents

- [What information do we collect?](#what-information-do-we-collect)
- [How do we use your information?](#how-do-we-use-your-information)
- [Will your information be shared with anyone?](#will-your-information-be-shared-with-anyone)
- [How long do we keep your information?](#how-long-do-we-keep-your-information)
- [What are your privacy rights?](#what-are-your-privacy-rights)
- [Controls for do-not-track features](#controls-for-do-not-track-features)
- [Do California residents have specific privacy rights?](#do-california-residents-have-specific-privacy-rights)
- [Do we make updates to this notice?](#do-we-make-updates-to-this-notice)
- [How can you contact us about this notice?](#how-can-you-contact-us-about-this-notice)
- [How can you review, update, or delete the data we collect from you?](#how-can-you-review-update-or-delete-the-data-we-collect-from-you)

## What information do we collect?

### Personal information you disclose to us

***In Short:** We collect personal information that you provide to us.*

We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and
Services, when you participate in activities on the Website or otherwise when you contact us.

The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products
and features you use. The personal information we collect may include the following:

**Personal Information Provided by You.** We collect names; email addresses; and other similar information.

All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.

### Information automatically collected

***In Short:** Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected
automatically when you visit our Website.*

We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific
identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device
characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you
use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website,
and for our internal analytics and reporting purposes.

The information we collect includes:

- *Log and Usage Data.* Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect
  when you access or use our Website and which we record in log files. Depending on how you interact with us, this log data may include your
  IP address, device information, browser type and settings and information about your activity in the Website (such as the date/time stamps
  associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event
  information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
- *Device Data.* We collect device data such as information about your computer, phone, tablet or other device you use to access the Website.
  Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application
  identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system
  configuration information.
- *Location Data.* We collect location data such as information about your device's location, which can be either precise or imprecise. How
  much information we collect depends on the type and settings of the device you use to access the Website. For example, we may use GPS and
  other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing
  us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note
  however, if you choose to opt out, you may not be able to use certain aspects of the Services.

## How do we use your information?

***In Short:** We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you,
compliance with our legal obligations, and/or your consent.*

We use personal information collected via our Website for a variety of business purposes described below. We process your personal
information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you,
with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to
each purpose listed below.

We use the information we collect or receive:

- **For other business purposes.** We may use your information for other business purposes, such as data analysis, identifying usage
  trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and
  your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual
  end users and does not include personal information. We will not use identifiable personal information without your consent.

## Will your information be shared with anyone?


***In Short:** We only share information with your consent, to comply with laws, to provide you with services, to protect your rights,
or to fulfill business obligations.*

We may process or share your data that we hold based on the following legal basis:

- **Consent:** We may process your data if you have given us specific consent to use your personal information for a specific purpose.
- **Legitimate Interests:** We may process your data when it is reasonably necessary to achieve our legitimate business interests.
- **Performance of a Contract:** Where we have entered into a contract with you, we may process your personal information to fulfill
  the terms of our contract.
- **Legal Obligations:** We may disclose your information where we are legally required to do so in order to comply with applicable law,
  governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena
  (including in response to public authorities to meet national security or law enforcement requirements).
- **Vital Interests:** We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding
  potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal
  activities, or as evidence in litigation in which we are involved.

More specifically, we may need to process your data or share your personal information in the following situations:

- **Business Transfers.** We may share or transfer your information in connection with, or during negotiations of, any merger,
  sale of company assets, financing, or acquisition of all or a portion of our business to another company.

## How long do we keep your information?

***In Short:** We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise
required by law.*

We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a
longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this
notice will require us keeping your personal information for longer than __________.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information,
or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store
your personal information and isolate it from any further processing until deletion is possible.

## What are your privacy rights?

***In Short:** In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater
access to and control over your personal information. You may review, change, or terminate your account at any time.*

In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right
(i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict
the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also
have the right to object to the processing of your personal information. To make such a request, please use the
[contact details](#how-can-you-contact-us-about-this-notice) provided below. We will consider and act upon any request in accordance
with applicable data protection laws.

If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.
Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the
processing of your personal information conducted in reliance on lawful processing grounds other than consent.

If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have
the right to complain to your local data protection supervisory authority. You can find their contact details here:
https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.

If you are a resident in Switzerland, the contact details for the data protection authorities are available here:
https://www.edoeb.admin.ch/edoeb/en/home.html.

## Controls for do-not-track features

Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting
you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not
currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised
version of this privacy notice.

## Do California residents have specific privacy rights?

***In Short:** Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.*

California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request
and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third
parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the
immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request
in writing to us using the contact information provided below.

If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request
removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact
information provided below, and include the email address associated with your account and a statement that you reside in California.
We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or
comprehensively removed from all our systems (e.g. backups, etc.).

### CCPA privacy notice

The California Code of Regulations defines a "resident" as:

1. every individual who is in the State of California for other than a temporary or transitory purpose and
1. every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose

All other individuals are defined as "non-residents."

If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.

**What categories of personal information do we collect?**

We have collected the following categories of personal information in the past twelve (12) months:

| Category                                                                          | Examples                                                                                                                                                                                                | Collected |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Identifiers                                                                       | Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name | No        |
| Personal information categories listed in the California Customer Records statute | Name, contact information, education, employment, employment history and financial information                                                                                                          | Yes       |
| Protected classification characteristics under California or federal law          | Gender and date of birth                                                                                                                                                                                | No        |
| Commercial information                                                            | Transaction information, purchase history, financial details and payment information                                                                                                                    | No        |
| Biometric information                                                             | Fingerprints and voiceprints                                                                                                                                                                            | No        |
| Internet or other similar network activity                                        | Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements                                                | No        |
| Geolocation data                                                                  | Device location                                                                                                                                                                                         | No        |
| Audio, electronic, visual, thermal, olfactory, or similar information             | Images and audio, video or call recordings created in connection with our business activities                                                                                                           | No        |
| Professional or employment-related information                                    | Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us                     | No        |
| Education Information                                                             | Student records and directory information                                                                                                                                                               | No        |
| Inferences drawn from other personal information                                  | Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics                         | No        |


We may also collect other personal information outside of these categories instances where you interact with us in-person, online,
or by phone or mail in the context of:

- Receiving help through our customer support channels;
- Participation in customer surveys or contests; and
- Facilitation in the delivery of our Services and to respond to your inquiries.

**How do we use and share your personal information?**

More information about our data collection and sharing practices can be found in this privacy notice.

You may contact us by email at ${process.env.NEXT_PUBLIC_EMAIL_TO}, or by referring to the
[contact details](#how-can-you-contact-us-about-this-notice) at the bottom of this document.

If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit
proof that they have been validly authorized to act on your behalf.

**Will your information be shared with anyone else?**

We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider.
Each service provider is a for-profit entity that processes the information on our behalf.

We may use your personal information for our own business purposes, such as for undertaking internal research for technological development
and demonstration. This is not considered to be "selling" of your personal data.

Carberra Tutorials has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding
12 months. Carberra Tutorials will not sell personal information in the future belonging to website visitors, users and other consumers.

**Your rights with respect to your personal data**

<u>Right to request deletion of the data - Request to delete</u>

You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.

<u>Right to be informed - Request to know</u>

Depending on the circumstances, you have a right to know:

- whether we collect and use your personal information;
- the categories of personal information that we collect;
- the purposes for which the collected personal information is used;
- whether we sell your personal information to third parties;
- the categories of personal information that we sold or disclosed for a business purpose;
- the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
- the business or commercial purpose for collecting or selling personal information.

In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a
consumer request or to re-identify individual data to verify a consumer request.

<u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u>

We will not discriminate against you if you exercise your privacy rights.

<u>Verification process</u>

Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information
in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have
previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that
we can match the information you provide with the information we already have on file, or we may contact you through a communication
method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.

We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent
possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your
identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your
identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.


<u>Other privacy rights</u>

- you may object to the processing of your personal data
- you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data
- you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that
  does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
- you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will
  act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.

To exercise these rights, you can contact us by email at ${process.env.NEXT_PUBLIC_EMAIL_TO}, or by referring to the [contact details](#how-can-you-contact-us-about-this-notice)
at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.

## Do we make updates to this notice?

***In Short:** Yes, we will update this notice as necessary to stay compliant with relevant laws.*

We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated
version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by
prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice
frequently to be informed of how we are protecting your information.

## How can you contact us about this notice?

If you have questions or comments about this notice, you may email us at ${process.env.NEXT_PUBLIC_EMAIL_TO} or use our [contact form](/contact).

## How can you review, update, or delete, the data we collect from you?

Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you,
change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please
submit a request form by clicking [here](https://app.termly.io/notify/f35fbb6d-9469-469b-80ef-f5fe5c9da5bb).
  `;

  return (
    <div>
      <Head>
        <title>Privacy Policy | Carberra Tutorials</title>
        <meta
          name="description"
          content="The privacy policy for the Carberra Tutorials website"
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <h1 className="text-brand-gradient font-brand text-3xl text-center mt-10 mb-5 lowercase">
          privacy policy
        </h1>
        <ReactMarkdown
          children={policyContent}
          className="text-white font-sans unreset markdown flex-grow mx-16"
          remarkPlugins={[remarkGfm, remarkSlug]}
          rehypePlugins={[rehypeRaw]}
        />
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
