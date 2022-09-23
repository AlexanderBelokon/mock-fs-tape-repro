# mock-fs-tape-repro

There's an issue when running Node16+ with `mock-fs` and `tape`.

If you run `npm run test` in the repo, `tape`'s output looks fine, but the exit code of the node process is `134` instead of `0`, as if it was terminated abnormally.

If you run `npm run hack` it finishes with `0`, as it should.
