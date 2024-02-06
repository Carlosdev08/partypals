export async function POST(request, NextResponse) {
    try {
        const { email, password } = await request?.json();
        login(email);
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }
        const registrationResult = await registerUser(email, password);

        if (registrationResult.success) {
            // Registration successful
            return NextResponse.json({
                message: "Registration successful.",
                user: registrationResult.user,
            });
        } else {
            // Registration failed, return an error response
            return NextResponse.json(
                { error: registrationResult.error },
                { status: 500 }
            );
        }
    } catch (error) {
        // Handle unexpected errors
        console.error("Error during registration:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}