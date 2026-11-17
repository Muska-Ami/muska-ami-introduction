'use client'

import { Avatar, Label, Link, ProgressBar, Separator } from '@heroui/react'

import { ThemeSwitcher } from '@/components/theme-switcher'

const TITLE = "Hello, I'm 夏沫花火zzz🌙(Muska_Ami)."
const AVATAR_SRC = 'https://blog.amaicat.work/images/avatar.jpg'
const TYPING_SRC =
  'https://readme-typing-svg.amaicat.work/?font=Poppins&pause=1000&color=FF6FA5&background=FF6FA500&center=%E7%9C%9F&vCenter=%E7%9C%9F&repeat=%E7%9C%9F&width=435&lines=Keep+doing%2C+keep+loving%E2%9D%A4.'

const TRAITS = [
  { label: '务实', value: 65 },
  { label: '懒惰', value: 47 },
  { label: '可爱', value: 83 },
  { label: '傲娇', value: 76 },
  { label: '理智', value: 97 },
  { label: '聪慧', value: 88 }
]

const LANGUAGE_BADGES = [
  {
    alt: '简体中文',
    src: 'https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-2fb1f3?style=flat-square'
  },
  { alt: 'English', src: 'https://img.shields.io/badge/English-2fb1f3?style=flat-square' },
  {
    alt: '日本語',
    src: 'https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-yellow?style=flat-square'
  }
]

const SKILL_BADGES = [
  {
    alt: 'Java',
    src: 'https://img.shields.io/badge/Java-%20?style=flat-square&logo=openjdk&logoColor=white&color=a57829'
  },
  {
    alt: 'Kotlin',
    src: 'https://img.shields.io/badge/Kotlin-%20?style=flat-square&logo=kotlin&logoColor=white&color=7F52FF'
  },
  {
    alt: 'Dart',
    src: 'https://img.shields.io/badge/Dart-%20?style=flat-square&logo=dart&logoColor=white&color=0175C2'
  },
  {
    alt: 'Flutter',
    src: 'https://img.shields.io/badge/Flutter-%20?style=flat-square&logo=flutter&logoColor=white&color=02569B'
  },
  {
    alt: 'HTML5',
    src: 'https://img.shields.io/badge/HTML5-%20?style=flat-square&logo=html5&logoColor=white&color=E34F26'
  },
  {
    alt: 'JavaScript',
    src: 'https://img.shields.io/badge/JavaScript-%20?style=flat-square&logo=javascript&logoColor=white&color=F7DF1E'
  },
  {
    alt: 'TypeScript',
    src: 'https://img.shields.io/badge/TypeScript-%20?style=flat-square&logo=typescript&logoColor=white&color=3178C6'
  },
  {
    alt: 'Vue3',
    src: 'https://img.shields.io/badge/Vue3-%20?style=flat-square&logo=vuedotjs&logoColor=white&color=4FC08D'
  },
  {
    alt: 'CSS3',
    src: 'https://img.shields.io/badge/CSS3-%20?style=flat-square&logo=css3&logoColor=white&color=1572B6'
  },
  {
    alt: 'Node.js',
    src: 'https://img.shields.io/badge/Node.js-%20?style=flat-square&logo=nodedotjs&logoColor=white&color=339933'
  },
  {
    alt: 'Pug',
    src: 'https://img.shields.io/badge/Pug-%20?style=flat-square&logo=pug&logoColor=white&color=A86454'
  },
  {
    alt: 'EJS',
    src: 'https://img.shields.io/badge/EJS-%20?style=flat-square&logo=ejs&logoColor=white&color=B4CA65'
  },
  {
    alt: 'Bun',
    src: 'https://img.shields.io/badge/Bun-%20?style=flat-square&logo=bun&logoColor=white&color=000000'
  }
]

