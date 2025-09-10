import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      )
    }

    console.log('Новое сообщение:', { name, email, message })
    
    return NextResponse.json(
      { success: true, message: 'Сообщение отправлено' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Ошибка обработки формы:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}