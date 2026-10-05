export default defineCachedEventHandler(
  () => resolveVersion('prism-version.cutwire.org'),
  { maxAge: 300, staleMaxAge: 3600 },
)
