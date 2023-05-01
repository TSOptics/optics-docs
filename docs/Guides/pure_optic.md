---
title: PureOptic
---

A `PureOptic` is an optic that is not linked to a store. You can't pass it to `useOptic()`.

Instead you pass the root object explicitly to `.get()` and `.set()` each time. It allows you to use the full power of optics when you don't need a global store but just to read and/or tranform arbitrary immutable data.
