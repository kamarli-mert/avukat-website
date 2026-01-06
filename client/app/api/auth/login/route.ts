import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/app/lib/prisma';

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json({ message: 'Geçersiz kullanıcı adı veya şifre!' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Geçersiz kullanıcı adı veya şifre!' }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '1d' }
        );

        return NextResponse.json({
            message: 'Giriş başarılı!',
            username: user.username,
            token
        }, { status: 200 });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Bir hata oluştu!' }, { status: 500 });
    }
}
