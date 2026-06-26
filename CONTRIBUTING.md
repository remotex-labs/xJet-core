# Contributing to xJet Core

Thanks for your interest in contributing.
Bug reports, fixes, features, and documentation improvements are all welcome.
This guide explains how to set up the project and get a change merged.

## Code of conduct

By participating you agree to follow the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Be respectful and constructive in issues, pull requests, and reviews.

## Ways to contribute

- **Report a bug**: open a [bug report](https://github.com/remotex-labs/xJet-core/issues/new?template=bug_report.md) with a minimal reproduction.
- **Request a feature**: open a [feature request](https://github.com/remotex-labs/xJet-core/issues/new?template=feature_request.md) describing the use case.
- **Send a pull request**: fix a bug, add a feature, or improve the docs.

Search [existing issues](https://github.com/remotex-labs/xJet-core/issues) first to avoid duplicates.

## Development setup

xJet-core uses [pnpm](https://pnpm.io) and requires Node.js 22 or later.

```bash
git clone https://github.com/remotex-labs/xJet-core.git
cd xJet-core
pnpm install
```

### Scripts

| Command              | Description                                              |
|----------------------|----------------------------------------------------------|
| `pnpm build`         | Build the package to `dist/`.                            |
| `pnpm dev`           | Build in watch mode.                                     |
| `pnpm test`          | Run the test suite (xJet).                               |
| `pnpm test:coverage` | Run tests with coverage.                                 |
| `pnpm lint`          | Run markdownlint, ESLint, and the TypeScript type check. |
| `pnpm build:clean`   | Remove `dist/` and rebuild from scratch.                 |
| `pnpm docs:dev`      | Serve the VitePress docs locally.                        |
| `pnpm docs:build`    | Build the docs.                                          |

Run `pnpm lint`, `pnpm test`, and `pnpm build` before opening a pull request. CI runs these as separate jobs.

## Workflow

1. Fork the repository and create a branch from `master`.

   ```bash
   git checkout -b feature/short-description
   ```

2. Make your change, with tests and documentation.
3. Verify everything passes:

   ```bash
   pnpm lint
   pnpm test
   pnpm build
   ```

4. Push your branch and open a pull request against `master`. Fill in the pull request template.

Keep pull requests small and focused; they are easier to review and merge.

## Commit messages

Follow the existing history: a lowercase area prefix, a colon, then an imperative summary.

```text
protocol: Add the coverage event to the runner event union
core: Export the run and suite identifier types
docs: Rewrite the getting-started guide
```

- Use the imperative mood ("Add", not "Added" or "Adds").
- Keep the first line at or under 72 characters.
- Reference related issues in the body (for example, `Closes #123`).

## Coding standards

- Write **TypeScript** with explicit types; avoid `any`.
- Document every exported symbol with **TSDoc**, including an `@since` tag. Keep the tag order consistent with the
  rest of the codebase: description, `@param`, `@returns`, `@throws`, `@remarks`, `@example`, `@see`, `@since`.
- Keep functions small, pure, and testable.
- Match the surrounding style; `pnpm lint` enforces formatting, imports, and the type check.

## Tests

Tests use **xJet**. Place a `*.spec.ts` file next to the code it covers.

```ts
describe('decodeEvent', () => {
    test('round-trips a test:end event', () => {
        const event = { t: 'test:end', status: 'pass' /* ... */ } as const;

        expect(decodeEvent(encodeEvent(event))).toEqual(event);
    });
});
```

Cover edge cases: malformed buffers, unknown event kinds, and round-trip equality across every event kind.

## Documentation

- Update the TSDoc for any public API you change.
- Update the VitePress docs under `docs/src/` when behavior or the API changes.
- Run `pnpm lint:md` to keep Markdown clean, and `pnpm docs:build` to check for broken links.

## Versioning

xJet-core follows [Semantic Versioning](https://semver.org/): MAJOR for incompatible API changes, MINOR for backward-compatible features, and PATCH for backward-compatible fixes.

## License

By contributing, you agree that your contributions are licensed under the project's [Mozilla Public License 2.0](LICENSE).
