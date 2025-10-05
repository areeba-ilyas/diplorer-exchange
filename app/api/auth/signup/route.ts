import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // ✅ Yahan apna signup logic likhein
    // Example:
    // const { email, password } = body
    
    return NextResponse.json({ 
      success: true,
      message: 'User created successfully'
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// ✅ Agar GET method bhi chahiye toh
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
}