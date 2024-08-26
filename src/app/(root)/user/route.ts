import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
    const body = await request.json();

    if (body.type === "register") {
        // Registration logic (as you already have it)
        const hashedPassword = await bcrypt.hash(body.password, 10);

        const user = await prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                email: body.email,
                password: hashedPassword,
            },
        });

        return NextResponse.json(user);
    } else if (body.type === "login") {
        // Login logic


        const user = await prisma.user.findFirst({
            where: { username: body.username },
        });

        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 401 });
        }

        const passwordMatch = await bcrypt.compare(body.password, user.password);

        if (!passwordMatch) {
            return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
        }

        // Successful login
        return NextResponse.json({ success: true, message: 'Login successful', user });
    } else {
        return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });
    }
};
