<template>
  <Base>
    <div
      class="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
      <div class="flex w-full max-w-xxl flex-col gap-6">
        <a href="#" class="flex items-center gap-2 self-center font-medium">
          <div
            class="flex h-6 w-6 items-center justify-center rounded-none bg-primary text-primary-foreground"
          >
            <span class="icon-[solar--posts-carousel-vertical-bold-duotone] size-4" />
          </div>
          CHANNELSport
        </a>
        <div class="">
          <Card>
            <CardHeader class="text-center">
              <CardTitle class="text-xl"> Terms of Service </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="font-medium">Effective date: 2024-03-20</p>
              <br />
              <ol>
                <li>
                  <p class="font-semibold">1. Acceptance of Terms</p>
                  <p>
                    By using this website (‘website’), you confirm that you have read,
                    understood and agree to be bound by these Terms of Service (‘Terms’).
                    If you do not agree to these Terms, you must refrain from using the
                    website.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">
                    2. Description of the website and the Services offered
                  </p>
                  <p>
                    The website is a blog that offers the possibility of consulting and
                    easily accessing authoritative websites. The website is intended
                    exclusively for consumers and does not require registration to access
                    the content offered.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">3. Access to and use of the website</p>
                  <p class="font-medium">Free access:</p>
                  <p>
                    Access to the website and consultation of the contents are free of
                    charge.
                  </p>
                  <p class="font-medium">Third Party Content:</p>

                  <p>
                    The website offers links and references to third party webwebsites
                    that are considered authoritative. We do not guarantee the accuracy,
                    completeness or timeliness of the information on these websites.
                    Prohibition of publication of content: Users are not authorised to
                    publish content on the website. All rights to the content are reserved
                    and do not belong to the platform.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">4. Intellectual Property</p>
                  <p>
                    All content, including text, graphics, logos, images and data, are the
                    property of their respective owners and are protected by copyright and
                    intellectual property laws. Unauthorised use of the contents of the
                    website may constitute a violation of applicable laws.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">5. Limitation of Liability</p>
                  <p>
                    The website is provided on an <b>‘as is’</b> and
                    <b>‘as available’</b> basis without warranty of any kind, either
                    express or implied, including, but not limited to, warranties of
                    merchantability, fitness for a particular purpose and
                    non-infringement. In no event shall the owner of the website be liable
                    for any direct, indirect, incidental, special or consequential damages
                    arising out of the use or inability to use the website, including any
                    damages resulting from errors, omissions or interruptions of service.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">6. GDPR compliance</p>
                  <p>
                    The website complies with the General Data Protection Regulation
                    (GDPR). Any personal data we collect will be processed in accordance
                    with applicable UK law and will only be used for the purposes set out
                    in our Privacy Policy. For further details on how we process your
                    personal data, please see our Privacy Policy.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">7. DMCA Provisions</p>
                  <p>
                    In accordance with the Digital Millennium Copyright Act (DMCA) and
                    applicable laws, the website complies with copyright law. If you
                    believe that your copyrighted work has been copied and posted on the
                    website in a way that constitutes copyright infringement, please
                    contact us immediately in the manner set forth in our DMCA Policy.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">8. Account cancellation</p>
                  <p>
                    Although registration is not necessary to use the website, if an
                    account is created to take advantage of additional services, the user
                    may request its cancellation by email or via the dedicated web
                    interface. The request will be processed in accordance with the
                    regulations in force.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">9. Changes to the Terms of Service</p>
                  <p>
                    The website owner reserves the right to modify or update these Terms
                    at any time. Notice of changes will be given by posting the new
                    version on the website, and continued use of the website will
                    constitute acceptance of the updated terms.
                  </p>
                </li>
                <li>
                  <br />
                  <p class="font-semibold">10. Applicable Law and Jurisdiction</p>
                  <p>
                    These Terms shall be governed by and construed in accordance with the
                    laws of the United Kingdom. Any dispute arising out of the use of the
                    website shall be subject to the exclusive jurisdiction of the
                    competent courts of the United Kingdom.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </Base>
</template>

<script setup>
import Base from "@/templates/Base.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
</script>
