"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.7.0",
    "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id                 String    @id @default(uuid())\n  email              String    @unique\n  password_hash      String?\n  username           String    @unique\n  display_name       String?\n  avatar_url         String?\n  balance            Decimal   @default(10000.00)\n  oauth_provider     String?\n  oauth_id           String?\n  two_factor_secret  String?\n  two_factor_enabled Boolean   @default(false)\n  language           String    @default(\"en\")\n  is_online          Boolean   @default(false)\n  last_seen          DateTime?\n  created_at         DateTime  @default(now())\n  updated_at         DateTime  @updatedAt\n\n  @@map(\"users\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password_hash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"display_name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatar_url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"balance\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"oauth_provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"oauth_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"two_factor_secret\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"two_factor_enabled\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"language\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"is_online\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"last_seen\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"users\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"email\",\"password_hash\",\"username\",\"display_name\",\"avatar_url\",\"balance\",\"oauth_provider\",\"oauth_id\",\"two_factor_secret\",\"two_factor_enabled\",\"language\",\"is_online\",\"last_seen\",\"created_at\",\"updated_at\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "QQsQExwAAC8AMB0AAAQAEB4AAC8AMB8BAAAAASABAAAAASEBADEAISIBAAAAASMBADEAISQBADEAISUQADIAISYBADEAIScBADEAISgBADEAISkgADMAISoBADAAISsgADMAISxAADQAIS1AADUAIS5AADUAIQEAAAABACABAAAAAQAgExwAAC8AMB0AAAQAEB4AAC8AMB8BADAAISABADAAISEBADEAISIBADAAISMBADEAISQBADEAISUQADIAISYBADEAIScBADEAISgBADEAISkgADMAISoBADAAISsgADMAISxAADQAIS1AADUAIS5AADUAIQchAAA2ACAjAAA2ACAkAAA2ACAmAAA2ACAnAAA2ACAoAAA2ACAsAAA2ACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAQHwEAAAABIAEAAAABIQEAAAABIgEAAAABIwEAAAABJAEAAAABJRAAAAABJgEAAAABJwEAAAABKAEAAAABKSAAAAABKgEAAAABKyAAAAABLEAAAAABLUAAAAABLkAAAAABAQgAAAkAIBAfAQAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjAQAAAAEkAQAAAAElEAAAAAEmAQAAAAEnAQAAAAEoAQAAAAEpIAAAAAEqAQAAAAErIAAAAAEsQAAAAAEtQAAAAAEuQAAAAAEBCAAACwAwAQgAAAsAMBAfAQA8ACEgAQA8ACEhAQA9ACEiAQA8ACEjAQA9ACEkAQA9ACElEAA-ACEmAQA9ACEnAQA9ACEoAQA9ACEpIAA_ACEqAQA8ACErIAA_ACEsQABAACEtQABBACEuQABBACECAAAAAQAgCAAADgAgEB8BADwAISABADwAISEBAD0AISIBADwAISMBAD0AISQBAD0AISUQAD4AISYBAD0AIScBAD0AISgBAD0AISkgAD8AISoBADwAISsgAD8AISxAAEAAIS1AAEEAIS5AAEEAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgDBUAADcAIBYAADgAIBcAADsAIBgAADoAIBkAADkAICEAADYAICMAADYAICQAADYAICYAADYAICcAADYAICgAADYAICwAADYAIBMcAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAcACEiAQAbACEjAQAcACEkAQAcACElEAAdACEmAQAcACEnAQAcACEoAQAcACEpIAAeACEqAQAbACErIAAeACEsQAAfACEtQAAgACEuQAAgACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIBMcAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAcACEiAQAbACEjAQAcACEkAQAcACElEAAdACEmAQAcACEnAQAcACEoAQAcACEpIAAeACEqAQAbACErIAAeACEsQAAfACEtQAAgACEuQAAgACEOFQAAIgAgGAAALgAgGQAALgAgLwEAAAABMAEAAAAEMQEAAAAEMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEALQAhNwEAAAABOAEAAAABOQEAAAABDhUAACUAIBgAACwAIBkAACwAIC8BAAAAATABAAAABTEBAAAABTIBAAAAATMBAAAAATQBAAAAATUBAAAAATYBACsAITcBAAAAATgBAAAAATkBAAAAAQ0VAAAiACAWAAAqACAXAAAqACAYAAAqACAZAAAqACAvEAAAAAEwEAAAAAQxEAAAAAQyEAAAAAEzEAAAAAE0EAAAAAE1EAAAAAE2EAApACEFFQAAIgAgGAAAKAAgGQAAKAAgLyAAAAABNiAAJwAhCxUAACUAIBgAACYAIBkAACYAIC9AAAAAATBAAAAABTFAAAAABTJAAAAAATNAAAAAATRAAAAAATVAAAAAATZAACQAIQsVAAAiACAYAAAjACAZAAAjACAvQAAAAAEwQAAAAAQxQAAAAAQyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAhACELFQAAIgAgGAAAIwAgGQAAIwAgL0AAAAABMEAAAAAEMUAAAAAEMkAAAAABM0AAAAABNEAAAAABNUAAAAABNkAAIQAhCC8CAAAAATACAAAABDECAAAABDICAAAAATMCAAAAATQCAAAAATUCAAAAATYCACIAIQgvQAAAAAEwQAAAAAQxQAAAAAQyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAjACELFQAAJQAgGAAAJgAgGQAAJgAgL0AAAAABMEAAAAAFMUAAAAAFMkAAAAABM0AAAAABNEAAAAABNUAAAAABNkAAJAAhCC8CAAAAATACAAAABTECAAAABTICAAAAATMCAAAAATQCAAAAATUCAAAAATYCACUAIQgvQAAAAAEwQAAAAAUxQAAAAAUyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAmACEFFQAAIgAgGAAAKAAgGQAAKAAgLyAAAAABNiAAJwAhAi8gAAAAATYgACgAIQ0VAAAiACAWAAAqACAXAAAqACAYAAAqACAZAAAqACAvEAAAAAEwEAAAAAQxEAAAAAQyEAAAAAEzEAAAAAE0EAAAAAE1EAAAAAE2EAApACEILxAAAAABMBAAAAAEMRAAAAAEMhAAAAABMxAAAAABNBAAAAABNRAAAAABNhAAKgAhDhUAACUAIBgAACwAIBkAACwAIC8BAAAAATABAAAABTEBAAAABTIBAAAAATMBAAAAATQBAAAAATUBAAAAATYBACsAITcBAAAAATgBAAAAATkBAAAAAQsvAQAAAAEwAQAAAAUxAQAAAAUyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAE2AQAsACE3AQAAAAE4AQAAAAE5AQAAAAEOFQAAIgAgGAAALgAgGQAALgAgLwEAAAABMAEAAAAEMQEAAAAEMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEALQAhNwEAAAABOAEAAAABOQEAAAABCy8BAAAAATABAAAABDEBAAAABDIBAAAAATMBAAAAATQBAAAAATUBAAAAATYBAC4AITcBAAAAATgBAAAAATkBAAAAARMcAAAvADAdAAAEABAeAAAvADAfAQAwACEgAQAwACEhAQAxACEiAQAwACEjAQAxACEkAQAxACElEAAyACEmAQAxACEnAQAxACEoAQAxACEpIAAzACEqAQAwACErIAAzACEsQAA0ACEtQAA1ACEuQAA1ACELLwEAAAABMAEAAAAEMQEAAAAEMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEALgAhNwEAAAABOAEAAAABOQEAAAABCy8BAAAAATABAAAABTEBAAAABTIBAAAAATMBAAAAATQBAAAAATUBAAAAATYBACwAITcBAAAAATgBAAAAATkBAAAAAQgvEAAAAAEwEAAAAAQxEAAAAAQyEAAAAAEzEAAAAAE0EAAAAAE1EAAAAAE2EAAqACECLyAAAAABNiAAKAAhCC9AAAAAATBAAAAABTFAAAAABTJAAAAAATNAAAAAATRAAAAAATVAAAAAATZAACYAIQgvQAAAAAEwQAAAAAQxQAAAAAQyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAjACEAAAAAAAABOgEAAAABAToBAAAAAQU6EAAAAAE7EAAAAAE8EAAAAAE9EAAAAAE-EAAAAAEBOiAAAAABATpAAAAAAQE6QAAAAAEAAAAABRUABhYABxcACBgACRkACgAAAAAABRUABhYABxcACBgACRkACgECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhoYBRsZCw"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map