const PROFILE_BADGES = [
  {
    alt: 'Muska_AmiのBLOG',
    href: 'https://blog.amaicat.work',
    src: 'https://img.shields.io/badge/Muska_Ami%E3%81%AEBLOG-blue?style=flat-square'
  },
  {
    alt: 'GitHub',
    href: 'https://github.com/Muska-Ami',
    src: 'https://img.shields.io/badge/GitHub-black?style=flat-square'
  },
  {
    alt: 'Gravatar',
    href: 'https://gravatar.com/muskaami',
    src: 'https://img.shields.io/badge/Gravatar-blue?style=flat-square'
  }
]

interface ThemeImage {
  alt: string
  dark: string
  light: string
}

/*
 * Every chart below is published in a light and a dark flavour, and each is
 * drawn with its own opaque background. Exactly one is rendered, picked by the
 * `dark` class, so a chart never sits on a backdrop it was not designed for.
 * The hidden copy is `display: none`, which keeps it out of the a11y tree and
 * leaves only the visible chart's `alt` announced.
 */
const WAKATIME_CHARTS: readonly ThemeImage[] = [
  {
    alt: 'WakaTime 语言统计图表',
    dark: 'https://wakatime.com/share/@018c1993-fbe1-48fd-9551-91e287631e43/8060cf95-a9a8-4d28-a6fc-b9a6cdaebb7c.svg',
    light:
      'https://wakatime.com/share/@018c1993-fbe1-48fd-9551-91e287631e43/a838fbe2-d1d9-4add-9891-eba26cada0ab.svg'
  },
  {
    alt: 'WakaTime 编辑器统计图表',
    dark: 'https://wakatime.com/share/@018c1993-fbe1-48fd-9551-91e287631e43/b4d620cc-b149-412c-b805-6cf37daa15bd.svg',
    light:
      'https://wakatime.com/share/@018c1993-fbe1-48fd-9551-91e287631e43/87c26936-403c-4219-83de-b62aff6ec2ae.svg'
  }
]

const TOKENS_CHARTS: readonly ThemeImage[] = [
  {
    alt: 'Tokens 统计图表',
    dark: 'https://tokens.ci/api/embed/Muska-Ami/svg?view=3d',
    light: 'https://tokens.ci/api/embed/Muska-Ami/svg?view=3d&theme=light'
  }
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="flex items-center gap-2.5 text-base font-semibold text-foreground sm:text-lg">
        <span aria-hidden="true" className="h-4 w-1 shrink-0 rounded-full bg-accent" />
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-[15px] leading-7 text-muted">{children}</div>
    </section>
  )
}

