import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        id: string;
        email: string;
        password_hash: string | null;
        username: string;
        display_name: string | null;
        avatar_url: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        oauth_provider: string | null;
        oauth_id: string | null;
        two_factor_secret: string | null;
        two_factor_enabled: boolean;
        language: string;
        is_online: boolean;
        last_seen: Date | null;
        created_at: Date;
        updated_at: Date;
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        userId: string;
        email: string;
    }>;
}
