import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// GET all posts
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const cat = searchParams.get('cat');
        const user = searchParams.get('user');

        let posts;
        if (user) {
            posts = await prisma.post.findMany({
                where: { username: user },
                orderBy: { createdAt: 'desc' },
            });
        } else if (cat) {
            posts = await prisma.post.findMany({
                where: {
                    categories: {
                        has: cat,
                    },
                },
                orderBy: { createdAt: 'desc' },
            });
        } else {
            posts = await prisma.post.findMany({
                orderBy: { createdAt: 'desc' },
            });
        }

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Fetch posts error:', error);
        return NextResponse.json({ message: 'Yazılar yüklenirken bir hata oluştu!' }, { status: 500 });
    }
}

// POST new post
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, description, photo, username, categories } = body;

        const newPost = await prisma.post.create({
            data: {
                title,
                description,
                photo,
                username,
                categories: categories || [],
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error('Create post error:', error);
        return NextResponse.json({ message: 'Yazı oluşturulurken bir hata oluştu!' }, { status: 500 });
    }
}