function BadgeRow({ badges }: { badges: readonly { alt: string; src: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {badges.map((badge) => (
        <img
          key={badge.src}
          alt={badge.alt}
          className="h-5 w-auto"
          height={20}
          loading="lazy"
          src={badge.src}
        />
      ))}
    </div>
  )
}

function ThemeChartPair({ chart }: { chart: ThemeImage }) {
  return (
    <>
      <img
        alt={chart.alt}
        className="w-full rounded-2xl dark:hidden"
        loading="lazy"
        src={chart.light}
      />
      <img
        alt={chart.alt}
        className="hidden w-full rounded-2xl dark:block"
        loading="lazy"
        src={chart.dark}
      />
    </>
  )
}

export function HomeContent({ year }: { year: number }) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-5 py-12 sm:px-6 sm:py-20">
      <header className="grid grid-cols-[60px_minmax(0,1fr)] items-center gap-x-5 gap-y-3">
        <Avatar className="size-[60px] shrink-0 rounded-2xl">
          <Avatar.Image alt="头像" src={AVATAR_SRC} />
          <Avatar.Fallback className="rounded-2xl">Ami</Avatar.Fallback>
        </Avatar>
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-3">
          <h1 className="min-w-40 flex-1 text-xl font-bold text-foreground sm:text-2xl">{TITLE}</h1>
          <ThemeSwitcher />
        </div>
        <img
          alt="Keep doing, keep loving❤."
          className="col-span-2 h-auto w-full max-w-[435px]"
          src={TYPING_SRC}
        />
      </header>

      <Separator />

      <Section title="About me">
        <p>一名来自中国大陆的高中猫猫，现居广西壮族自治区。</p>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {TRAITS.map((trait) => (
            <ProgressBar
              key={trait.label}
              aria-label={trait.label}
              color="accent"
              size="sm"
              value={trait.value}
            >
              <Label>{trait.label}</Label>
              <ProgressBar.Output />
              <ProgressBar.Track>
                <ProgressBar.Fill />
              </ProgressBar.Track>
            </ProgressBar>
          ))}
        </div>
        <p>
          喵喵喵？我很可爱的，请给我钱喵！
          <br />
          才怪，本猫猫不会乱要钱哒qwq
        </p>
      </Section>

      <Section title="Languages that use">
        <BadgeRow badges={LANGUAGE_BADGES} />
      </Section>

      <Section title="What I can do & can't">
        <p>
          我可以写前端！
          <br />
          我也可以帮你看后端代码，但是请不要太为难我去看一些抽象的语言，暂时无法理解比如 Rust,
          Haskell 这样的语言哦~
          <br />
          还有更多我可以帮你的......
        </p>
        <BadgeRow badges={SKILL_BADGES} />
        <p>
          当然其他语言我也可以尽力阅读的呐，不过太复杂的就看不懂惹TwT
          <br />
          {'其他方面上请'}
          <strong className="font-semibold text-foreground">不要</strong>
          {'叫我男娘！我非常不喜欢这个称呼qaq'}
        </p>
      </Section>

      <Section title="Public Keys">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium text-foreground">GPG Public Keys</h3>
            <Link
              className="w-fit"
              href="https://github.com/Muska-Ami.gpg"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium text-foreground">SSH Public Keys</h3>
            <Link
              className="w-fit"
              href="https://github.com/Muska-Ami.keys"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Network">
        <p>
          欢迎来造访我的网络 Muska Network~
          <br />
          <Link
            className="w-fit"
            href="https://muska.zip"
            rel="noopener noreferrer"
            target="_blank"
          >
            Muska Network
          </Link>
        </p>
      </Section>

      <Section title="Lab">
        <p>
          这是花火以及几个朋友的实验室喵，欢迎造访w （目前看来已经凉了
          <br />
          <Link
            className="w-fit"
            href="https://github.com/k43Lab"
            rel="noopener noreferrer"
            target="_blank"
          >
            k43Lab
          </Link>
        </p>
      </Section>

      <Section title="Links">
        <div className="flex flex-wrap items-center gap-3">
          {PROFILE_BADGES.map((badge) => (
            <a
              key={badge.href}
              aria-label={badge.alt}
              className="rounded-sm transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              href={badge.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt={badge.alt} className="h-5 w-auto" height={20} src={badge.src} />
            </a>
          ))}
        </div>
      </Section>

      <Section title="DevOps & Stats">
        {WAKATIME_CHARTS.map((chart) => (
          <ThemeChartPair key={chart.light} chart={chart} />
        ))}
        {TOKENS_CHARTS.map((chart) => (
          <ThemeChartPair key={chart.light} chart={chart} />
        ))}
      </Section>

      <Separator />

      <footer className="flex flex-col gap-2 text-xs leading-6 text-muted">
        <p>
          Copyright © {year}{' '}
          <Link
            className="text-xs"
            href="https://amaicat.work"
            rel="noopener noreferrer"
            target="_blank"
          >
            夏沫花火zzz🌙
          </Link>
          . All right reserved.
        </p>
        <p>
          <Link
            className="text-xs"
            href="https://icp.gov.moe/?keyword=20220860"
            rel="noopener noreferrer"
            target="_blank"
          >
            萌ICP备20220860号
          </Link>
        </p>
        <p className="flex flex-wrap items-center gap-2">
          <Link
            className="text-xs"
            href="https://beian.miit.gov.cn"
            rel="noopener noreferrer"
            target="_blank"
          >
            浙ICP备2024084850号-3
          </Link>
          <span aria-hidden="true">|</span>
          <Link
            className="text-xs"
            href="https://beian.mps.gov.cn/#/query/webSearch?code=33038102332674"
            rel="noopener noreferrer"
            target="_blank"
          >
            浙公网安备33038102332674号
          </Link>
        </p>
      </footer>
    </main>
  )
}
