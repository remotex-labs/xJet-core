---
layout: home
title: 'xJet Core'
titleTemplate: 'xJet Core · Shared kernel for the xJet test runner'
hero:
    name: 'xJet Core'
    text: 'Shared kernel for xJet'
    tagline: The contracts every xJet package builds on - the runner event protocol, the transport interface, and the shared types exchanged between the xJet host and its runtimes.
    actions:
        - theme: brand
          text: Get Started
          link: ./guide
        - theme: alt
          text: View on GitHub
          link: https://github.com/remotex-labs/xJet-core
    image:
        src: /logo.png
        alt: 'xJet Core logo'

features:
    - icon: 📨
      title: Event Protocol
      details: The RunnerEvent union (suite and test lifecycle, logs, fatal errors, and coverage) that runtimes emit and the host consumes.

    - icon: 🔌
      title: Transport Contract
      details: One Transport interface with structured-clone (worker threads) and binary (external runners) encoders, so every runner speaks the same language.

    - icon: 🧩
      title: Shared Types & Identity
      details: Status enums, run/runner/suite identifiers, and the runtime-config shape the host ships into each runtime.

    - icon: 🪶
      title: Lean & Framework-Free
      details: Pure contracts that both the host and the runtimes import, with no test-framework runtime pulled along.
---
