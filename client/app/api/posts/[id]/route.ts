import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// GET single post
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id) },
        });

        if (!post) {
            return NextResponse.json({ message: 'Yazı bulunamadı!' }, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error('Fetch single post error:', error);
        return NextResponse.json({ message: 'Yazı yüklenirken bir hata oluştu!' }, { status: 500 });
    }
}

// DELETE post
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.post.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: 'Yazı başarıyla silindi!' }, { status: 200 });
    } catch (error) {
        console.error('Delete post error:', error);
        return NextResponse.json({ message: 'Yazı silinirken bir hata oluştu!' }, { status: 500 });
    }
}

// UPDATE post
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { title, description, photo, categories } = body;

        const updatedPost = await prisma.post.update({
            where: { id: parseInt(id) },
            data: {
                title,
                description,
                photo,
                categories: categories || [],
            },
        });

        return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
        console.error('Update post error:', error);
        return NextResponse.json({ message: 'Yazı güncellenirken bir hata oluştu!' }, { status: 500 });
    }
}
