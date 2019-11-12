import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import { IntroWrapper, IntroImage, IntroTitle, Desciption } from "./style"
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/wes-corman/",
    tooltip: "LinkedIn",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/wcorman",
    tooltip: "Github",
  },
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/BiggWes",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/wcorman/",
    tooltip: "Instagram",
  },
]

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.png/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { author, about } = Data.site.siteMetadata
  const AuthorImage = Data.avatar.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroTitle>
        Hey! I’m <b>{author}</b>
      </IntroTitle>
      <Desciption>{about}</Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  )
}

export default Intro
