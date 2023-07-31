import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(5, '10 m')
})

export default async function middleware(
	request: NextRequest,
): Promise<Response | undefined> {
	const ip = request.ip ?? '127.0.0.1'
	const { success } = await ratelimit.limit(ip)

	return success
		? NextResponse.next()
		: new Response(JSON.stringify({ message: 'You are being Rate limited' }), {
			status: 429
		})
}

export const config = {
	matcher: '/api/completion'
}
