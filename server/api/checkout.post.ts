export default defineEventHandler(async (event) => {
  const { amount, theme } = await readBody<{ amount: unknown, theme?: unknown }>(event)
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 1)
    throw createError({ statusCode: 400, statusMessage: 'Amount must be at least $1' })

  const config = useRuntimeConfig(event)
  const base = config.dodoEnv === 'test_mode' ? 'https://test.dodopayments.com' : 'https://live.dodopayments.com'
  const origin = getRequestURL(event).origin

  const session = await $fetch<{ checkout_url: string | null }>(`${base}/checkouts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${config.dodoApiKey}` },
    body: {
      product_cart: [{ product_id: config.dodoProductId, quantity: 1, amount: Math.round(amount * 100) }],
      return_url: `${origin}/drift/thanks/`,
      cancel_url: `${origin}/drift/`,
      minimal_address: true,
      feature_flags: { allow_discount_code: false },
      customization: {
        theme: theme === 'dark' ? 'dark' : 'light',
        // Mirrors the site's tokens in app/assets/css/tailwind.css.
        theme_config: {
          font_primary_url: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap',
          radius: '12px',
          pay_button_text: 'Donate',
          light: {
            bg_primary: '#ffffff',
            bg_secondary: '#f5f6f8',
            text_primary: '#121316',
            text_secondary: '#5c616b',
            text_error: '#b42318',
            border_primary: '#e2e4e8',
            border_secondary: '#eef0f3',
            button_primary: '#fcad01',
            button_primary_hover: '#e39c01',
            button_text_primary: '#1a1400',
            input_focus_border: '#fcad01',
          },
          dark: {
            bg_primary: '#121418',
            bg_secondary: '#090b0f',
            text_primary: '#f0f2f5',
            text_secondary: '#a0a5ae',
            text_error: '#ffb4ab',
            border_primary: '#2a2e36',
            border_secondary: '#1a1d23',
            button_primary: '#fcad01',
            button_primary_hover: '#e39c01',
            button_text_primary: '#1a1400',
            input_focus_border: '#fcad01',
          },
        },
      },
    },
  })

  if (!session.checkout_url)
    throw createError({ statusCode: 502, statusMessage: 'Dodo Payments did not return a checkout link' })
  return { checkoutUrl: session.checkout_url }
})
