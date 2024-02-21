import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Oneiros2024 from "../assets/oneiros2024.png";
import MediaQuery from "react-responsive";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-black text-white">
          <div className="flex">
            <div className="mx-auto pt-8">
              <ul className="grid md:grid-cols-3 gap-6 md:gap-0 justify-items-center w-[90vw]">
                <MediaQuery minDeviceWidth={767}>
                  <li className="justify-self-start">
                    <ul className="gap-8">
                      <li className="mb-2">
                        <p className="font-black text-lg">Talk to Us</p>
                      </li>
                      <li className="text-sm opacity-90">
                        <ul>
                          <li>
                            <a href="tel:+91 9999999999">+91 9999999999</a>
                          </li>
                          <li>
                            <a href="mailto:oneiros@oneiros.in">
                              oneiros@oneiros.in
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                  <li className="mx-auto my-2">
                    <ul className="flex flex-col">
                      <li>
                        <Image
                          src={Oneiros2024}
                          alt="Oneiros'24"
                          className="w-48 -translate-x-1"
                        />
                      </li>
                      <li className="mx-auto">
                        <ul className="grid grid-cols-3 gap-4 justify-items-center">
                          <li>
                            <Link
                              to="https://www.instagram.com/mujoneiros"
                              target="_noref"
                            >
                              <FontAwesomeIcon
                                icon={faInstagram}
                                className="bg-white text-black rounded-full aspect-square p-1"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.facebook.com/mujoneiros"
                              target="_noref"
                            >
                              <FontAwesomeIcon
                                icon={faFacebookF}
                                className="bg-white text-black rounded-full aspect-square p-1"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.linkedin.com/company/muj-oneiros"
                              target="_noref"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedinIn}
                                className="bg-white text-black rounded-full aspect-square p-1"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </MediaQuery>
                <MediaQuery minDeviceWidth={768}>
                  <li className="mx-auto my-2">
                    <ul className="flex flex-col">
                      <li>
                        <Image
                          src={Oneiros2024}
                          alt="Oneiros'24"
                          className="w-48 -translate-x-1"
                        />
                      </li>
                      <li className="mx-auto">
                        <ul className="grid grid-cols-3 gap-4 justify-items-center">
                          <li>
                            <Link
                              to="https://www.instagram.com/mujoneiros"
                              target="_noref"
                            >
                              <FontAwesomeIcon
                                icon={faInstagram}
                                className="bg-white text-black rounded-full aspect-square p-1"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.facebook.com/mujoneiros"
                              target="_noref"
                            >
                              <FontAwesomeIcon
                                icon={faFacebookF}
                                className="bg-white text-black rounded-full aspect-square p-1"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.linkedin.com/company/muj-oneiros"
                              target="_noref"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedinIn}
                                className="bg-white text-black rounded-full aspect-square p-1"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                  <li className="justify-self-start">
                    <ul className="gap-8">
                      <li className="mb-2">
                        <p className="font-black text-lg">Talk to Us</p>
                      </li>
                      <li className="text-sm opacity-90">
                        <ul>
                          <li>
                            <a href="tel:+91 9999999999">+91 9999999999</a>
                          </li>
                          <li>
                            <a href="mailto:oneiros@oneiros.in">
                              oneiros@oneiros.in
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </MediaQuery>
                <li className="justify-self-end">
                  <ul className="gap-8">
                    <li className="mb-2">
                      <p className="font-black text-lg">Visit Us</p>
                    </li>
                    <li className="text-sm opacity-90">
                      <p>
                        Manipal University Jaipur, Jaipur-Ajmer Express Highway,
                      </p>
                      <p>
                        Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan
                        303007
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <p className="text-center text-xs opacity-90">
              Made with 💛 by Oneiros&apos;24 Web Team
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
