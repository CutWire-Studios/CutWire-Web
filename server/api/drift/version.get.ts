export default defineCachedEventHandler(
  () => resolveVersion('drift-version.cutwire.org'),
  { maxAge: 300, staleMaxAge: 3600 },
)
