
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TariffPlan
 * 
 */
export type TariffPlan = $Result.DefaultSelection<Prisma.$TariffPlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model SubscriptionHistory
 * 
 */
export type SubscriptionHistory = $Result.DefaultSelection<Prisma.$SubscriptionHistoryPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseUnit
 * 
 */
export type CourseUnit = $Result.DefaultSelection<Prisma.$CourseUnitPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonWebinar
 * 
 */
export type LessonWebinar = $Result.DefaultSelection<Prisma.$LessonWebinarPayload>
/**
 * Model LessonTest
 * 
 */
export type LessonTest = $Result.DefaultSelection<Prisma.$LessonTestPayload>
/**
 * Model TestQuestion
 * 
 */
export type TestQuestion = $Result.DefaultSelection<Prisma.$TestQuestionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LESSON_TYPES: {
  lecture: 'lecture',
  test: 'test',
  webinar: 'webinar'
};

export type LESSON_TYPES = (typeof LESSON_TYPES)[keyof typeof LESSON_TYPES]


export const TEST_TYPES: {
  single: 'single',
  multiple: 'multiple'
};

export type TEST_TYPES = (typeof TEST_TYPES)[keyof typeof TEST_TYPES]

}

export type LESSON_TYPES = $Enums.LESSON_TYPES

export const LESSON_TYPES: typeof $Enums.LESSON_TYPES

export type TEST_TYPES = $Enums.TEST_TYPES

export const TEST_TYPES: typeof $Enums.TEST_TYPES

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tariffPlan`: Exposes CRUD operations for the **TariffPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TariffPlans
    * const tariffPlans = await prisma.tariffPlan.findMany()
    * ```
    */
  get tariffPlan(): Prisma.TariffPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionHistory`: Exposes CRUD operations for the **SubscriptionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionHistories
    * const subscriptionHistories = await prisma.subscriptionHistory.findMany()
    * ```
    */
  get subscriptionHistory(): Prisma.SubscriptionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseUnit`: Exposes CRUD operations for the **CourseUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseUnits
    * const courseUnits = await prisma.courseUnit.findMany()
    * ```
    */
  get courseUnit(): Prisma.CourseUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonWebinar`: Exposes CRUD operations for the **LessonWebinar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonWebinars
    * const lessonWebinars = await prisma.lessonWebinar.findMany()
    * ```
    */
  get lessonWebinar(): Prisma.LessonWebinarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonTest`: Exposes CRUD operations for the **LessonTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonTests
    * const lessonTests = await prisma.lessonTest.findMany()
    * ```
    */
  get lessonTest(): Prisma.LessonTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testQuestion`: Exposes CRUD operations for the **TestQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestQuestions
    * const testQuestions = await prisma.testQuestion.findMany()
    * ```
    */
  get testQuestion(): Prisma.TestQuestionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TariffPlan: 'TariffPlan',
    Subscription: 'Subscription',
    SubscriptionHistory: 'SubscriptionHistory',
    Course: 'Course',
    CourseUnit: 'CourseUnit',
    Lesson: 'Lesson',
    LessonWebinar: 'LessonWebinar',
    LessonTest: 'LessonTest',
    TestQuestion: 'TestQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tariffPlan" | "subscription" | "subscriptionHistory" | "course" | "courseUnit" | "lesson" | "lessonWebinar" | "lessonTest" | "testQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TariffPlan: {
        payload: Prisma.$TariffPlanPayload<ExtArgs>
        fields: Prisma.TariffPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>
          }
          findFirst: {
            args: Prisma.TariffPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>
          }
          findMany: {
            args: Prisma.TariffPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>[]
          }
          create: {
            args: Prisma.TariffPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>
          }
          createMany: {
            args: Prisma.TariffPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TariffPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>[]
          }
          delete: {
            args: Prisma.TariffPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>
          }
          update: {
            args: Prisma.TariffPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>
          }
          deleteMany: {
            args: Prisma.TariffPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TariffPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>[]
          }
          upsert: {
            args: Prisma.TariffPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPlanPayload>
          }
          aggregate: {
            args: Prisma.TariffPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariffPlan>
          }
          groupBy: {
            args: Prisma.TariffPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TariffPlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionHistory: {
        payload: Prisma.$SubscriptionHistoryPayload<ExtArgs>
        fields: Prisma.SubscriptionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>
          }
          findMany: {
            args: Prisma.SubscriptionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>[]
          }
          create: {
            args: Prisma.SubscriptionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>
          }
          createMany: {
            args: Prisma.SubscriptionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>
          }
          update: {
            args: Prisma.SubscriptionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionHistoryPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionHistory>
          }
          groupBy: {
            args: Prisma.SubscriptionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionHistoryCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseUnit: {
        payload: Prisma.$CourseUnitPayload<ExtArgs>
        fields: Prisma.CourseUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          findFirst: {
            args: Prisma.CourseUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          findMany: {
            args: Prisma.CourseUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>[]
          }
          create: {
            args: Prisma.CourseUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          createMany: {
            args: Prisma.CourseUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>[]
          }
          delete: {
            args: Prisma.CourseUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          update: {
            args: Prisma.CourseUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          deleteMany: {
            args: Prisma.CourseUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>[]
          }
          upsert: {
            args: Prisma.CourseUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseUnitPayload>
          }
          aggregate: {
            args: Prisma.CourseUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseUnit>
          }
          groupBy: {
            args: Prisma.CourseUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseUnitCountArgs<ExtArgs>
            result: $Utils.Optional<CourseUnitCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonWebinar: {
        payload: Prisma.$LessonWebinarPayload<ExtArgs>
        fields: Prisma.LessonWebinarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonWebinarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonWebinarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>
          }
          findFirst: {
            args: Prisma.LessonWebinarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonWebinarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>
          }
          findMany: {
            args: Prisma.LessonWebinarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>[]
          }
          create: {
            args: Prisma.LessonWebinarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>
          }
          createMany: {
            args: Prisma.LessonWebinarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonWebinarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>[]
          }
          delete: {
            args: Prisma.LessonWebinarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>
          }
          update: {
            args: Prisma.LessonWebinarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>
          }
          deleteMany: {
            args: Prisma.LessonWebinarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonWebinarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonWebinarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>[]
          }
          upsert: {
            args: Prisma.LessonWebinarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonWebinarPayload>
          }
          aggregate: {
            args: Prisma.LessonWebinarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonWebinar>
          }
          groupBy: {
            args: Prisma.LessonWebinarGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonWebinarGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonWebinarCountArgs<ExtArgs>
            result: $Utils.Optional<LessonWebinarCountAggregateOutputType> | number
          }
        }
      }
      LessonTest: {
        payload: Prisma.$LessonTestPayload<ExtArgs>
        fields: Prisma.LessonTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>
          }
          findFirst: {
            args: Prisma.LessonTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>
          }
          findMany: {
            args: Prisma.LessonTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>[]
          }
          create: {
            args: Prisma.LessonTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>
          }
          createMany: {
            args: Prisma.LessonTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>[]
          }
          delete: {
            args: Prisma.LessonTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>
          }
          update: {
            args: Prisma.LessonTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>
          }
          deleteMany: {
            args: Prisma.LessonTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>[]
          }
          upsert: {
            args: Prisma.LessonTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonTestPayload>
          }
          aggregate: {
            args: Prisma.LessonTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonTest>
          }
          groupBy: {
            args: Prisma.LessonTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonTestCountArgs<ExtArgs>
            result: $Utils.Optional<LessonTestCountAggregateOutputType> | number
          }
        }
      }
      TestQuestion: {
        payload: Prisma.$TestQuestionPayload<ExtArgs>
        fields: Prisma.TestQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          findFirst: {
            args: Prisma.TestQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          findMany: {
            args: Prisma.TestQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>[]
          }
          create: {
            args: Prisma.TestQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          createMany: {
            args: Prisma.TestQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>[]
          }
          delete: {
            args: Prisma.TestQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          update: {
            args: Prisma.TestQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          deleteMany: {
            args: Prisma.TestQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>[]
          }
          upsert: {
            args: Prisma.TestQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestQuestionPayload>
          }
          aggregate: {
            args: Prisma.TestQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestQuestion>
          }
          groupBy: {
            args: Prisma.TestQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<TestQuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tariffPlan?: TariffPlanOmit
    subscription?: SubscriptionOmit
    subscriptionHistory?: SubscriptionHistoryOmit
    course?: CourseOmit
    courseUnit?: CourseUnitOmit
    lesson?: LessonOmit
    lessonWebinar?: LessonWebinarOmit
    lessonTest?: LessonTestOmit
    testQuestion?: TestQuestionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    SubscriptionHistory: number
    course: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubscriptionHistory?: boolean | UserCountOutputTypeCountSubscriptionHistoryArgs
    course?: boolean | UserCountOutputTypeCountCourseArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type TariffPlanCountOutputType
   */

  export type TariffPlanCountOutputType = {
    Subscription: number
    SubscriptionHistory: number
  }

  export type TariffPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | TariffPlanCountOutputTypeCountSubscriptionArgs
    SubscriptionHistory?: boolean | TariffPlanCountOutputTypeCountSubscriptionHistoryArgs
  }

  // Custom InputTypes
  /**
   * TariffPlanCountOutputType without action
   */
  export type TariffPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlanCountOutputType
     */
    select?: TariffPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TariffPlanCountOutputType without action
   */
  export type TariffPlanCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * TariffPlanCountOutputType without action
   */
  export type TariffPlanCountOutputTypeCountSubscriptionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionHistoryWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseUnits: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseUnits?: boolean | CourseCountOutputTypeCountCourseUnitsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseUnitWhereInput
  }


  /**
   * Count Type CourseUnitCountOutputType
   */

  export type CourseUnitCountOutputType = {
    lessons: number
  }

  export type CourseUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseUnitCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CourseUnitCountOutputType without action
   */
  export type CourseUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnitCountOutputType
     */
    select?: CourseUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseUnitCountOutputType without action
   */
  export type CourseUnitCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonTestCountOutputType
   */

  export type LessonTestCountOutputType = {
    questions: number
  }

  export type LessonTestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | LessonTestCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * LessonTestCountOutputType without action
   */
  export type LessonTestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTestCountOutputType
     */
    select?: LessonTestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonTestCountOutputType without action
   */
  export type LessonTestCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    subscriptionHistoryId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    subscriptionHistoryId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    password: number
    subscriptionHistoryId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    subscriptionHistoryId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    subscriptionHistoryId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    subscriptionHistoryId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    subscriptionHistoryId?: boolean
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    SubscriptionHistory?: boolean | User$SubscriptionHistoryArgs<ExtArgs>
    course?: boolean | User$courseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    subscriptionHistoryId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    subscriptionHistoryId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    subscriptionHistoryId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phoneNumber" | "password" | "subscriptionHistoryId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    SubscriptionHistory?: boolean | User$SubscriptionHistoryArgs<ExtArgs>
    course?: boolean | User$courseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      SubscriptionHistory: Prisma.$SubscriptionHistoryPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phoneNumber: string
      password: string
      subscriptionHistoryId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscription<T extends User$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SubscriptionHistory<T extends User$SubscriptionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscriptionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends User$courseArgs<ExtArgs> = {}>(args?: Subset<T, User$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly subscriptionHistoryId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Subscription
   */
  export type User$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.SubscriptionHistory
   */
  export type User$SubscriptionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    where?: SubscriptionHistoryWhereInput
    orderBy?: SubscriptionHistoryOrderByWithRelationInput | SubscriptionHistoryOrderByWithRelationInput[]
    cursor?: SubscriptionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionHistoryScalarFieldEnum | SubscriptionHistoryScalarFieldEnum[]
  }

  /**
   * User.course
   */
  export type User$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TariffPlan
   */

  export type AggregateTariffPlan = {
    _count: TariffPlanCountAggregateOutputType | null
    _avg: TariffPlanAvgAggregateOutputType | null
    _sum: TariffPlanSumAggregateOutputType | null
    _min: TariffPlanMinAggregateOutputType | null
    _max: TariffPlanMaxAggregateOutputType | null
  }

  export type TariffPlanAvgAggregateOutputType = {
    price: number | null
    duration: number | null
    maxCourses: number | null
  }

  export type TariffPlanSumAggregateOutputType = {
    price: number | null
    duration: number | null
    maxCourses: number | null
  }

  export type TariffPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    duration: number | null
    maxCourses: number | null
  }

  export type TariffPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    duration: number | null
    maxCourses: number | null
  }

  export type TariffPlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration: number
    maxCourses: number
    _all: number
  }


  export type TariffPlanAvgAggregateInputType = {
    price?: true
    duration?: true
    maxCourses?: true
  }

  export type TariffPlanSumAggregateInputType = {
    price?: true
    duration?: true
    maxCourses?: true
  }

  export type TariffPlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    maxCourses?: true
  }

  export type TariffPlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    maxCourses?: true
  }

  export type TariffPlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    maxCourses?: true
    _all?: true
  }

  export type TariffPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffPlan to aggregate.
     */
    where?: TariffPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffPlans to fetch.
     */
    orderBy?: TariffPlanOrderByWithRelationInput | TariffPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TariffPlans
    **/
    _count?: true | TariffPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffPlanMaxAggregateInputType
  }

  export type GetTariffPlanAggregateType<T extends TariffPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTariffPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariffPlan[P]>
      : GetScalarType<T[P], AggregateTariffPlan[P]>
  }




  export type TariffPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffPlanWhereInput
    orderBy?: TariffPlanOrderByWithAggregationInput | TariffPlanOrderByWithAggregationInput[]
    by: TariffPlanScalarFieldEnum[] | TariffPlanScalarFieldEnum
    having?: TariffPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffPlanCountAggregateInputType | true
    _avg?: TariffPlanAvgAggregateInputType
    _sum?: TariffPlanSumAggregateInputType
    _min?: TariffPlanMinAggregateInputType
    _max?: TariffPlanMaxAggregateInputType
  }

  export type TariffPlanGroupByOutputType = {
    id: string
    name: string
    price: number
    duration: number
    maxCourses: number
    _count: TariffPlanCountAggregateOutputType | null
    _avg: TariffPlanAvgAggregateOutputType | null
    _sum: TariffPlanSumAggregateOutputType | null
    _min: TariffPlanMinAggregateOutputType | null
    _max: TariffPlanMaxAggregateOutputType | null
  }

  type GetTariffPlanGroupByPayload<T extends TariffPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TariffPlanGroupByOutputType[P]>
        }
      >
    >


  export type TariffPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    maxCourses?: boolean
    Subscription?: boolean | TariffPlan$SubscriptionArgs<ExtArgs>
    SubscriptionHistory?: boolean | TariffPlan$SubscriptionHistoryArgs<ExtArgs>
    _count?: boolean | TariffPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffPlan"]>

  export type TariffPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    maxCourses?: boolean
  }, ExtArgs["result"]["tariffPlan"]>

  export type TariffPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    maxCourses?: boolean
  }, ExtArgs["result"]["tariffPlan"]>

  export type TariffPlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    maxCourses?: boolean
  }

  export type TariffPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration" | "maxCourses", ExtArgs["result"]["tariffPlan"]>
  export type TariffPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | TariffPlan$SubscriptionArgs<ExtArgs>
    SubscriptionHistory?: boolean | TariffPlan$SubscriptionHistoryArgs<ExtArgs>
    _count?: boolean | TariffPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TariffPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TariffPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TariffPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TariffPlan"
    objects: {
      Subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      SubscriptionHistory: Prisma.$SubscriptionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      duration: number
      maxCourses: number
    }, ExtArgs["result"]["tariffPlan"]>
    composites: {}
  }

  type TariffPlanGetPayload<S extends boolean | null | undefined | TariffPlanDefaultArgs> = $Result.GetResult<Prisma.$TariffPlanPayload, S>

  type TariffPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TariffPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TariffPlanCountAggregateInputType | true
    }

  export interface TariffPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TariffPlan'], meta: { name: 'TariffPlan' } }
    /**
     * Find zero or one TariffPlan that matches the filter.
     * @param {TariffPlanFindUniqueArgs} args - Arguments to find a TariffPlan
     * @example
     * // Get one TariffPlan
     * const tariffPlan = await prisma.tariffPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffPlanFindUniqueArgs>(args: SelectSubset<T, TariffPlanFindUniqueArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TariffPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TariffPlanFindUniqueOrThrowArgs} args - Arguments to find a TariffPlan
     * @example
     * // Get one TariffPlan
     * const tariffPlan = await prisma.tariffPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TariffPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanFindFirstArgs} args - Arguments to find a TariffPlan
     * @example
     * // Get one TariffPlan
     * const tariffPlan = await prisma.tariffPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffPlanFindFirstArgs>(args?: SelectSubset<T, TariffPlanFindFirstArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TariffPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanFindFirstOrThrowArgs} args - Arguments to find a TariffPlan
     * @example
     * // Get one TariffPlan
     * const tariffPlan = await prisma.tariffPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TariffPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TariffPlans
     * const tariffPlans = await prisma.tariffPlan.findMany()
     * 
     * // Get first 10 TariffPlans
     * const tariffPlans = await prisma.tariffPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffPlanWithIdOnly = await prisma.tariffPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TariffPlanFindManyArgs>(args?: SelectSubset<T, TariffPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TariffPlan.
     * @param {TariffPlanCreateArgs} args - Arguments to create a TariffPlan.
     * @example
     * // Create one TariffPlan
     * const TariffPlan = await prisma.tariffPlan.create({
     *   data: {
     *     // ... data to create a TariffPlan
     *   }
     * })
     * 
     */
    create<T extends TariffPlanCreateArgs>(args: SelectSubset<T, TariffPlanCreateArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TariffPlans.
     * @param {TariffPlanCreateManyArgs} args - Arguments to create many TariffPlans.
     * @example
     * // Create many TariffPlans
     * const tariffPlan = await prisma.tariffPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffPlanCreateManyArgs>(args?: SelectSubset<T, TariffPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TariffPlans and returns the data saved in the database.
     * @param {TariffPlanCreateManyAndReturnArgs} args - Arguments to create many TariffPlans.
     * @example
     * // Create many TariffPlans
     * const tariffPlan = await prisma.tariffPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TariffPlans and only return the `id`
     * const tariffPlanWithIdOnly = await prisma.tariffPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TariffPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TariffPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TariffPlan.
     * @param {TariffPlanDeleteArgs} args - Arguments to delete one TariffPlan.
     * @example
     * // Delete one TariffPlan
     * const TariffPlan = await prisma.tariffPlan.delete({
     *   where: {
     *     // ... filter to delete one TariffPlan
     *   }
     * })
     * 
     */
    delete<T extends TariffPlanDeleteArgs>(args: SelectSubset<T, TariffPlanDeleteArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TariffPlan.
     * @param {TariffPlanUpdateArgs} args - Arguments to update one TariffPlan.
     * @example
     * // Update one TariffPlan
     * const tariffPlan = await prisma.tariffPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffPlanUpdateArgs>(args: SelectSubset<T, TariffPlanUpdateArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TariffPlans.
     * @param {TariffPlanDeleteManyArgs} args - Arguments to filter TariffPlans to delete.
     * @example
     * // Delete a few TariffPlans
     * const { count } = await prisma.tariffPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffPlanDeleteManyArgs>(args?: SelectSubset<T, TariffPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TariffPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TariffPlans
     * const tariffPlan = await prisma.tariffPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffPlanUpdateManyArgs>(args: SelectSubset<T, TariffPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TariffPlans and returns the data updated in the database.
     * @param {TariffPlanUpdateManyAndReturnArgs} args - Arguments to update many TariffPlans.
     * @example
     * // Update many TariffPlans
     * const tariffPlan = await prisma.tariffPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TariffPlans and only return the `id`
     * const tariffPlanWithIdOnly = await prisma.tariffPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TariffPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TariffPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TariffPlan.
     * @param {TariffPlanUpsertArgs} args - Arguments to update or create a TariffPlan.
     * @example
     * // Update or create a TariffPlan
     * const tariffPlan = await prisma.tariffPlan.upsert({
     *   create: {
     *     // ... data to create a TariffPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TariffPlan we want to update
     *   }
     * })
     */
    upsert<T extends TariffPlanUpsertArgs>(args: SelectSubset<T, TariffPlanUpsertArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TariffPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanCountArgs} args - Arguments to filter TariffPlans to count.
     * @example
     * // Count the number of TariffPlans
     * const count = await prisma.tariffPlan.count({
     *   where: {
     *     // ... the filter for the TariffPlans we want to count
     *   }
     * })
    **/
    count<T extends TariffPlanCountArgs>(
      args?: Subset<T, TariffPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TariffPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TariffPlanAggregateArgs>(args: Subset<T, TariffPlanAggregateArgs>): Prisma.PrismaPromise<GetTariffPlanAggregateType<T>>

    /**
     * Group by TariffPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TariffPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffPlanGroupByArgs['orderBy'] }
        : { orderBy?: TariffPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TariffPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TariffPlan model
   */
  readonly fields: TariffPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TariffPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscription<T extends TariffPlan$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, TariffPlan$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubscriptionHistory<T extends TariffPlan$SubscriptionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, TariffPlan$SubscriptionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TariffPlan model
   */
  interface TariffPlanFieldRefs {
    readonly id: FieldRef<"TariffPlan", 'String'>
    readonly name: FieldRef<"TariffPlan", 'String'>
    readonly price: FieldRef<"TariffPlan", 'Float'>
    readonly duration: FieldRef<"TariffPlan", 'Int'>
    readonly maxCourses: FieldRef<"TariffPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TariffPlan findUnique
   */
  export type TariffPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * Filter, which TariffPlan to fetch.
     */
    where: TariffPlanWhereUniqueInput
  }

  /**
   * TariffPlan findUniqueOrThrow
   */
  export type TariffPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * Filter, which TariffPlan to fetch.
     */
    where: TariffPlanWhereUniqueInput
  }

  /**
   * TariffPlan findFirst
   */
  export type TariffPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * Filter, which TariffPlan to fetch.
     */
    where?: TariffPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffPlans to fetch.
     */
    orderBy?: TariffPlanOrderByWithRelationInput | TariffPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffPlans.
     */
    cursor?: TariffPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffPlans.
     */
    distinct?: TariffPlanScalarFieldEnum | TariffPlanScalarFieldEnum[]
  }

  /**
   * TariffPlan findFirstOrThrow
   */
  export type TariffPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * Filter, which TariffPlan to fetch.
     */
    where?: TariffPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffPlans to fetch.
     */
    orderBy?: TariffPlanOrderByWithRelationInput | TariffPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffPlans.
     */
    cursor?: TariffPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffPlans.
     */
    distinct?: TariffPlanScalarFieldEnum | TariffPlanScalarFieldEnum[]
  }

  /**
   * TariffPlan findMany
   */
  export type TariffPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * Filter, which TariffPlans to fetch.
     */
    where?: TariffPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffPlans to fetch.
     */
    orderBy?: TariffPlanOrderByWithRelationInput | TariffPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TariffPlans.
     */
    cursor?: TariffPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffPlans.
     */
    skip?: number
    distinct?: TariffPlanScalarFieldEnum | TariffPlanScalarFieldEnum[]
  }

  /**
   * TariffPlan create
   */
  export type TariffPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TariffPlan.
     */
    data: XOR<TariffPlanCreateInput, TariffPlanUncheckedCreateInput>
  }

  /**
   * TariffPlan createMany
   */
  export type TariffPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TariffPlans.
     */
    data: TariffPlanCreateManyInput | TariffPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TariffPlan createManyAndReturn
   */
  export type TariffPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TariffPlans.
     */
    data: TariffPlanCreateManyInput | TariffPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TariffPlan update
   */
  export type TariffPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TariffPlan.
     */
    data: XOR<TariffPlanUpdateInput, TariffPlanUncheckedUpdateInput>
    /**
     * Choose, which TariffPlan to update.
     */
    where: TariffPlanWhereUniqueInput
  }

  /**
   * TariffPlan updateMany
   */
  export type TariffPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TariffPlans.
     */
    data: XOR<TariffPlanUpdateManyMutationInput, TariffPlanUncheckedUpdateManyInput>
    /**
     * Filter which TariffPlans to update
     */
    where?: TariffPlanWhereInput
    /**
     * Limit how many TariffPlans to update.
     */
    limit?: number
  }

  /**
   * TariffPlan updateManyAndReturn
   */
  export type TariffPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * The data used to update TariffPlans.
     */
    data: XOR<TariffPlanUpdateManyMutationInput, TariffPlanUncheckedUpdateManyInput>
    /**
     * Filter which TariffPlans to update
     */
    where?: TariffPlanWhereInput
    /**
     * Limit how many TariffPlans to update.
     */
    limit?: number
  }

  /**
   * TariffPlan upsert
   */
  export type TariffPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TariffPlan to update in case it exists.
     */
    where: TariffPlanWhereUniqueInput
    /**
     * In case the TariffPlan found by the `where` argument doesn't exist, create a new TariffPlan with this data.
     */
    create: XOR<TariffPlanCreateInput, TariffPlanUncheckedCreateInput>
    /**
     * In case the TariffPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffPlanUpdateInput, TariffPlanUncheckedUpdateInput>
  }

  /**
   * TariffPlan delete
   */
  export type TariffPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
    /**
     * Filter which TariffPlan to delete.
     */
    where: TariffPlanWhereUniqueInput
  }

  /**
   * TariffPlan deleteMany
   */
  export type TariffPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffPlans to delete
     */
    where?: TariffPlanWhereInput
    /**
     * Limit how many TariffPlans to delete.
     */
    limit?: number
  }

  /**
   * TariffPlan.Subscription
   */
  export type TariffPlan$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * TariffPlan.SubscriptionHistory
   */
  export type TariffPlan$SubscriptionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    where?: SubscriptionHistoryWhereInput
    orderBy?: SubscriptionHistoryOrderByWithRelationInput | SubscriptionHistoryOrderByWithRelationInput[]
    cursor?: SubscriptionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionHistoryScalarFieldEnum | SubscriptionHistoryScalarFieldEnum[]
  }

  /**
   * TariffPlan without action
   */
  export type TariffPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffPlan
     */
    select?: TariffPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TariffPlan
     */
    omit?: TariffPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffPlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tarifPlanId: string | null
    createdAt: Date | null
    dateEnd: Date | null
    isActive: boolean | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tarifPlanId: string | null
    createdAt: Date | null
    dateEnd: Date | null
    isActive: boolean | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    tarifPlanId: number
    createdAt: number
    dateEnd: number
    isActive: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    tarifPlanId?: true
    createdAt?: true
    dateEnd?: true
    isActive?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    tarifPlanId?: true
    createdAt?: true
    dateEnd?: true
    isActive?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    tarifPlanId?: true
    createdAt?: true
    dateEnd?: true
    isActive?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    tarifPlanId: string
    createdAt: Date
    dateEnd: Date
    isActive: boolean
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tarifPlanId?: boolean
    createdAt?: boolean
    dateEnd?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tarifPlanId?: boolean
    createdAt?: boolean
    dateEnd?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tarifPlanId?: boolean
    createdAt?: boolean
    dateEnd?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    tarifPlanId?: boolean
    createdAt?: boolean
    dateEnd?: boolean
    isActive?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tarifPlanId" | "createdAt" | "dateEnd" | "isActive", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tarifPlan: Prisma.$TariffPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tarifPlanId: string
      createdAt: Date
      dateEnd: Date
      isActive: boolean
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tarifPlan<T extends TariffPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TariffPlanDefaultArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly tarifPlanId: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly dateEnd: FieldRef<"Subscription", 'DateTime'>
    readonly isActive: FieldRef<"Subscription", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionHistory
   */

  export type AggregateSubscriptionHistory = {
    _count: SubscriptionHistoryCountAggregateOutputType | null
    _avg: SubscriptionHistoryAvgAggregateOutputType | null
    _sum: SubscriptionHistorySumAggregateOutputType | null
    _min: SubscriptionHistoryMinAggregateOutputType | null
    _max: SubscriptionHistoryMaxAggregateOutputType | null
  }

  export type SubscriptionHistoryAvgAggregateOutputType = {
    prise: number | null
  }

  export type SubscriptionHistorySumAggregateOutputType = {
    prise: number | null
  }

  export type SubscriptionHistoryMinAggregateOutputType = {
    id: string | null
    dateStart: Date | null
    dateEnd: Date | null
    tarifPlanId: string | null
    userId: string | null
    prise: number | null
    paymentId: string | null
  }

  export type SubscriptionHistoryMaxAggregateOutputType = {
    id: string | null
    dateStart: Date | null
    dateEnd: Date | null
    tarifPlanId: string | null
    userId: string | null
    prise: number | null
    paymentId: string | null
  }

  export type SubscriptionHistoryCountAggregateOutputType = {
    id: number
    dateStart: number
    dateEnd: number
    tarifPlanId: number
    userId: number
    prise: number
    paymentId: number
    _all: number
  }


  export type SubscriptionHistoryAvgAggregateInputType = {
    prise?: true
  }

  export type SubscriptionHistorySumAggregateInputType = {
    prise?: true
  }

  export type SubscriptionHistoryMinAggregateInputType = {
    id?: true
    dateStart?: true
    dateEnd?: true
    tarifPlanId?: true
    userId?: true
    prise?: true
    paymentId?: true
  }

  export type SubscriptionHistoryMaxAggregateInputType = {
    id?: true
    dateStart?: true
    dateEnd?: true
    tarifPlanId?: true
    userId?: true
    prise?: true
    paymentId?: true
  }

  export type SubscriptionHistoryCountAggregateInputType = {
    id?: true
    dateStart?: true
    dateEnd?: true
    tarifPlanId?: true
    userId?: true
    prise?: true
    paymentId?: true
    _all?: true
  }

  export type SubscriptionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionHistory to aggregate.
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionHistories to fetch.
     */
    orderBy?: SubscriptionHistoryOrderByWithRelationInput | SubscriptionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionHistories
    **/
    _count?: true | SubscriptionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionHistoryMaxAggregateInputType
  }

  export type GetSubscriptionHistoryAggregateType<T extends SubscriptionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionHistory[P]>
      : GetScalarType<T[P], AggregateSubscriptionHistory[P]>
  }




  export type SubscriptionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionHistoryWhereInput
    orderBy?: SubscriptionHistoryOrderByWithAggregationInput | SubscriptionHistoryOrderByWithAggregationInput[]
    by: SubscriptionHistoryScalarFieldEnum[] | SubscriptionHistoryScalarFieldEnum
    having?: SubscriptionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionHistoryCountAggregateInputType | true
    _avg?: SubscriptionHistoryAvgAggregateInputType
    _sum?: SubscriptionHistorySumAggregateInputType
    _min?: SubscriptionHistoryMinAggregateInputType
    _max?: SubscriptionHistoryMaxAggregateInputType
  }

  export type SubscriptionHistoryGroupByOutputType = {
    id: string
    dateStart: Date
    dateEnd: Date
    tarifPlanId: string
    userId: string
    prise: number
    paymentId: string | null
    _count: SubscriptionHistoryCountAggregateOutputType | null
    _avg: SubscriptionHistoryAvgAggregateOutputType | null
    _sum: SubscriptionHistorySumAggregateOutputType | null
    _min: SubscriptionHistoryMinAggregateOutputType | null
    _max: SubscriptionHistoryMaxAggregateOutputType | null
  }

  type GetSubscriptionHistoryGroupByPayload<T extends SubscriptionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    tarifPlanId?: boolean
    userId?: boolean
    prise?: boolean
    paymentId?: boolean
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionHistory"]>

  export type SubscriptionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    tarifPlanId?: boolean
    userId?: boolean
    prise?: boolean
    paymentId?: boolean
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionHistory"]>

  export type SubscriptionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    tarifPlanId?: boolean
    userId?: boolean
    prise?: boolean
    paymentId?: boolean
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionHistory"]>

  export type SubscriptionHistorySelectScalar = {
    id?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    tarifPlanId?: boolean
    userId?: boolean
    prise?: boolean
    paymentId?: boolean
  }

  export type SubscriptionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateStart" | "dateEnd" | "tarifPlanId" | "userId" | "prise" | "paymentId", ExtArgs["result"]["subscriptionHistory"]>
  export type SubscriptionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarifPlan?: boolean | TariffPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionHistory"
    objects: {
      tarifPlan: Prisma.$TariffPlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dateStart: Date
      dateEnd: Date
      tarifPlanId: string
      userId: string
      prise: number
      paymentId: string | null
    }, ExtArgs["result"]["subscriptionHistory"]>
    composites: {}
  }

  type SubscriptionHistoryGetPayload<S extends boolean | null | undefined | SubscriptionHistoryDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionHistoryPayload, S>

  type SubscriptionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionHistoryCountAggregateInputType | true
    }

  export interface SubscriptionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionHistory'], meta: { name: 'SubscriptionHistory' } }
    /**
     * Find zero or one SubscriptionHistory that matches the filter.
     * @param {SubscriptionHistoryFindUniqueArgs} args - Arguments to find a SubscriptionHistory
     * @example
     * // Get one SubscriptionHistory
     * const subscriptionHistory = await prisma.subscriptionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionHistoryFindUniqueArgs>(args: SelectSubset<T, SubscriptionHistoryFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionHistoryFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionHistory
     * @example
     * // Get one SubscriptionHistory
     * const subscriptionHistory = await prisma.subscriptionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryFindFirstArgs} args - Arguments to find a SubscriptionHistory
     * @example
     * // Get one SubscriptionHistory
     * const subscriptionHistory = await prisma.subscriptionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionHistoryFindFirstArgs>(args?: SelectSubset<T, SubscriptionHistoryFindFirstArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryFindFirstOrThrowArgs} args - Arguments to find a SubscriptionHistory
     * @example
     * // Get one SubscriptionHistory
     * const subscriptionHistory = await prisma.subscriptionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionHistories
     * const subscriptionHistories = await prisma.subscriptionHistory.findMany()
     * 
     * // Get first 10 SubscriptionHistories
     * const subscriptionHistories = await prisma.subscriptionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionHistoryWithIdOnly = await prisma.subscriptionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionHistoryFindManyArgs>(args?: SelectSubset<T, SubscriptionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionHistory.
     * @param {SubscriptionHistoryCreateArgs} args - Arguments to create a SubscriptionHistory.
     * @example
     * // Create one SubscriptionHistory
     * const SubscriptionHistory = await prisma.subscriptionHistory.create({
     *   data: {
     *     // ... data to create a SubscriptionHistory
     *   }
     * })
     * 
     */
    create<T extends SubscriptionHistoryCreateArgs>(args: SelectSubset<T, SubscriptionHistoryCreateArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionHistories.
     * @param {SubscriptionHistoryCreateManyArgs} args - Arguments to create many SubscriptionHistories.
     * @example
     * // Create many SubscriptionHistories
     * const subscriptionHistory = await prisma.subscriptionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionHistoryCreateManyArgs>(args?: SelectSubset<T, SubscriptionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionHistories and returns the data saved in the database.
     * @param {SubscriptionHistoryCreateManyAndReturnArgs} args - Arguments to create many SubscriptionHistories.
     * @example
     * // Create many SubscriptionHistories
     * const subscriptionHistory = await prisma.subscriptionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionHistories and only return the `id`
     * const subscriptionHistoryWithIdOnly = await prisma.subscriptionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionHistory.
     * @param {SubscriptionHistoryDeleteArgs} args - Arguments to delete one SubscriptionHistory.
     * @example
     * // Delete one SubscriptionHistory
     * const SubscriptionHistory = await prisma.subscriptionHistory.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionHistory
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionHistoryDeleteArgs>(args: SelectSubset<T, SubscriptionHistoryDeleteArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionHistory.
     * @param {SubscriptionHistoryUpdateArgs} args - Arguments to update one SubscriptionHistory.
     * @example
     * // Update one SubscriptionHistory
     * const subscriptionHistory = await prisma.subscriptionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionHistoryUpdateArgs>(args: SelectSubset<T, SubscriptionHistoryUpdateArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionHistories.
     * @param {SubscriptionHistoryDeleteManyArgs} args - Arguments to filter SubscriptionHistories to delete.
     * @example
     * // Delete a few SubscriptionHistories
     * const { count } = await prisma.subscriptionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionHistoryDeleteManyArgs>(args?: SelectSubset<T, SubscriptionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionHistories
     * const subscriptionHistory = await prisma.subscriptionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionHistoryUpdateManyArgs>(args: SelectSubset<T, SubscriptionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionHistories and returns the data updated in the database.
     * @param {SubscriptionHistoryUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionHistories.
     * @example
     * // Update many SubscriptionHistories
     * const subscriptionHistory = await prisma.subscriptionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionHistories and only return the `id`
     * const subscriptionHistoryWithIdOnly = await prisma.subscriptionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionHistory.
     * @param {SubscriptionHistoryUpsertArgs} args - Arguments to update or create a SubscriptionHistory.
     * @example
     * // Update or create a SubscriptionHistory
     * const subscriptionHistory = await prisma.subscriptionHistory.upsert({
     *   create: {
     *     // ... data to create a SubscriptionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionHistory we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionHistoryUpsertArgs>(args: SelectSubset<T, SubscriptionHistoryUpsertArgs<ExtArgs>>): Prisma__SubscriptionHistoryClient<$Result.GetResult<Prisma.$SubscriptionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryCountArgs} args - Arguments to filter SubscriptionHistories to count.
     * @example
     * // Count the number of SubscriptionHistories
     * const count = await prisma.subscriptionHistory.count({
     *   where: {
     *     // ... the filter for the SubscriptionHistories we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionHistoryCountArgs>(
      args?: Subset<T, SubscriptionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionHistoryAggregateArgs>(args: Subset<T, SubscriptionHistoryAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionHistoryAggregateType<T>>

    /**
     * Group by SubscriptionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionHistory model
   */
  readonly fields: SubscriptionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarifPlan<T extends TariffPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TariffPlanDefaultArgs<ExtArgs>>): Prisma__TariffPlanClient<$Result.GetResult<Prisma.$TariffPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionHistory model
   */
  interface SubscriptionHistoryFieldRefs {
    readonly id: FieldRef<"SubscriptionHistory", 'String'>
    readonly dateStart: FieldRef<"SubscriptionHistory", 'DateTime'>
    readonly dateEnd: FieldRef<"SubscriptionHistory", 'DateTime'>
    readonly tarifPlanId: FieldRef<"SubscriptionHistory", 'String'>
    readonly userId: FieldRef<"SubscriptionHistory", 'String'>
    readonly prise: FieldRef<"SubscriptionHistory", 'Float'>
    readonly paymentId: FieldRef<"SubscriptionHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionHistory findUnique
   */
  export type SubscriptionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionHistory to fetch.
     */
    where: SubscriptionHistoryWhereUniqueInput
  }

  /**
   * SubscriptionHistory findUniqueOrThrow
   */
  export type SubscriptionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionHistory to fetch.
     */
    where: SubscriptionHistoryWhereUniqueInput
  }

  /**
   * SubscriptionHistory findFirst
   */
  export type SubscriptionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionHistory to fetch.
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionHistories to fetch.
     */
    orderBy?: SubscriptionHistoryOrderByWithRelationInput | SubscriptionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionHistories.
     */
    cursor?: SubscriptionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionHistories.
     */
    distinct?: SubscriptionHistoryScalarFieldEnum | SubscriptionHistoryScalarFieldEnum[]
  }

  /**
   * SubscriptionHistory findFirstOrThrow
   */
  export type SubscriptionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionHistory to fetch.
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionHistories to fetch.
     */
    orderBy?: SubscriptionHistoryOrderByWithRelationInput | SubscriptionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionHistories.
     */
    cursor?: SubscriptionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionHistories.
     */
    distinct?: SubscriptionHistoryScalarFieldEnum | SubscriptionHistoryScalarFieldEnum[]
  }

  /**
   * SubscriptionHistory findMany
   */
  export type SubscriptionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionHistories to fetch.
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionHistories to fetch.
     */
    orderBy?: SubscriptionHistoryOrderByWithRelationInput | SubscriptionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionHistories.
     */
    cursor?: SubscriptionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionHistories.
     */
    skip?: number
    distinct?: SubscriptionHistoryScalarFieldEnum | SubscriptionHistoryScalarFieldEnum[]
  }

  /**
   * SubscriptionHistory create
   */
  export type SubscriptionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionHistory.
     */
    data: XOR<SubscriptionHistoryCreateInput, SubscriptionHistoryUncheckedCreateInput>
  }

  /**
   * SubscriptionHistory createMany
   */
  export type SubscriptionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionHistories.
     */
    data: SubscriptionHistoryCreateManyInput | SubscriptionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionHistory createManyAndReturn
   */
  export type SubscriptionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionHistories.
     */
    data: SubscriptionHistoryCreateManyInput | SubscriptionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionHistory update
   */
  export type SubscriptionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionHistory.
     */
    data: XOR<SubscriptionHistoryUpdateInput, SubscriptionHistoryUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionHistory to update.
     */
    where: SubscriptionHistoryWhereUniqueInput
  }

  /**
   * SubscriptionHistory updateMany
   */
  export type SubscriptionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionHistories.
     */
    data: XOR<SubscriptionHistoryUpdateManyMutationInput, SubscriptionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionHistories to update
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * Limit how many SubscriptionHistories to update.
     */
    limit?: number
  }

  /**
   * SubscriptionHistory updateManyAndReturn
   */
  export type SubscriptionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionHistories.
     */
    data: XOR<SubscriptionHistoryUpdateManyMutationInput, SubscriptionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionHistories to update
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * Limit how many SubscriptionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionHistory upsert
   */
  export type SubscriptionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionHistory to update in case it exists.
     */
    where: SubscriptionHistoryWhereUniqueInput
    /**
     * In case the SubscriptionHistory found by the `where` argument doesn't exist, create a new SubscriptionHistory with this data.
     */
    create: XOR<SubscriptionHistoryCreateInput, SubscriptionHistoryUncheckedCreateInput>
    /**
     * In case the SubscriptionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionHistoryUpdateInput, SubscriptionHistoryUncheckedUpdateInput>
  }

  /**
   * SubscriptionHistory delete
   */
  export type SubscriptionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionHistory to delete.
     */
    where: SubscriptionHistoryWhereUniqueInput
  }

  /**
   * SubscriptionHistory deleteMany
   */
  export type SubscriptionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionHistories to delete
     */
    where?: SubscriptionHistoryWhereInput
    /**
     * Limit how many SubscriptionHistories to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionHistory without action
   */
  export type SubscriptionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionHistory
     */
    select?: SubscriptionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionHistory
     */
    omit?: SubscriptionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    preview: string | null
    userId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    preview: string | null
    userId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    preview: number
    userId: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    preview?: true
    userId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    preview?: true
    userId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    preview?: true
    userId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    preview: string | null
    userId: string
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    preview?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseUnits?: boolean | Course$courseUnitsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    preview?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    preview?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    preview?: boolean
    userId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "preview" | "userId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseUnits?: boolean | Course$courseUnitsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courseUnits: Prisma.$CourseUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      preview: string | null
      userId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseUnits<T extends Course$courseUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly preview: FieldRef<"Course", 'String'>
    readonly userId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.courseUnits
   */
  export type Course$courseUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    where?: CourseUnitWhereInput
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    cursor?: CourseUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseUnit
   */

  export type AggregateCourseUnit = {
    _count: CourseUnitCountAggregateOutputType | null
    _avg: CourseUnitAvgAggregateOutputType | null
    _sum: CourseUnitSumAggregateOutputType | null
    _min: CourseUnitMinAggregateOutputType | null
    _max: CourseUnitMaxAggregateOutputType | null
  }

  export type CourseUnitAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type CourseUnitSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type CourseUnitMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    description: string | null
    orderIndex: number | null
  }

  export type CourseUnitMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    description: string | null
    orderIndex: number | null
  }

  export type CourseUnitCountAggregateOutputType = {
    id: number
    courseId: number
    name: number
    description: number
    orderIndex: number
    _all: number
  }


  export type CourseUnitAvgAggregateInputType = {
    orderIndex?: true
  }

  export type CourseUnitSumAggregateInputType = {
    orderIndex?: true
  }

  export type CourseUnitMinAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    description?: true
    orderIndex?: true
  }

  export type CourseUnitMaxAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    description?: true
    orderIndex?: true
  }

  export type CourseUnitCountAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    description?: true
    orderIndex?: true
    _all?: true
  }

  export type CourseUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseUnit to aggregate.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseUnits
    **/
    _count?: true | CourseUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseUnitMaxAggregateInputType
  }

  export type GetCourseUnitAggregateType<T extends CourseUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseUnit[P]>
      : GetScalarType<T[P], AggregateCourseUnit[P]>
  }




  export type CourseUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseUnitWhereInput
    orderBy?: CourseUnitOrderByWithAggregationInput | CourseUnitOrderByWithAggregationInput[]
    by: CourseUnitScalarFieldEnum[] | CourseUnitScalarFieldEnum
    having?: CourseUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseUnitCountAggregateInputType | true
    _avg?: CourseUnitAvgAggregateInputType
    _sum?: CourseUnitSumAggregateInputType
    _min?: CourseUnitMinAggregateInputType
    _max?: CourseUnitMaxAggregateInputType
  }

  export type CourseUnitGroupByOutputType = {
    id: string
    courseId: string
    name: string
    description: string | null
    orderIndex: number
    _count: CourseUnitCountAggregateOutputType | null
    _avg: CourseUnitAvgAggregateOutputType | null
    _sum: CourseUnitSumAggregateOutputType | null
    _min: CourseUnitMinAggregateOutputType | null
    _max: CourseUnitMaxAggregateOutputType | null
  }

  type GetCourseUnitGroupByPayload<T extends CourseUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseUnitGroupByOutputType[P]>
            : GetScalarType<T[P], CourseUnitGroupByOutputType[P]>
        }
      >
    >


  export type CourseUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | CourseUnit$lessonsArgs<ExtArgs>
    _count?: boolean | CourseUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseUnit"]>

  export type CourseUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseUnit"]>

  export type CourseUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseUnit"]>

  export type CourseUnitSelectScalar = {
    id?: boolean
    courseId?: boolean
    name?: boolean
    description?: boolean
    orderIndex?: boolean
  }

  export type CourseUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "name" | "description" | "orderIndex", ExtArgs["result"]["courseUnit"]>
  export type CourseUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | CourseUnit$lessonsArgs<ExtArgs>
    _count?: boolean | CourseUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseUnit"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      name: string
      description: string | null
      orderIndex: number
    }, ExtArgs["result"]["courseUnit"]>
    composites: {}
  }

  type CourseUnitGetPayload<S extends boolean | null | undefined | CourseUnitDefaultArgs> = $Result.GetResult<Prisma.$CourseUnitPayload, S>

  type CourseUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseUnitCountAggregateInputType | true
    }

  export interface CourseUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseUnit'], meta: { name: 'CourseUnit' } }
    /**
     * Find zero or one CourseUnit that matches the filter.
     * @param {CourseUnitFindUniqueArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseUnitFindUniqueArgs>(args: SelectSubset<T, CourseUnitFindUniqueArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseUnitFindUniqueOrThrowArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitFindFirstArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseUnitFindFirstArgs>(args?: SelectSubset<T, CourseUnitFindFirstArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitFindFirstOrThrowArgs} args - Arguments to find a CourseUnit
     * @example
     * // Get one CourseUnit
     * const courseUnit = await prisma.courseUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseUnits
     * const courseUnits = await prisma.courseUnit.findMany()
     * 
     * // Get first 10 CourseUnits
     * const courseUnits = await prisma.courseUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseUnitWithIdOnly = await prisma.courseUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseUnitFindManyArgs>(args?: SelectSubset<T, CourseUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseUnit.
     * @param {CourseUnitCreateArgs} args - Arguments to create a CourseUnit.
     * @example
     * // Create one CourseUnit
     * const CourseUnit = await prisma.courseUnit.create({
     *   data: {
     *     // ... data to create a CourseUnit
     *   }
     * })
     * 
     */
    create<T extends CourseUnitCreateArgs>(args: SelectSubset<T, CourseUnitCreateArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseUnits.
     * @param {CourseUnitCreateManyArgs} args - Arguments to create many CourseUnits.
     * @example
     * // Create many CourseUnits
     * const courseUnit = await prisma.courseUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseUnitCreateManyArgs>(args?: SelectSubset<T, CourseUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseUnits and returns the data saved in the database.
     * @param {CourseUnitCreateManyAndReturnArgs} args - Arguments to create many CourseUnits.
     * @example
     * // Create many CourseUnits
     * const courseUnit = await prisma.courseUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseUnits and only return the `id`
     * const courseUnitWithIdOnly = await prisma.courseUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseUnit.
     * @param {CourseUnitDeleteArgs} args - Arguments to delete one CourseUnit.
     * @example
     * // Delete one CourseUnit
     * const CourseUnit = await prisma.courseUnit.delete({
     *   where: {
     *     // ... filter to delete one CourseUnit
     *   }
     * })
     * 
     */
    delete<T extends CourseUnitDeleteArgs>(args: SelectSubset<T, CourseUnitDeleteArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseUnit.
     * @param {CourseUnitUpdateArgs} args - Arguments to update one CourseUnit.
     * @example
     * // Update one CourseUnit
     * const courseUnit = await prisma.courseUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUnitUpdateArgs>(args: SelectSubset<T, CourseUnitUpdateArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseUnits.
     * @param {CourseUnitDeleteManyArgs} args - Arguments to filter CourseUnits to delete.
     * @example
     * // Delete a few CourseUnits
     * const { count } = await prisma.courseUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseUnitDeleteManyArgs>(args?: SelectSubset<T, CourseUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseUnits
     * const courseUnit = await prisma.courseUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUnitUpdateManyArgs>(args: SelectSubset<T, CourseUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseUnits and returns the data updated in the database.
     * @param {CourseUnitUpdateManyAndReturnArgs} args - Arguments to update many CourseUnits.
     * @example
     * // Update many CourseUnits
     * const courseUnit = await prisma.courseUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseUnits and only return the `id`
     * const courseUnitWithIdOnly = await prisma.courseUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseUnit.
     * @param {CourseUnitUpsertArgs} args - Arguments to update or create a CourseUnit.
     * @example
     * // Update or create a CourseUnit
     * const courseUnit = await prisma.courseUnit.upsert({
     *   create: {
     *     // ... data to create a CourseUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseUnit we want to update
     *   }
     * })
     */
    upsert<T extends CourseUnitUpsertArgs>(args: SelectSubset<T, CourseUnitUpsertArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitCountArgs} args - Arguments to filter CourseUnits to count.
     * @example
     * // Count the number of CourseUnits
     * const count = await prisma.courseUnit.count({
     *   where: {
     *     // ... the filter for the CourseUnits we want to count
     *   }
     * })
    **/
    count<T extends CourseUnitCountArgs>(
      args?: Subset<T, CourseUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseUnitAggregateArgs>(args: Subset<T, CourseUnitAggregateArgs>): Prisma.PrismaPromise<GetCourseUnitAggregateType<T>>

    /**
     * Group by CourseUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseUnitGroupByArgs['orderBy'] }
        : { orderBy?: CourseUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseUnit model
   */
  readonly fields: CourseUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends CourseUnit$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, CourseUnit$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseUnit model
   */
  interface CourseUnitFieldRefs {
    readonly id: FieldRef<"CourseUnit", 'String'>
    readonly courseId: FieldRef<"CourseUnit", 'String'>
    readonly name: FieldRef<"CourseUnit", 'String'>
    readonly description: FieldRef<"CourseUnit", 'String'>
    readonly orderIndex: FieldRef<"CourseUnit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CourseUnit findUnique
   */
  export type CourseUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit findUniqueOrThrow
   */
  export type CourseUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit findFirst
   */
  export type CourseUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseUnits.
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseUnits.
     */
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit findFirstOrThrow
   */
  export type CourseUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnit to fetch.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseUnits.
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseUnits.
     */
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit findMany
   */
  export type CourseUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter, which CourseUnits to fetch.
     */
    where?: CourseUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseUnits to fetch.
     */
    orderBy?: CourseUnitOrderByWithRelationInput | CourseUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseUnits.
     */
    cursor?: CourseUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseUnits.
     */
    skip?: number
    distinct?: CourseUnitScalarFieldEnum | CourseUnitScalarFieldEnum[]
  }

  /**
   * CourseUnit create
   */
  export type CourseUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseUnit.
     */
    data: XOR<CourseUnitCreateInput, CourseUnitUncheckedCreateInput>
  }

  /**
   * CourseUnit createMany
   */
  export type CourseUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseUnits.
     */
    data: CourseUnitCreateManyInput | CourseUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseUnit createManyAndReturn
   */
  export type CourseUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * The data used to create many CourseUnits.
     */
    data: CourseUnitCreateManyInput | CourseUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseUnit update
   */
  export type CourseUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseUnit.
     */
    data: XOR<CourseUnitUpdateInput, CourseUnitUncheckedUpdateInput>
    /**
     * Choose, which CourseUnit to update.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit updateMany
   */
  export type CourseUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseUnits.
     */
    data: XOR<CourseUnitUpdateManyMutationInput, CourseUnitUncheckedUpdateManyInput>
    /**
     * Filter which CourseUnits to update
     */
    where?: CourseUnitWhereInput
    /**
     * Limit how many CourseUnits to update.
     */
    limit?: number
  }

  /**
   * CourseUnit updateManyAndReturn
   */
  export type CourseUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * The data used to update CourseUnits.
     */
    data: XOR<CourseUnitUpdateManyMutationInput, CourseUnitUncheckedUpdateManyInput>
    /**
     * Filter which CourseUnits to update
     */
    where?: CourseUnitWhereInput
    /**
     * Limit how many CourseUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseUnit upsert
   */
  export type CourseUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseUnit to update in case it exists.
     */
    where: CourseUnitWhereUniqueInput
    /**
     * In case the CourseUnit found by the `where` argument doesn't exist, create a new CourseUnit with this data.
     */
    create: XOR<CourseUnitCreateInput, CourseUnitUncheckedCreateInput>
    /**
     * In case the CourseUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUnitUpdateInput, CourseUnitUncheckedUpdateInput>
  }

  /**
   * CourseUnit delete
   */
  export type CourseUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
    /**
     * Filter which CourseUnit to delete.
     */
    where: CourseUnitWhereUniqueInput
  }

  /**
   * CourseUnit deleteMany
   */
  export type CourseUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseUnits to delete
     */
    where?: CourseUnitWhereInput
    /**
     * Limit how many CourseUnits to delete.
     */
    limit?: number
  }

  /**
   * CourseUnit.lessons
   */
  export type CourseUnit$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * CourseUnit without action
   */
  export type CourseUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseUnit
     */
    select?: CourseUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseUnit
     */
    omit?: CourseUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseUnitInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type LessonSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    name: string | null
    lessonType: $Enums.LESSON_TYPES | null
    courseUnitId: string | null
    orderIndex: number | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lessonType: $Enums.LESSON_TYPES | null
    courseUnitId: string | null
    orderIndex: number | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    name: number
    lessonType: number
    content: number
    courseUnitId: number
    orderIndex: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    orderIndex?: true
  }

  export type LessonSumAggregateInputType = {
    orderIndex?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    name?: true
    lessonType?: true
    courseUnitId?: true
    orderIndex?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    name?: true
    lessonType?: true
    courseUnitId?: true
    orderIndex?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    name?: true
    lessonType?: true
    content?: true
    courseUnitId?: true
    orderIndex?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    name: string
    lessonType: $Enums.LESSON_TYPES
    content: JsonValue | null
    courseUnitId: string
    orderIndex: number
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lessonType?: boolean
    content?: boolean
    courseUnitId?: boolean
    orderIndex?: boolean
    test?: boolean | Lesson$testArgs<ExtArgs>
    webinar?: boolean | Lesson$webinarArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lessonType?: boolean
    content?: boolean
    courseUnitId?: boolean
    orderIndex?: boolean
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lessonType?: boolean
    content?: boolean
    courseUnitId?: boolean
    orderIndex?: boolean
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    name?: boolean
    lessonType?: boolean
    content?: boolean
    courseUnitId?: boolean
    orderIndex?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lessonType" | "content" | "courseUnitId" | "orderIndex", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Lesson$testArgs<ExtArgs>
    webinar?: boolean | Lesson$webinarArgs<ExtArgs>
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseUnit?: boolean | CourseUnitDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      test: Prisma.$LessonTestPayload<ExtArgs> | null
      webinar: Prisma.$LessonWebinarPayload<ExtArgs> | null
      courseUnit: Prisma.$CourseUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lessonType: $Enums.LESSON_TYPES
      content: Prisma.JsonValue | null
      courseUnitId: string
      orderIndex: number
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends Lesson$testArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$testArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    webinar<T extends Lesson$webinarArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$webinarArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courseUnit<T extends CourseUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseUnitDefaultArgs<ExtArgs>>): Prisma__CourseUnitClient<$Result.GetResult<Prisma.$CourseUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly name: FieldRef<"Lesson", 'String'>
    readonly lessonType: FieldRef<"Lesson", 'LESSON_TYPES'>
    readonly content: FieldRef<"Lesson", 'Json'>
    readonly courseUnitId: FieldRef<"Lesson", 'String'>
    readonly orderIndex: FieldRef<"Lesson", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.test
   */
  export type Lesson$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    where?: LessonTestWhereInput
  }

  /**
   * Lesson.webinar
   */
  export type Lesson$webinarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    where?: LessonWebinarWhereInput
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonWebinar
   */

  export type AggregateLessonWebinar = {
    _count: LessonWebinarCountAggregateOutputType | null
    _min: LessonWebinarMinAggregateOutputType | null
    _max: LessonWebinarMaxAggregateOutputType | null
  }

  export type LessonWebinarMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
    link: string | null
    connectTime: string | null
    description: string | null
  }

  export type LessonWebinarMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
    link: string | null
    connectTime: string | null
    description: string | null
  }

  export type LessonWebinarCountAggregateOutputType = {
    id: number
    lessonId: number
    link: number
    connectTime: number
    description: number
    _all: number
  }


  export type LessonWebinarMinAggregateInputType = {
    id?: true
    lessonId?: true
    link?: true
    connectTime?: true
    description?: true
  }

  export type LessonWebinarMaxAggregateInputType = {
    id?: true
    lessonId?: true
    link?: true
    connectTime?: true
    description?: true
  }

  export type LessonWebinarCountAggregateInputType = {
    id?: true
    lessonId?: true
    link?: true
    connectTime?: true
    description?: true
    _all?: true
  }

  export type LessonWebinarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonWebinar to aggregate.
     */
    where?: LessonWebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonWebinars to fetch.
     */
    orderBy?: LessonWebinarOrderByWithRelationInput | LessonWebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonWebinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonWebinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonWebinars
    **/
    _count?: true | LessonWebinarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonWebinarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonWebinarMaxAggregateInputType
  }

  export type GetLessonWebinarAggregateType<T extends LessonWebinarAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonWebinar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonWebinar[P]>
      : GetScalarType<T[P], AggregateLessonWebinar[P]>
  }




  export type LessonWebinarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWebinarWhereInput
    orderBy?: LessonWebinarOrderByWithAggregationInput | LessonWebinarOrderByWithAggregationInput[]
    by: LessonWebinarScalarFieldEnum[] | LessonWebinarScalarFieldEnum
    having?: LessonWebinarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonWebinarCountAggregateInputType | true
    _min?: LessonWebinarMinAggregateInputType
    _max?: LessonWebinarMaxAggregateInputType
  }

  export type LessonWebinarGroupByOutputType = {
    id: string
    lessonId: string
    link: string
    connectTime: string
    description: string | null
    _count: LessonWebinarCountAggregateOutputType | null
    _min: LessonWebinarMinAggregateOutputType | null
    _max: LessonWebinarMaxAggregateOutputType | null
  }

  type GetLessonWebinarGroupByPayload<T extends LessonWebinarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonWebinarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonWebinarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonWebinarGroupByOutputType[P]>
            : GetScalarType<T[P], LessonWebinarGroupByOutputType[P]>
        }
      >
    >


  export type LessonWebinarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    link?: boolean
    connectTime?: boolean
    description?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonWebinar"]>

  export type LessonWebinarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    link?: boolean
    connectTime?: boolean
    description?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonWebinar"]>

  export type LessonWebinarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    link?: boolean
    connectTime?: boolean
    description?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonWebinar"]>

  export type LessonWebinarSelectScalar = {
    id?: boolean
    lessonId?: boolean
    link?: boolean
    connectTime?: boolean
    description?: boolean
  }

  export type LessonWebinarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId" | "link" | "connectTime" | "description", ExtArgs["result"]["lessonWebinar"]>
  export type LessonWebinarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonWebinarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonWebinarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonWebinarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonWebinar"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
      link: string
      connectTime: string
      description: string | null
    }, ExtArgs["result"]["lessonWebinar"]>
    composites: {}
  }

  type LessonWebinarGetPayload<S extends boolean | null | undefined | LessonWebinarDefaultArgs> = $Result.GetResult<Prisma.$LessonWebinarPayload, S>

  type LessonWebinarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonWebinarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonWebinarCountAggregateInputType | true
    }

  export interface LessonWebinarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonWebinar'], meta: { name: 'LessonWebinar' } }
    /**
     * Find zero or one LessonWebinar that matches the filter.
     * @param {LessonWebinarFindUniqueArgs} args - Arguments to find a LessonWebinar
     * @example
     * // Get one LessonWebinar
     * const lessonWebinar = await prisma.lessonWebinar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonWebinarFindUniqueArgs>(args: SelectSubset<T, LessonWebinarFindUniqueArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonWebinar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonWebinarFindUniqueOrThrowArgs} args - Arguments to find a LessonWebinar
     * @example
     * // Get one LessonWebinar
     * const lessonWebinar = await prisma.lessonWebinar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonWebinarFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonWebinarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonWebinar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarFindFirstArgs} args - Arguments to find a LessonWebinar
     * @example
     * // Get one LessonWebinar
     * const lessonWebinar = await prisma.lessonWebinar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonWebinarFindFirstArgs>(args?: SelectSubset<T, LessonWebinarFindFirstArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonWebinar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarFindFirstOrThrowArgs} args - Arguments to find a LessonWebinar
     * @example
     * // Get one LessonWebinar
     * const lessonWebinar = await prisma.lessonWebinar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonWebinarFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonWebinarFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonWebinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonWebinars
     * const lessonWebinars = await prisma.lessonWebinar.findMany()
     * 
     * // Get first 10 LessonWebinars
     * const lessonWebinars = await prisma.lessonWebinar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWebinarWithIdOnly = await prisma.lessonWebinar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonWebinarFindManyArgs>(args?: SelectSubset<T, LessonWebinarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonWebinar.
     * @param {LessonWebinarCreateArgs} args - Arguments to create a LessonWebinar.
     * @example
     * // Create one LessonWebinar
     * const LessonWebinar = await prisma.lessonWebinar.create({
     *   data: {
     *     // ... data to create a LessonWebinar
     *   }
     * })
     * 
     */
    create<T extends LessonWebinarCreateArgs>(args: SelectSubset<T, LessonWebinarCreateArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonWebinars.
     * @param {LessonWebinarCreateManyArgs} args - Arguments to create many LessonWebinars.
     * @example
     * // Create many LessonWebinars
     * const lessonWebinar = await prisma.lessonWebinar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonWebinarCreateManyArgs>(args?: SelectSubset<T, LessonWebinarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonWebinars and returns the data saved in the database.
     * @param {LessonWebinarCreateManyAndReturnArgs} args - Arguments to create many LessonWebinars.
     * @example
     * // Create many LessonWebinars
     * const lessonWebinar = await prisma.lessonWebinar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonWebinars and only return the `id`
     * const lessonWebinarWithIdOnly = await prisma.lessonWebinar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonWebinarCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonWebinarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonWebinar.
     * @param {LessonWebinarDeleteArgs} args - Arguments to delete one LessonWebinar.
     * @example
     * // Delete one LessonWebinar
     * const LessonWebinar = await prisma.lessonWebinar.delete({
     *   where: {
     *     // ... filter to delete one LessonWebinar
     *   }
     * })
     * 
     */
    delete<T extends LessonWebinarDeleteArgs>(args: SelectSubset<T, LessonWebinarDeleteArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonWebinar.
     * @param {LessonWebinarUpdateArgs} args - Arguments to update one LessonWebinar.
     * @example
     * // Update one LessonWebinar
     * const lessonWebinar = await prisma.lessonWebinar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonWebinarUpdateArgs>(args: SelectSubset<T, LessonWebinarUpdateArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonWebinars.
     * @param {LessonWebinarDeleteManyArgs} args - Arguments to filter LessonWebinars to delete.
     * @example
     * // Delete a few LessonWebinars
     * const { count } = await prisma.lessonWebinar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonWebinarDeleteManyArgs>(args?: SelectSubset<T, LessonWebinarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonWebinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonWebinars
     * const lessonWebinar = await prisma.lessonWebinar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonWebinarUpdateManyArgs>(args: SelectSubset<T, LessonWebinarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonWebinars and returns the data updated in the database.
     * @param {LessonWebinarUpdateManyAndReturnArgs} args - Arguments to update many LessonWebinars.
     * @example
     * // Update many LessonWebinars
     * const lessonWebinar = await prisma.lessonWebinar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonWebinars and only return the `id`
     * const lessonWebinarWithIdOnly = await prisma.lessonWebinar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonWebinarUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonWebinarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonWebinar.
     * @param {LessonWebinarUpsertArgs} args - Arguments to update or create a LessonWebinar.
     * @example
     * // Update or create a LessonWebinar
     * const lessonWebinar = await prisma.lessonWebinar.upsert({
     *   create: {
     *     // ... data to create a LessonWebinar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonWebinar we want to update
     *   }
     * })
     */
    upsert<T extends LessonWebinarUpsertArgs>(args: SelectSubset<T, LessonWebinarUpsertArgs<ExtArgs>>): Prisma__LessonWebinarClient<$Result.GetResult<Prisma.$LessonWebinarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonWebinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarCountArgs} args - Arguments to filter LessonWebinars to count.
     * @example
     * // Count the number of LessonWebinars
     * const count = await prisma.lessonWebinar.count({
     *   where: {
     *     // ... the filter for the LessonWebinars we want to count
     *   }
     * })
    **/
    count<T extends LessonWebinarCountArgs>(
      args?: Subset<T, LessonWebinarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonWebinarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonWebinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonWebinarAggregateArgs>(args: Subset<T, LessonWebinarAggregateArgs>): Prisma.PrismaPromise<GetLessonWebinarAggregateType<T>>

    /**
     * Group by LessonWebinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonWebinarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonWebinarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonWebinarGroupByArgs['orderBy'] }
        : { orderBy?: LessonWebinarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonWebinarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonWebinarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonWebinar model
   */
  readonly fields: LessonWebinarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonWebinar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonWebinarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LessonWebinar model
   */
  interface LessonWebinarFieldRefs {
    readonly id: FieldRef<"LessonWebinar", 'String'>
    readonly lessonId: FieldRef<"LessonWebinar", 'String'>
    readonly link: FieldRef<"LessonWebinar", 'String'>
    readonly connectTime: FieldRef<"LessonWebinar", 'String'>
    readonly description: FieldRef<"LessonWebinar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LessonWebinar findUnique
   */
  export type LessonWebinarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * Filter, which LessonWebinar to fetch.
     */
    where: LessonWebinarWhereUniqueInput
  }

  /**
   * LessonWebinar findUniqueOrThrow
   */
  export type LessonWebinarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * Filter, which LessonWebinar to fetch.
     */
    where: LessonWebinarWhereUniqueInput
  }

  /**
   * LessonWebinar findFirst
   */
  export type LessonWebinarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * Filter, which LessonWebinar to fetch.
     */
    where?: LessonWebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonWebinars to fetch.
     */
    orderBy?: LessonWebinarOrderByWithRelationInput | LessonWebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonWebinars.
     */
    cursor?: LessonWebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonWebinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonWebinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonWebinars.
     */
    distinct?: LessonWebinarScalarFieldEnum | LessonWebinarScalarFieldEnum[]
  }

  /**
   * LessonWebinar findFirstOrThrow
   */
  export type LessonWebinarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * Filter, which LessonWebinar to fetch.
     */
    where?: LessonWebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonWebinars to fetch.
     */
    orderBy?: LessonWebinarOrderByWithRelationInput | LessonWebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonWebinars.
     */
    cursor?: LessonWebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonWebinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonWebinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonWebinars.
     */
    distinct?: LessonWebinarScalarFieldEnum | LessonWebinarScalarFieldEnum[]
  }

  /**
   * LessonWebinar findMany
   */
  export type LessonWebinarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * Filter, which LessonWebinars to fetch.
     */
    where?: LessonWebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonWebinars to fetch.
     */
    orderBy?: LessonWebinarOrderByWithRelationInput | LessonWebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonWebinars.
     */
    cursor?: LessonWebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonWebinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonWebinars.
     */
    skip?: number
    distinct?: LessonWebinarScalarFieldEnum | LessonWebinarScalarFieldEnum[]
  }

  /**
   * LessonWebinar create
   */
  export type LessonWebinarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonWebinar.
     */
    data: XOR<LessonWebinarCreateInput, LessonWebinarUncheckedCreateInput>
  }

  /**
   * LessonWebinar createMany
   */
  export type LessonWebinarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonWebinars.
     */
    data: LessonWebinarCreateManyInput | LessonWebinarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonWebinar createManyAndReturn
   */
  export type LessonWebinarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * The data used to create many LessonWebinars.
     */
    data: LessonWebinarCreateManyInput | LessonWebinarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonWebinar update
   */
  export type LessonWebinarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonWebinar.
     */
    data: XOR<LessonWebinarUpdateInput, LessonWebinarUncheckedUpdateInput>
    /**
     * Choose, which LessonWebinar to update.
     */
    where: LessonWebinarWhereUniqueInput
  }

  /**
   * LessonWebinar updateMany
   */
  export type LessonWebinarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonWebinars.
     */
    data: XOR<LessonWebinarUpdateManyMutationInput, LessonWebinarUncheckedUpdateManyInput>
    /**
     * Filter which LessonWebinars to update
     */
    where?: LessonWebinarWhereInput
    /**
     * Limit how many LessonWebinars to update.
     */
    limit?: number
  }

  /**
   * LessonWebinar updateManyAndReturn
   */
  export type LessonWebinarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * The data used to update LessonWebinars.
     */
    data: XOR<LessonWebinarUpdateManyMutationInput, LessonWebinarUncheckedUpdateManyInput>
    /**
     * Filter which LessonWebinars to update
     */
    where?: LessonWebinarWhereInput
    /**
     * Limit how many LessonWebinars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonWebinar upsert
   */
  export type LessonWebinarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonWebinar to update in case it exists.
     */
    where: LessonWebinarWhereUniqueInput
    /**
     * In case the LessonWebinar found by the `where` argument doesn't exist, create a new LessonWebinar with this data.
     */
    create: XOR<LessonWebinarCreateInput, LessonWebinarUncheckedCreateInput>
    /**
     * In case the LessonWebinar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonWebinarUpdateInput, LessonWebinarUncheckedUpdateInput>
  }

  /**
   * LessonWebinar delete
   */
  export type LessonWebinarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
    /**
     * Filter which LessonWebinar to delete.
     */
    where: LessonWebinarWhereUniqueInput
  }

  /**
   * LessonWebinar deleteMany
   */
  export type LessonWebinarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonWebinars to delete
     */
    where?: LessonWebinarWhereInput
    /**
     * Limit how many LessonWebinars to delete.
     */
    limit?: number
  }

  /**
   * LessonWebinar without action
   */
  export type LessonWebinarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonWebinar
     */
    select?: LessonWebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonWebinar
     */
    omit?: LessonWebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonWebinarInclude<ExtArgs> | null
  }


  /**
   * Model LessonTest
   */

  export type AggregateLessonTest = {
    _count: LessonTestCountAggregateOutputType | null
    _min: LessonTestMinAggregateOutputType | null
    _max: LessonTestMaxAggregateOutputType | null
  }

  export type LessonTestMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
  }

  export type LessonTestMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
  }

  export type LessonTestCountAggregateOutputType = {
    id: number
    lessonId: number
    _all: number
  }


  export type LessonTestMinAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type LessonTestMaxAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type LessonTestCountAggregateInputType = {
    id?: true
    lessonId?: true
    _all?: true
  }

  export type LessonTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonTest to aggregate.
     */
    where?: LessonTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTests to fetch.
     */
    orderBy?: LessonTestOrderByWithRelationInput | LessonTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonTests
    **/
    _count?: true | LessonTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonTestMaxAggregateInputType
  }

  export type GetLessonTestAggregateType<T extends LessonTestAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonTest[P]>
      : GetScalarType<T[P], AggregateLessonTest[P]>
  }




  export type LessonTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonTestWhereInput
    orderBy?: LessonTestOrderByWithAggregationInput | LessonTestOrderByWithAggregationInput[]
    by: LessonTestScalarFieldEnum[] | LessonTestScalarFieldEnum
    having?: LessonTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonTestCountAggregateInputType | true
    _min?: LessonTestMinAggregateInputType
    _max?: LessonTestMaxAggregateInputType
  }

  export type LessonTestGroupByOutputType = {
    id: string
    lessonId: string
    _count: LessonTestCountAggregateOutputType | null
    _min: LessonTestMinAggregateOutputType | null
    _max: LessonTestMaxAggregateOutputType | null
  }

  type GetLessonTestGroupByPayload<T extends LessonTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonTestGroupByOutputType[P]>
            : GetScalarType<T[P], LessonTestGroupByOutputType[P]>
        }
      >
    >


  export type LessonTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    questions?: boolean | LessonTest$questionsArgs<ExtArgs>
    _count?: boolean | LessonTestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonTest"]>

  export type LessonTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonTest"]>

  export type LessonTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonTest"]>

  export type LessonTestSelectScalar = {
    id?: boolean
    lessonId?: boolean
  }

  export type LessonTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId", ExtArgs["result"]["lessonTest"]>
  export type LessonTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    questions?: boolean | LessonTest$questionsArgs<ExtArgs>
    _count?: boolean | LessonTestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonTestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonTestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonTest"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
      questions: Prisma.$TestQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
    }, ExtArgs["result"]["lessonTest"]>
    composites: {}
  }

  type LessonTestGetPayload<S extends boolean | null | undefined | LessonTestDefaultArgs> = $Result.GetResult<Prisma.$LessonTestPayload, S>

  type LessonTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonTestCountAggregateInputType | true
    }

  export interface LessonTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonTest'], meta: { name: 'LessonTest' } }
    /**
     * Find zero or one LessonTest that matches the filter.
     * @param {LessonTestFindUniqueArgs} args - Arguments to find a LessonTest
     * @example
     * // Get one LessonTest
     * const lessonTest = await prisma.lessonTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonTestFindUniqueArgs>(args: SelectSubset<T, LessonTestFindUniqueArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonTestFindUniqueOrThrowArgs} args - Arguments to find a LessonTest
     * @example
     * // Get one LessonTest
     * const lessonTest = await prisma.lessonTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonTestFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestFindFirstArgs} args - Arguments to find a LessonTest
     * @example
     * // Get one LessonTest
     * const lessonTest = await prisma.lessonTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonTestFindFirstArgs>(args?: SelectSubset<T, LessonTestFindFirstArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestFindFirstOrThrowArgs} args - Arguments to find a LessonTest
     * @example
     * // Get one LessonTest
     * const lessonTest = await prisma.lessonTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonTestFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonTests
     * const lessonTests = await prisma.lessonTest.findMany()
     * 
     * // Get first 10 LessonTests
     * const lessonTests = await prisma.lessonTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonTestWithIdOnly = await prisma.lessonTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonTestFindManyArgs>(args?: SelectSubset<T, LessonTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonTest.
     * @param {LessonTestCreateArgs} args - Arguments to create a LessonTest.
     * @example
     * // Create one LessonTest
     * const LessonTest = await prisma.lessonTest.create({
     *   data: {
     *     // ... data to create a LessonTest
     *   }
     * })
     * 
     */
    create<T extends LessonTestCreateArgs>(args: SelectSubset<T, LessonTestCreateArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonTests.
     * @param {LessonTestCreateManyArgs} args - Arguments to create many LessonTests.
     * @example
     * // Create many LessonTests
     * const lessonTest = await prisma.lessonTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonTestCreateManyArgs>(args?: SelectSubset<T, LessonTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonTests and returns the data saved in the database.
     * @param {LessonTestCreateManyAndReturnArgs} args - Arguments to create many LessonTests.
     * @example
     * // Create many LessonTests
     * const lessonTest = await prisma.lessonTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonTests and only return the `id`
     * const lessonTestWithIdOnly = await prisma.lessonTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonTestCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonTest.
     * @param {LessonTestDeleteArgs} args - Arguments to delete one LessonTest.
     * @example
     * // Delete one LessonTest
     * const LessonTest = await prisma.lessonTest.delete({
     *   where: {
     *     // ... filter to delete one LessonTest
     *   }
     * })
     * 
     */
    delete<T extends LessonTestDeleteArgs>(args: SelectSubset<T, LessonTestDeleteArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonTest.
     * @param {LessonTestUpdateArgs} args - Arguments to update one LessonTest.
     * @example
     * // Update one LessonTest
     * const lessonTest = await prisma.lessonTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonTestUpdateArgs>(args: SelectSubset<T, LessonTestUpdateArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonTests.
     * @param {LessonTestDeleteManyArgs} args - Arguments to filter LessonTests to delete.
     * @example
     * // Delete a few LessonTests
     * const { count } = await prisma.lessonTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonTestDeleteManyArgs>(args?: SelectSubset<T, LessonTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonTests
     * const lessonTest = await prisma.lessonTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonTestUpdateManyArgs>(args: SelectSubset<T, LessonTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonTests and returns the data updated in the database.
     * @param {LessonTestUpdateManyAndReturnArgs} args - Arguments to update many LessonTests.
     * @example
     * // Update many LessonTests
     * const lessonTest = await prisma.lessonTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonTests and only return the `id`
     * const lessonTestWithIdOnly = await prisma.lessonTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LessonTestUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonTest.
     * @param {LessonTestUpsertArgs} args - Arguments to update or create a LessonTest.
     * @example
     * // Update or create a LessonTest
     * const lessonTest = await prisma.lessonTest.upsert({
     *   create: {
     *     // ... data to create a LessonTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonTest we want to update
     *   }
     * })
     */
    upsert<T extends LessonTestUpsertArgs>(args: SelectSubset<T, LessonTestUpsertArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestCountArgs} args - Arguments to filter LessonTests to count.
     * @example
     * // Count the number of LessonTests
     * const count = await prisma.lessonTest.count({
     *   where: {
     *     // ... the filter for the LessonTests we want to count
     *   }
     * })
    **/
    count<T extends LessonTestCountArgs>(
      args?: Subset<T, LessonTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonTestAggregateArgs>(args: Subset<T, LessonTestAggregateArgs>): Prisma.PrismaPromise<GetLessonTestAggregateType<T>>

    /**
     * Group by LessonTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonTestGroupByArgs['orderBy'] }
        : { orderBy?: LessonTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonTest model
   */
  readonly fields: LessonTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends LessonTest$questionsArgs<ExtArgs> = {}>(args?: Subset<T, LessonTest$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LessonTest model
   */
  interface LessonTestFieldRefs {
    readonly id: FieldRef<"LessonTest", 'String'>
    readonly lessonId: FieldRef<"LessonTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LessonTest findUnique
   */
  export type LessonTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * Filter, which LessonTest to fetch.
     */
    where: LessonTestWhereUniqueInput
  }

  /**
   * LessonTest findUniqueOrThrow
   */
  export type LessonTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * Filter, which LessonTest to fetch.
     */
    where: LessonTestWhereUniqueInput
  }

  /**
   * LessonTest findFirst
   */
  export type LessonTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * Filter, which LessonTest to fetch.
     */
    where?: LessonTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTests to fetch.
     */
    orderBy?: LessonTestOrderByWithRelationInput | LessonTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonTests.
     */
    cursor?: LessonTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonTests.
     */
    distinct?: LessonTestScalarFieldEnum | LessonTestScalarFieldEnum[]
  }

  /**
   * LessonTest findFirstOrThrow
   */
  export type LessonTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * Filter, which LessonTest to fetch.
     */
    where?: LessonTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTests to fetch.
     */
    orderBy?: LessonTestOrderByWithRelationInput | LessonTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonTests.
     */
    cursor?: LessonTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonTests.
     */
    distinct?: LessonTestScalarFieldEnum | LessonTestScalarFieldEnum[]
  }

  /**
   * LessonTest findMany
   */
  export type LessonTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * Filter, which LessonTests to fetch.
     */
    where?: LessonTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonTests to fetch.
     */
    orderBy?: LessonTestOrderByWithRelationInput | LessonTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonTests.
     */
    cursor?: LessonTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonTests.
     */
    skip?: number
    distinct?: LessonTestScalarFieldEnum | LessonTestScalarFieldEnum[]
  }

  /**
   * LessonTest create
   */
  export type LessonTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonTest.
     */
    data: XOR<LessonTestCreateInput, LessonTestUncheckedCreateInput>
  }

  /**
   * LessonTest createMany
   */
  export type LessonTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonTests.
     */
    data: LessonTestCreateManyInput | LessonTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonTest createManyAndReturn
   */
  export type LessonTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * The data used to create many LessonTests.
     */
    data: LessonTestCreateManyInput | LessonTestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonTest update
   */
  export type LessonTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonTest.
     */
    data: XOR<LessonTestUpdateInput, LessonTestUncheckedUpdateInput>
    /**
     * Choose, which LessonTest to update.
     */
    where: LessonTestWhereUniqueInput
  }

  /**
   * LessonTest updateMany
   */
  export type LessonTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonTests.
     */
    data: XOR<LessonTestUpdateManyMutationInput, LessonTestUncheckedUpdateManyInput>
    /**
     * Filter which LessonTests to update
     */
    where?: LessonTestWhereInput
    /**
     * Limit how many LessonTests to update.
     */
    limit?: number
  }

  /**
   * LessonTest updateManyAndReturn
   */
  export type LessonTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * The data used to update LessonTests.
     */
    data: XOR<LessonTestUpdateManyMutationInput, LessonTestUncheckedUpdateManyInput>
    /**
     * Filter which LessonTests to update
     */
    where?: LessonTestWhereInput
    /**
     * Limit how many LessonTests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonTest upsert
   */
  export type LessonTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonTest to update in case it exists.
     */
    where: LessonTestWhereUniqueInput
    /**
     * In case the LessonTest found by the `where` argument doesn't exist, create a new LessonTest with this data.
     */
    create: XOR<LessonTestCreateInput, LessonTestUncheckedCreateInput>
    /**
     * In case the LessonTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonTestUpdateInput, LessonTestUncheckedUpdateInput>
  }

  /**
   * LessonTest delete
   */
  export type LessonTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
    /**
     * Filter which LessonTest to delete.
     */
    where: LessonTestWhereUniqueInput
  }

  /**
   * LessonTest deleteMany
   */
  export type LessonTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonTests to delete
     */
    where?: LessonTestWhereInput
    /**
     * Limit how many LessonTests to delete.
     */
    limit?: number
  }

  /**
   * LessonTest.questions
   */
  export type LessonTest$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    where?: TestQuestionWhereInput
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    cursor?: TestQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * LessonTest without action
   */
  export type LessonTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonTest
     */
    select?: LessonTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonTest
     */
    omit?: LessonTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonTestInclude<ExtArgs> | null
  }


  /**
   * Model TestQuestion
   */

  export type AggregateTestQuestion = {
    _count: TestQuestionCountAggregateOutputType | null
    _avg: TestQuestionAvgAggregateOutputType | null
    _sum: TestQuestionSumAggregateOutputType | null
    _min: TestQuestionMinAggregateOutputType | null
    _max: TestQuestionMaxAggregateOutputType | null
  }

  export type TestQuestionAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type TestQuestionSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type TestQuestionMinAggregateOutputType = {
    id: string | null
    question: string | null
    type: $Enums.TEST_TYPES | null
    testId: string | null
    orderIndex: number | null
  }

  export type TestQuestionMaxAggregateOutputType = {
    id: string | null
    question: string | null
    type: $Enums.TEST_TYPES | null
    testId: string | null
    orderIndex: number | null
  }

  export type TestQuestionCountAggregateOutputType = {
    id: number
    question: number
    type: number
    answers: number
    testId: number
    orderIndex: number
    _all: number
  }


  export type TestQuestionAvgAggregateInputType = {
    orderIndex?: true
  }

  export type TestQuestionSumAggregateInputType = {
    orderIndex?: true
  }

  export type TestQuestionMinAggregateInputType = {
    id?: true
    question?: true
    type?: true
    testId?: true
    orderIndex?: true
  }

  export type TestQuestionMaxAggregateInputType = {
    id?: true
    question?: true
    type?: true
    testId?: true
    orderIndex?: true
  }

  export type TestQuestionCountAggregateInputType = {
    id?: true
    question?: true
    type?: true
    answers?: true
    testId?: true
    orderIndex?: true
    _all?: true
  }

  export type TestQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestQuestion to aggregate.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestQuestions
    **/
    _count?: true | TestQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestQuestionMaxAggregateInputType
  }

  export type GetTestQuestionAggregateType<T extends TestQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTestQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestQuestion[P]>
      : GetScalarType<T[P], AggregateTestQuestion[P]>
  }




  export type TestQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestQuestionWhereInput
    orderBy?: TestQuestionOrderByWithAggregationInput | TestQuestionOrderByWithAggregationInput[]
    by: TestQuestionScalarFieldEnum[] | TestQuestionScalarFieldEnum
    having?: TestQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestQuestionCountAggregateInputType | true
    _avg?: TestQuestionAvgAggregateInputType
    _sum?: TestQuestionSumAggregateInputType
    _min?: TestQuestionMinAggregateInputType
    _max?: TestQuestionMaxAggregateInputType
  }

  export type TestQuestionGroupByOutputType = {
    id: string
    question: string
    type: $Enums.TEST_TYPES
    answers: JsonValue
    testId: string
    orderIndex: number
    _count: TestQuestionCountAggregateOutputType | null
    _avg: TestQuestionAvgAggregateOutputType | null
    _sum: TestQuestionSumAggregateOutputType | null
    _min: TestQuestionMinAggregateOutputType | null
    _max: TestQuestionMaxAggregateOutputType | null
  }

  type GetTestQuestionGroupByPayload<T extends TestQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TestQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TestQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    type?: boolean
    answers?: boolean
    testId?: boolean
    orderIndex?: boolean
    test?: boolean | LessonTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testQuestion"]>

  export type TestQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    type?: boolean
    answers?: boolean
    testId?: boolean
    orderIndex?: boolean
    test?: boolean | LessonTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testQuestion"]>

  export type TestQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    type?: boolean
    answers?: boolean
    testId?: boolean
    orderIndex?: boolean
    test?: boolean | LessonTestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testQuestion"]>

  export type TestQuestionSelectScalar = {
    id?: boolean
    question?: boolean
    type?: boolean
    answers?: boolean
    testId?: boolean
    orderIndex?: boolean
  }

  export type TestQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "type" | "answers" | "testId" | "orderIndex", ExtArgs["result"]["testQuestion"]>
  export type TestQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | LessonTestDefaultArgs<ExtArgs>
  }
  export type TestQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | LessonTestDefaultArgs<ExtArgs>
  }
  export type TestQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | LessonTestDefaultArgs<ExtArgs>
  }

  export type $TestQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestQuestion"
    objects: {
      test: Prisma.$LessonTestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      type: $Enums.TEST_TYPES
      answers: Prisma.JsonValue
      testId: string
      orderIndex: number
    }, ExtArgs["result"]["testQuestion"]>
    composites: {}
  }

  type TestQuestionGetPayload<S extends boolean | null | undefined | TestQuestionDefaultArgs> = $Result.GetResult<Prisma.$TestQuestionPayload, S>

  type TestQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestQuestionCountAggregateInputType | true
    }

  export interface TestQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestQuestion'], meta: { name: 'TestQuestion' } }
    /**
     * Find zero or one TestQuestion that matches the filter.
     * @param {TestQuestionFindUniqueArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestQuestionFindUniqueArgs>(args: SelectSubset<T, TestQuestionFindUniqueArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestQuestionFindUniqueOrThrowArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, TestQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindFirstArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestQuestionFindFirstArgs>(args?: SelectSubset<T, TestQuestionFindFirstArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindFirstOrThrowArgs} args - Arguments to find a TestQuestion
     * @example
     * // Get one TestQuestion
     * const testQuestion = await prisma.testQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, TestQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestQuestions
     * const testQuestions = await prisma.testQuestion.findMany()
     * 
     * // Get first 10 TestQuestions
     * const testQuestions = await prisma.testQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testQuestionWithIdOnly = await prisma.testQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestQuestionFindManyArgs>(args?: SelectSubset<T, TestQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestQuestion.
     * @param {TestQuestionCreateArgs} args - Arguments to create a TestQuestion.
     * @example
     * // Create one TestQuestion
     * const TestQuestion = await prisma.testQuestion.create({
     *   data: {
     *     // ... data to create a TestQuestion
     *   }
     * })
     * 
     */
    create<T extends TestQuestionCreateArgs>(args: SelectSubset<T, TestQuestionCreateArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestQuestions.
     * @param {TestQuestionCreateManyArgs} args - Arguments to create many TestQuestions.
     * @example
     * // Create many TestQuestions
     * const testQuestion = await prisma.testQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestQuestionCreateManyArgs>(args?: SelectSubset<T, TestQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestQuestions and returns the data saved in the database.
     * @param {TestQuestionCreateManyAndReturnArgs} args - Arguments to create many TestQuestions.
     * @example
     * // Create many TestQuestions
     * const testQuestion = await prisma.testQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestQuestions and only return the `id`
     * const testQuestionWithIdOnly = await prisma.testQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, TestQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestQuestion.
     * @param {TestQuestionDeleteArgs} args - Arguments to delete one TestQuestion.
     * @example
     * // Delete one TestQuestion
     * const TestQuestion = await prisma.testQuestion.delete({
     *   where: {
     *     // ... filter to delete one TestQuestion
     *   }
     * })
     * 
     */
    delete<T extends TestQuestionDeleteArgs>(args: SelectSubset<T, TestQuestionDeleteArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestQuestion.
     * @param {TestQuestionUpdateArgs} args - Arguments to update one TestQuestion.
     * @example
     * // Update one TestQuestion
     * const testQuestion = await prisma.testQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestQuestionUpdateArgs>(args: SelectSubset<T, TestQuestionUpdateArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestQuestions.
     * @param {TestQuestionDeleteManyArgs} args - Arguments to filter TestQuestions to delete.
     * @example
     * // Delete a few TestQuestions
     * const { count } = await prisma.testQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestQuestionDeleteManyArgs>(args?: SelectSubset<T, TestQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestQuestions
     * const testQuestion = await prisma.testQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestQuestionUpdateManyArgs>(args: SelectSubset<T, TestQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestQuestions and returns the data updated in the database.
     * @param {TestQuestionUpdateManyAndReturnArgs} args - Arguments to update many TestQuestions.
     * @example
     * // Update many TestQuestions
     * const testQuestion = await prisma.testQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestQuestions and only return the `id`
     * const testQuestionWithIdOnly = await prisma.testQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, TestQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestQuestion.
     * @param {TestQuestionUpsertArgs} args - Arguments to update or create a TestQuestion.
     * @example
     * // Update or create a TestQuestion
     * const testQuestion = await prisma.testQuestion.upsert({
     *   create: {
     *     // ... data to create a TestQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestQuestion we want to update
     *   }
     * })
     */
    upsert<T extends TestQuestionUpsertArgs>(args: SelectSubset<T, TestQuestionUpsertArgs<ExtArgs>>): Prisma__TestQuestionClient<$Result.GetResult<Prisma.$TestQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionCountArgs} args - Arguments to filter TestQuestions to count.
     * @example
     * // Count the number of TestQuestions
     * const count = await prisma.testQuestion.count({
     *   where: {
     *     // ... the filter for the TestQuestions we want to count
     *   }
     * })
    **/
    count<T extends TestQuestionCountArgs>(
      args?: Subset<T, TestQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestQuestionAggregateArgs>(args: Subset<T, TestQuestionAggregateArgs>): Prisma.PrismaPromise<GetTestQuestionAggregateType<T>>

    /**
     * Group by TestQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TestQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestQuestion model
   */
  readonly fields: TestQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends LessonTestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonTestDefaultArgs<ExtArgs>>): Prisma__LessonTestClient<$Result.GetResult<Prisma.$LessonTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestQuestion model
   */
  interface TestQuestionFieldRefs {
    readonly id: FieldRef<"TestQuestion", 'String'>
    readonly question: FieldRef<"TestQuestion", 'String'>
    readonly type: FieldRef<"TestQuestion", 'TEST_TYPES'>
    readonly answers: FieldRef<"TestQuestion", 'Json'>
    readonly testId: FieldRef<"TestQuestion", 'String'>
    readonly orderIndex: FieldRef<"TestQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TestQuestion findUnique
   */
  export type TestQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion findUniqueOrThrow
   */
  export type TestQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion findFirst
   */
  export type TestQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestQuestions.
     */
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion findFirstOrThrow
   */
  export type TestQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestion to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestQuestions.
     */
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion findMany
   */
  export type TestQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter, which TestQuestions to fetch.
     */
    where?: TestQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestQuestions to fetch.
     */
    orderBy?: TestQuestionOrderByWithRelationInput | TestQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestQuestions.
     */
    cursor?: TestQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestQuestions.
     */
    skip?: number
    distinct?: TestQuestionScalarFieldEnum | TestQuestionScalarFieldEnum[]
  }

  /**
   * TestQuestion create
   */
  export type TestQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a TestQuestion.
     */
    data: XOR<TestQuestionCreateInput, TestQuestionUncheckedCreateInput>
  }

  /**
   * TestQuestion createMany
   */
  export type TestQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestQuestions.
     */
    data: TestQuestionCreateManyInput | TestQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestQuestion createManyAndReturn
   */
  export type TestQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many TestQuestions.
     */
    data: TestQuestionCreateManyInput | TestQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestQuestion update
   */
  export type TestQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a TestQuestion.
     */
    data: XOR<TestQuestionUpdateInput, TestQuestionUncheckedUpdateInput>
    /**
     * Choose, which TestQuestion to update.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion updateMany
   */
  export type TestQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestQuestions.
     */
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TestQuestions to update
     */
    where?: TestQuestionWhereInput
    /**
     * Limit how many TestQuestions to update.
     */
    limit?: number
  }

  /**
   * TestQuestion updateManyAndReturn
   */
  export type TestQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * The data used to update TestQuestions.
     */
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TestQuestions to update
     */
    where?: TestQuestionWhereInput
    /**
     * Limit how many TestQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestQuestion upsert
   */
  export type TestQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the TestQuestion to update in case it exists.
     */
    where: TestQuestionWhereUniqueInput
    /**
     * In case the TestQuestion found by the `where` argument doesn't exist, create a new TestQuestion with this data.
     */
    create: XOR<TestQuestionCreateInput, TestQuestionUncheckedCreateInput>
    /**
     * In case the TestQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestQuestionUpdateInput, TestQuestionUncheckedUpdateInput>
  }

  /**
   * TestQuestion delete
   */
  export type TestQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
    /**
     * Filter which TestQuestion to delete.
     */
    where: TestQuestionWhereUniqueInput
  }

  /**
   * TestQuestion deleteMany
   */
  export type TestQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestQuestions to delete
     */
    where?: TestQuestionWhereInput
    /**
     * Limit how many TestQuestions to delete.
     */
    limit?: number
  }

  /**
   * TestQuestion without action
   */
  export type TestQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestQuestion
     */
    select?: TestQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestQuestion
     */
    omit?: TestQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestQuestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    subscriptionHistoryId: 'subscriptionHistoryId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TariffPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration: 'duration',
    maxCourses: 'maxCourses'
  };

  export type TariffPlanScalarFieldEnum = (typeof TariffPlanScalarFieldEnum)[keyof typeof TariffPlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tarifPlanId: 'tarifPlanId',
    createdAt: 'createdAt',
    dateEnd: 'dateEnd',
    isActive: 'isActive'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SubscriptionHistoryScalarFieldEnum: {
    id: 'id',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    tarifPlanId: 'tarifPlanId',
    userId: 'userId',
    prise: 'prise',
    paymentId: 'paymentId'
  };

  export type SubscriptionHistoryScalarFieldEnum = (typeof SubscriptionHistoryScalarFieldEnum)[keyof typeof SubscriptionHistoryScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    preview: 'preview',
    userId: 'userId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseUnitScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    name: 'name',
    description: 'description',
    orderIndex: 'orderIndex'
  };

  export type CourseUnitScalarFieldEnum = (typeof CourseUnitScalarFieldEnum)[keyof typeof CourseUnitScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lessonType: 'lessonType',
    content: 'content',
    courseUnitId: 'courseUnitId',
    orderIndex: 'orderIndex'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonWebinarScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    link: 'link',
    connectTime: 'connectTime',
    description: 'description'
  };

  export type LessonWebinarScalarFieldEnum = (typeof LessonWebinarScalarFieldEnum)[keyof typeof LessonWebinarScalarFieldEnum]


  export const LessonTestScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId'
  };

  export type LessonTestScalarFieldEnum = (typeof LessonTestScalarFieldEnum)[keyof typeof LessonTestScalarFieldEnum]


  export const TestQuestionScalarFieldEnum: {
    id: 'id',
    question: 'question',
    type: 'type',
    answers: 'answers',
    testId: 'testId',
    orderIndex: 'orderIndex'
  };

  export type TestQuestionScalarFieldEnum = (typeof TestQuestionScalarFieldEnum)[keyof typeof TestQuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LESSON_TYPES'
   */
  export type EnumLESSON_TYPESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LESSON_TYPES'>
    


  /**
   * Reference to a field of type 'LESSON_TYPES[]'
   */
  export type ListEnumLESSON_TYPESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LESSON_TYPES[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TEST_TYPES'
   */
  export type EnumTEST_TYPESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TEST_TYPES'>
    


  /**
   * Reference to a field of type 'TEST_TYPES[]'
   */
  export type ListEnumTEST_TYPESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TEST_TYPES[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    subscriptionHistoryId?: StringNullableFilter<"User"> | string | null
    Subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    SubscriptionHistory?: SubscriptionHistoryListRelationFilter
    course?: CourseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    subscriptionHistoryId?: SortOrderInput | SortOrder
    Subscription?: SubscriptionOrderByWithRelationInput
    SubscriptionHistory?: SubscriptionHistoryOrderByRelationAggregateInput
    course?: CourseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    subscriptionHistoryId?: StringNullableFilter<"User"> | string | null
    Subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    SubscriptionHistory?: SubscriptionHistoryListRelationFilter
    course?: CourseListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    subscriptionHistoryId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    subscriptionHistoryId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TariffPlanWhereInput = {
    AND?: TariffPlanWhereInput | TariffPlanWhereInput[]
    OR?: TariffPlanWhereInput[]
    NOT?: TariffPlanWhereInput | TariffPlanWhereInput[]
    id?: StringFilter<"TariffPlan"> | string
    name?: StringFilter<"TariffPlan"> | string
    price?: FloatFilter<"TariffPlan"> | number
    duration?: IntFilter<"TariffPlan"> | number
    maxCourses?: IntFilter<"TariffPlan"> | number
    Subscription?: SubscriptionListRelationFilter
    SubscriptionHistory?: SubscriptionHistoryListRelationFilter
  }

  export type TariffPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
    Subscription?: SubscriptionOrderByRelationAggregateInput
    SubscriptionHistory?: SubscriptionHistoryOrderByRelationAggregateInput
  }

  export type TariffPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TariffPlanWhereInput | TariffPlanWhereInput[]
    OR?: TariffPlanWhereInput[]
    NOT?: TariffPlanWhereInput | TariffPlanWhereInput[]
    price?: FloatFilter<"TariffPlan"> | number
    duration?: IntFilter<"TariffPlan"> | number
    maxCourses?: IntFilter<"TariffPlan"> | number
    Subscription?: SubscriptionListRelationFilter
    SubscriptionHistory?: SubscriptionHistoryListRelationFilter
  }, "id" | "name">

  export type TariffPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
    _count?: TariffPlanCountOrderByAggregateInput
    _avg?: TariffPlanAvgOrderByAggregateInput
    _max?: TariffPlanMaxOrderByAggregateInput
    _min?: TariffPlanMinOrderByAggregateInput
    _sum?: TariffPlanSumOrderByAggregateInput
  }

  export type TariffPlanScalarWhereWithAggregatesInput = {
    AND?: TariffPlanScalarWhereWithAggregatesInput | TariffPlanScalarWhereWithAggregatesInput[]
    OR?: TariffPlanScalarWhereWithAggregatesInput[]
    NOT?: TariffPlanScalarWhereWithAggregatesInput | TariffPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TariffPlan"> | string
    name?: StringWithAggregatesFilter<"TariffPlan"> | string
    price?: FloatWithAggregatesFilter<"TariffPlan"> | number
    duration?: IntWithAggregatesFilter<"TariffPlan"> | number
    maxCourses?: IntWithAggregatesFilter<"TariffPlan"> | number
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    tarifPlanId?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    dateEnd?: DateTimeFilter<"Subscription"> | Date | string
    isActive?: BoolFilter<"Subscription"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tarifPlan?: XOR<TariffPlanScalarRelationFilter, TariffPlanWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tarifPlanId?: SortOrder
    createdAt?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    tarifPlan?: TariffPlanOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    tarifPlanId?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    dateEnd?: DateTimeFilter<"Subscription"> | Date | string
    isActive?: BoolFilter<"Subscription"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tarifPlan?: XOR<TariffPlanScalarRelationFilter, TariffPlanWhereInput>
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tarifPlanId?: SortOrder
    createdAt?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    tarifPlanId?: StringWithAggregatesFilter<"Subscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Subscription"> | boolean
  }

  export type SubscriptionHistoryWhereInput = {
    AND?: SubscriptionHistoryWhereInput | SubscriptionHistoryWhereInput[]
    OR?: SubscriptionHistoryWhereInput[]
    NOT?: SubscriptionHistoryWhereInput | SubscriptionHistoryWhereInput[]
    id?: StringFilter<"SubscriptionHistory"> | string
    dateStart?: DateTimeFilter<"SubscriptionHistory"> | Date | string
    dateEnd?: DateTimeFilter<"SubscriptionHistory"> | Date | string
    tarifPlanId?: StringFilter<"SubscriptionHistory"> | string
    userId?: StringFilter<"SubscriptionHistory"> | string
    prise?: FloatFilter<"SubscriptionHistory"> | number
    paymentId?: StringNullableFilter<"SubscriptionHistory"> | string | null
    tarifPlan?: XOR<TariffPlanScalarRelationFilter, TariffPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    tarifPlanId?: SortOrder
    userId?: SortOrder
    prise?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    tarifPlan?: TariffPlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionHistoryWhereInput | SubscriptionHistoryWhereInput[]
    OR?: SubscriptionHistoryWhereInput[]
    NOT?: SubscriptionHistoryWhereInput | SubscriptionHistoryWhereInput[]
    dateStart?: DateTimeFilter<"SubscriptionHistory"> | Date | string
    dateEnd?: DateTimeFilter<"SubscriptionHistory"> | Date | string
    tarifPlanId?: StringFilter<"SubscriptionHistory"> | string
    userId?: StringFilter<"SubscriptionHistory"> | string
    prise?: FloatFilter<"SubscriptionHistory"> | number
    paymentId?: StringNullableFilter<"SubscriptionHistory"> | string | null
    tarifPlan?: XOR<TariffPlanScalarRelationFilter, TariffPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubscriptionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    tarifPlanId?: SortOrder
    userId?: SortOrder
    prise?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    _count?: SubscriptionHistoryCountOrderByAggregateInput
    _avg?: SubscriptionHistoryAvgOrderByAggregateInput
    _max?: SubscriptionHistoryMaxOrderByAggregateInput
    _min?: SubscriptionHistoryMinOrderByAggregateInput
    _sum?: SubscriptionHistorySumOrderByAggregateInput
  }

  export type SubscriptionHistoryScalarWhereWithAggregatesInput = {
    AND?: SubscriptionHistoryScalarWhereWithAggregatesInput | SubscriptionHistoryScalarWhereWithAggregatesInput[]
    OR?: SubscriptionHistoryScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionHistoryScalarWhereWithAggregatesInput | SubscriptionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionHistory"> | string
    dateStart?: DateTimeWithAggregatesFilter<"SubscriptionHistory"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"SubscriptionHistory"> | Date | string
    tarifPlanId?: StringWithAggregatesFilter<"SubscriptionHistory"> | string
    userId?: StringWithAggregatesFilter<"SubscriptionHistory"> | string
    prise?: FloatWithAggregatesFilter<"SubscriptionHistory"> | number
    paymentId?: StringNullableWithAggregatesFilter<"SubscriptionHistory"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    preview?: StringNullableFilter<"Course"> | string | null
    userId?: StringFilter<"Course"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseUnits?: CourseUnitListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    preview?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    courseUnits?: CourseUnitOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    preview?: StringNullableFilter<"Course"> | string | null
    userId?: StringFilter<"Course"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseUnits?: CourseUnitListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    preview?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    preview?: StringNullableWithAggregatesFilter<"Course"> | string | null
    userId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type CourseUnitWhereInput = {
    AND?: CourseUnitWhereInput | CourseUnitWhereInput[]
    OR?: CourseUnitWhereInput[]
    NOT?: CourseUnitWhereInput | CourseUnitWhereInput[]
    id?: StringFilter<"CourseUnit"> | string
    courseId?: StringFilter<"CourseUnit"> | string
    name?: StringFilter<"CourseUnit"> | string
    description?: StringNullableFilter<"CourseUnit"> | string | null
    orderIndex?: IntFilter<"CourseUnit"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }

  export type CourseUnitOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    course?: CourseOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type CourseUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseUnitWhereInput | CourseUnitWhereInput[]
    OR?: CourseUnitWhereInput[]
    NOT?: CourseUnitWhereInput | CourseUnitWhereInput[]
    courseId?: StringFilter<"CourseUnit"> | string
    name?: StringFilter<"CourseUnit"> | string
    description?: StringNullableFilter<"CourseUnit"> | string | null
    orderIndex?: IntFilter<"CourseUnit"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }, "id">

  export type CourseUnitOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    _count?: CourseUnitCountOrderByAggregateInput
    _avg?: CourseUnitAvgOrderByAggregateInput
    _max?: CourseUnitMaxOrderByAggregateInput
    _min?: CourseUnitMinOrderByAggregateInput
    _sum?: CourseUnitSumOrderByAggregateInput
  }

  export type CourseUnitScalarWhereWithAggregatesInput = {
    AND?: CourseUnitScalarWhereWithAggregatesInput | CourseUnitScalarWhereWithAggregatesInput[]
    OR?: CourseUnitScalarWhereWithAggregatesInput[]
    NOT?: CourseUnitScalarWhereWithAggregatesInput | CourseUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseUnit"> | string
    courseId?: StringWithAggregatesFilter<"CourseUnit"> | string
    name?: StringWithAggregatesFilter<"CourseUnit"> | string
    description?: StringNullableWithAggregatesFilter<"CourseUnit"> | string | null
    orderIndex?: IntWithAggregatesFilter<"CourseUnit"> | number
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    name?: StringFilter<"Lesson"> | string
    lessonType?: EnumLESSON_TYPESFilter<"Lesson"> | $Enums.LESSON_TYPES
    content?: JsonNullableFilter<"Lesson">
    courseUnitId?: StringFilter<"Lesson"> | string
    orderIndex?: IntFilter<"Lesson"> | number
    test?: XOR<LessonTestNullableScalarRelationFilter, LessonTestWhereInput> | null
    webinar?: XOR<LessonWebinarNullableScalarRelationFilter, LessonWebinarWhereInput> | null
    courseUnit?: XOR<CourseUnitScalarRelationFilter, CourseUnitWhereInput>
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lessonType?: SortOrder
    content?: SortOrderInput | SortOrder
    courseUnitId?: SortOrder
    orderIndex?: SortOrder
    test?: LessonTestOrderByWithRelationInput
    webinar?: LessonWebinarOrderByWithRelationInput
    courseUnit?: CourseUnitOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    name?: StringFilter<"Lesson"> | string
    lessonType?: EnumLESSON_TYPESFilter<"Lesson"> | $Enums.LESSON_TYPES
    content?: JsonNullableFilter<"Lesson">
    courseUnitId?: StringFilter<"Lesson"> | string
    orderIndex?: IntFilter<"Lesson"> | number
    test?: XOR<LessonTestNullableScalarRelationFilter, LessonTestWhereInput> | null
    webinar?: XOR<LessonWebinarNullableScalarRelationFilter, LessonWebinarWhereInput> | null
    courseUnit?: XOR<CourseUnitScalarRelationFilter, CourseUnitWhereInput>
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lessonType?: SortOrder
    content?: SortOrderInput | SortOrder
    courseUnitId?: SortOrder
    orderIndex?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    name?: StringWithAggregatesFilter<"Lesson"> | string
    lessonType?: EnumLESSON_TYPESWithAggregatesFilter<"Lesson"> | $Enums.LESSON_TYPES
    content?: JsonNullableWithAggregatesFilter<"Lesson">
    courseUnitId?: StringWithAggregatesFilter<"Lesson"> | string
    orderIndex?: IntWithAggregatesFilter<"Lesson"> | number
  }

  export type LessonWebinarWhereInput = {
    AND?: LessonWebinarWhereInput | LessonWebinarWhereInput[]
    OR?: LessonWebinarWhereInput[]
    NOT?: LessonWebinarWhereInput | LessonWebinarWhereInput[]
    id?: StringFilter<"LessonWebinar"> | string
    lessonId?: StringFilter<"LessonWebinar"> | string
    link?: StringFilter<"LessonWebinar"> | string
    connectTime?: StringFilter<"LessonWebinar"> | string
    description?: StringNullableFilter<"LessonWebinar"> | string | null
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonWebinarOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    link?: SortOrder
    connectTime?: SortOrder
    description?: SortOrderInput | SortOrder
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonWebinarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId?: string
    AND?: LessonWebinarWhereInput | LessonWebinarWhereInput[]
    OR?: LessonWebinarWhereInput[]
    NOT?: LessonWebinarWhereInput | LessonWebinarWhereInput[]
    link?: StringFilter<"LessonWebinar"> | string
    connectTime?: StringFilter<"LessonWebinar"> | string
    description?: StringNullableFilter<"LessonWebinar"> | string | null
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "lessonId">

  export type LessonWebinarOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    link?: SortOrder
    connectTime?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: LessonWebinarCountOrderByAggregateInput
    _max?: LessonWebinarMaxOrderByAggregateInput
    _min?: LessonWebinarMinOrderByAggregateInput
  }

  export type LessonWebinarScalarWhereWithAggregatesInput = {
    AND?: LessonWebinarScalarWhereWithAggregatesInput | LessonWebinarScalarWhereWithAggregatesInput[]
    OR?: LessonWebinarScalarWhereWithAggregatesInput[]
    NOT?: LessonWebinarScalarWhereWithAggregatesInput | LessonWebinarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonWebinar"> | string
    lessonId?: StringWithAggregatesFilter<"LessonWebinar"> | string
    link?: StringWithAggregatesFilter<"LessonWebinar"> | string
    connectTime?: StringWithAggregatesFilter<"LessonWebinar"> | string
    description?: StringNullableWithAggregatesFilter<"LessonWebinar"> | string | null
  }

  export type LessonTestWhereInput = {
    AND?: LessonTestWhereInput | LessonTestWhereInput[]
    OR?: LessonTestWhereInput[]
    NOT?: LessonTestWhereInput | LessonTestWhereInput[]
    id?: StringFilter<"LessonTest"> | string
    lessonId?: StringFilter<"LessonTest"> | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    questions?: TestQuestionListRelationFilter
  }

  export type LessonTestOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    lesson?: LessonOrderByWithRelationInput
    questions?: TestQuestionOrderByRelationAggregateInput
  }

  export type LessonTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId?: string
    AND?: LessonTestWhereInput | LessonTestWhereInput[]
    OR?: LessonTestWhereInput[]
    NOT?: LessonTestWhereInput | LessonTestWhereInput[]
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    questions?: TestQuestionListRelationFilter
  }, "id" | "lessonId">

  export type LessonTestOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    _count?: LessonTestCountOrderByAggregateInput
    _max?: LessonTestMaxOrderByAggregateInput
    _min?: LessonTestMinOrderByAggregateInput
  }

  export type LessonTestScalarWhereWithAggregatesInput = {
    AND?: LessonTestScalarWhereWithAggregatesInput | LessonTestScalarWhereWithAggregatesInput[]
    OR?: LessonTestScalarWhereWithAggregatesInput[]
    NOT?: LessonTestScalarWhereWithAggregatesInput | LessonTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonTest"> | string
    lessonId?: StringWithAggregatesFilter<"LessonTest"> | string
  }

  export type TestQuestionWhereInput = {
    AND?: TestQuestionWhereInput | TestQuestionWhereInput[]
    OR?: TestQuestionWhereInput[]
    NOT?: TestQuestionWhereInput | TestQuestionWhereInput[]
    id?: StringFilter<"TestQuestion"> | string
    question?: StringFilter<"TestQuestion"> | string
    type?: EnumTEST_TYPESFilter<"TestQuestion"> | $Enums.TEST_TYPES
    answers?: JsonFilter<"TestQuestion">
    testId?: StringFilter<"TestQuestion"> | string
    orderIndex?: IntFilter<"TestQuestion"> | number
    test?: XOR<LessonTestScalarRelationFilter, LessonTestWhereInput>
  }

  export type TestQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    answers?: SortOrder
    testId?: SortOrder
    orderIndex?: SortOrder
    test?: LessonTestOrderByWithRelationInput
  }

  export type TestQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestQuestionWhereInput | TestQuestionWhereInput[]
    OR?: TestQuestionWhereInput[]
    NOT?: TestQuestionWhereInput | TestQuestionWhereInput[]
    question?: StringFilter<"TestQuestion"> | string
    type?: EnumTEST_TYPESFilter<"TestQuestion"> | $Enums.TEST_TYPES
    answers?: JsonFilter<"TestQuestion">
    testId?: StringFilter<"TestQuestion"> | string
    orderIndex?: IntFilter<"TestQuestion"> | number
    test?: XOR<LessonTestScalarRelationFilter, LessonTestWhereInput>
  }, "id">

  export type TestQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    answers?: SortOrder
    testId?: SortOrder
    orderIndex?: SortOrder
    _count?: TestQuestionCountOrderByAggregateInput
    _avg?: TestQuestionAvgOrderByAggregateInput
    _max?: TestQuestionMaxOrderByAggregateInput
    _min?: TestQuestionMinOrderByAggregateInput
    _sum?: TestQuestionSumOrderByAggregateInput
  }

  export type TestQuestionScalarWhereWithAggregatesInput = {
    AND?: TestQuestionScalarWhereWithAggregatesInput | TestQuestionScalarWhereWithAggregatesInput[]
    OR?: TestQuestionScalarWhereWithAggregatesInput[]
    NOT?: TestQuestionScalarWhereWithAggregatesInput | TestQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestQuestion"> | string
    question?: StringWithAggregatesFilter<"TestQuestion"> | string
    type?: EnumTEST_TYPESWithAggregatesFilter<"TestQuestion"> | $Enums.TEST_TYPES
    answers?: JsonWithAggregatesFilter<"TestQuestion">
    testId?: StringWithAggregatesFilter<"TestQuestion"> | string
    orderIndex?: IntWithAggregatesFilter<"TestQuestion"> | number
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    SubscriptionHistory?: SubscriptionHistoryCreateNestedManyWithoutUserInput
    course?: CourseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    SubscriptionHistory?: SubscriptionHistoryUncheckedCreateNestedManyWithoutUserInput
    course?: CourseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    SubscriptionHistory?: SubscriptionHistoryUpdateManyWithoutUserNestedInput
    course?: CourseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    SubscriptionHistory?: SubscriptionHistoryUncheckedUpdateManyWithoutUserNestedInput
    course?: CourseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TariffPlanCreateInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
    Subscription?: SubscriptionCreateNestedManyWithoutTarifPlanInput
    SubscriptionHistory?: SubscriptionHistoryCreateNestedManyWithoutTarifPlanInput
  }

  export type TariffPlanUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutTarifPlanInput
    SubscriptionHistory?: SubscriptionHistoryUncheckedCreateNestedManyWithoutTarifPlanInput
  }

  export type TariffPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
    Subscription?: SubscriptionUpdateManyWithoutTarifPlanNestedInput
    SubscriptionHistory?: SubscriptionHistoryUpdateManyWithoutTarifPlanNestedInput
  }

  export type TariffPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
    Subscription?: SubscriptionUncheckedUpdateManyWithoutTarifPlanNestedInput
    SubscriptionHistory?: SubscriptionHistoryUncheckedUpdateManyWithoutTarifPlanNestedInput
  }

  export type TariffPlanCreateManyInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
  }

  export type TariffPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
  }

  export type TariffPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutSubscriptionInput
    tarifPlan: TariffPlanCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    tarifPlanId: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    tarifPlan?: TariffPlanUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    tarifPlanId: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionHistoryCreateInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    prise: number
    paymentId?: string | null
    tarifPlan: TariffPlanCreateNestedOneWithoutSubscriptionHistoryInput
    user: UserCreateNestedOneWithoutSubscriptionHistoryInput
  }

  export type SubscriptionHistoryUncheckedCreateInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    tarifPlanId: string
    userId: string
    prise: number
    paymentId?: string | null
  }

  export type SubscriptionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    tarifPlan?: TariffPlanUpdateOneRequiredWithoutSubscriptionHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionHistoryNestedInput
  }

  export type SubscriptionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionHistoryCreateManyInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    tarifPlanId: string
    userId: string
    prise: number
    paymentId?: string | null
  }

  export type SubscriptionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    user: UserCreateNestedOneWithoutCourseInput
    courseUnits?: CourseUnitCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    userId: string
    courseUnits?: CourseUnitUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCourseNestedInput
    courseUnits?: CourseUnitUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    courseUnits?: CourseUnitUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    userId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUnitCreateInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    course: CourseCreateNestedOneWithoutCourseUnitsInput
    lessons?: LessonCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUncheckedCreateInput = {
    id?: string
    courseId: string
    name: string
    description?: string | null
    orderIndex?: number
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutCourseUnitsNestedInput
    lessons?: LessonUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUncheckedUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitCreateManyInput = {
    id?: string
    courseId: string
    name: string
    description?: string | null
    orderIndex?: number
  }

  export type CourseUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: number
    test?: LessonTestCreateNestedOneWithoutLessonInput
    webinar?: LessonWebinarCreateNestedOneWithoutLessonInput
    courseUnit: CourseUnitCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId: string
    orderIndex?: number
    test?: LessonTestUncheckedCreateNestedOneWithoutLessonInput
    webinar?: LessonWebinarUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUpdateOneWithoutLessonNestedInput
    webinar?: LessonWebinarUpdateOneWithoutLessonNestedInput
    courseUnit?: CourseUnitUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUncheckedUpdateOneWithoutLessonNestedInput
    webinar?: LessonWebinarUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId: string
    orderIndex?: number
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type LessonWebinarCreateInput = {
    id?: string
    link: string
    connectTime: string
    description?: string | null
    lesson: LessonCreateNestedOneWithoutWebinarInput
  }

  export type LessonWebinarUncheckedCreateInput = {
    id?: string
    lessonId: string
    link: string
    connectTime: string
    description?: string | null
  }

  export type LessonWebinarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    connectTime?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lesson?: LessonUpdateOneRequiredWithoutWebinarNestedInput
  }

  export type LessonWebinarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    connectTime?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonWebinarCreateManyInput = {
    id?: string
    lessonId: string
    link: string
    connectTime: string
    description?: string | null
  }

  export type LessonWebinarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    connectTime?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonWebinarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    connectTime?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonTestCreateInput = {
    id?: string
    lesson: LessonCreateNestedOneWithoutTestInput
    questions?: TestQuestionCreateNestedManyWithoutTestInput
  }

  export type LessonTestUncheckedCreateInput = {
    id?: string
    lessonId: string
    questions?: TestQuestionUncheckedCreateNestedManyWithoutTestInput
  }

  export type LessonTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutTestNestedInput
    questions?: TestQuestionUpdateManyWithoutTestNestedInput
  }

  export type LessonTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    questions?: TestQuestionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type LessonTestCreateManyInput = {
    id?: string
    lessonId: string
  }

  export type LessonTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LessonTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type TestQuestionCreateInput = {
    id?: string
    question: string
    type?: $Enums.TEST_TYPES
    answers: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    test: LessonTestCreateNestedOneWithoutQuestionsInput
  }

  export type TestQuestionUncheckedCreateInput = {
    id?: string
    question: string
    type?: $Enums.TEST_TYPES
    answers: JsonNullValueInput | InputJsonValue
    testId: string
    orderIndex?: number
  }

  export type TestQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type TestQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    testId?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionCreateManyInput = {
    id?: string
    question: string
    type?: $Enums.TEST_TYPES
    answers: JsonNullValueInput | InputJsonValue
    testId: string
    orderIndex?: number
  }

  export type TestQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    testId?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SubscriptionHistoryListRelationFilter = {
    every?: SubscriptionHistoryWhereInput
    some?: SubscriptionHistoryWhereInput
    none?: SubscriptionHistoryWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubscriptionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    subscriptionHistoryId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    subscriptionHistoryId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    subscriptionHistoryId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
  }

  export type TariffPlanAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
  }

  export type TariffPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
  }

  export type TariffPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
  }

  export type TariffPlanSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
    maxCourses?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TariffPlanScalarRelationFilter = {
    is?: TariffPlanWhereInput
    isNot?: TariffPlanWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tarifPlanId?: SortOrder
    createdAt?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tarifPlanId?: SortOrder
    createdAt?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tarifPlanId?: SortOrder
    createdAt?: SortOrder
    dateEnd?: SortOrder
    isActive?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubscriptionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    tarifPlanId?: SortOrder
    userId?: SortOrder
    prise?: SortOrder
    paymentId?: SortOrder
  }

  export type SubscriptionHistoryAvgOrderByAggregateInput = {
    prise?: SortOrder
  }

  export type SubscriptionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    tarifPlanId?: SortOrder
    userId?: SortOrder
    prise?: SortOrder
    paymentId?: SortOrder
  }

  export type SubscriptionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    tarifPlanId?: SortOrder
    userId?: SortOrder
    prise?: SortOrder
    paymentId?: SortOrder
  }

  export type SubscriptionHistorySumOrderByAggregateInput = {
    prise?: SortOrder
  }

  export type CourseUnitListRelationFilter = {
    every?: CourseUnitWhereInput
    some?: CourseUnitWhereInput
    none?: CourseUnitWhereInput
  }

  export type CourseUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preview?: SortOrder
    userId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preview?: SortOrder
    userId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    preview?: SortOrder
    userId?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseUnitCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
  }

  export type CourseUnitAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type CourseUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
  }

  export type CourseUnitMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
  }

  export type CourseUnitSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type EnumLESSON_TYPESFilter<$PrismaModel = never> = {
    equals?: $Enums.LESSON_TYPES | EnumLESSON_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumLESSON_TYPESFilter<$PrismaModel> | $Enums.LESSON_TYPES
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LessonTestNullableScalarRelationFilter = {
    is?: LessonTestWhereInput | null
    isNot?: LessonTestWhereInput | null
  }

  export type LessonWebinarNullableScalarRelationFilter = {
    is?: LessonWebinarWhereInput | null
    isNot?: LessonWebinarWhereInput | null
  }

  export type CourseUnitScalarRelationFilter = {
    is?: CourseUnitWhereInput
    isNot?: CourseUnitWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lessonType?: SortOrder
    content?: SortOrder
    courseUnitId?: SortOrder
    orderIndex?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lessonType?: SortOrder
    courseUnitId?: SortOrder
    orderIndex?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lessonType?: SortOrder
    courseUnitId?: SortOrder
    orderIndex?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type EnumLESSON_TYPESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LESSON_TYPES | EnumLESSON_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumLESSON_TYPESWithAggregatesFilter<$PrismaModel> | $Enums.LESSON_TYPES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLESSON_TYPESFilter<$PrismaModel>
    _max?: NestedEnumLESSON_TYPESFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonWebinarCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    link?: SortOrder
    connectTime?: SortOrder
    description?: SortOrder
  }

  export type LessonWebinarMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    link?: SortOrder
    connectTime?: SortOrder
    description?: SortOrder
  }

  export type LessonWebinarMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    link?: SortOrder
    connectTime?: SortOrder
    description?: SortOrder
  }

  export type TestQuestionListRelationFilter = {
    every?: TestQuestionWhereInput
    some?: TestQuestionWhereInput
    none?: TestQuestionWhereInput
  }

  export type TestQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonTestCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonTestMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonTestMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type EnumTEST_TYPESFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_TYPES | EnumTEST_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_TYPESFilter<$PrismaModel> | $Enums.TEST_TYPES
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LessonTestScalarRelationFilter = {
    is?: LessonTestWhereInput
    isNot?: LessonTestWhereInput
  }

  export type TestQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    answers?: SortOrder
    testId?: SortOrder
    orderIndex?: SortOrder
  }

  export type TestQuestionAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type TestQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    testId?: SortOrder
    orderIndex?: SortOrder
  }

  export type TestQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    type?: SortOrder
    testId?: SortOrder
    orderIndex?: SortOrder
  }

  export type TestQuestionSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type EnumTEST_TYPESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_TYPES | EnumTEST_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_TYPESWithAggregatesFilter<$PrismaModel> | $Enums.TEST_TYPES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTEST_TYPESFilter<$PrismaModel>
    _max?: NestedEnumTEST_TYPESFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SubscriptionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutUserInput, SubscriptionHistoryUncheckedCreateWithoutUserInput> | SubscriptionHistoryCreateWithoutUserInput[] | SubscriptionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutUserInput | SubscriptionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionHistoryCreateManyUserInputEnvelope
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SubscriptionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutUserInput, SubscriptionHistoryUncheckedCreateWithoutUserInput> | SubscriptionHistoryCreateWithoutUserInput[] | SubscriptionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutUserInput | SubscriptionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionHistoryCreateManyUserInputEnvelope
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutUserInput, SubscriptionHistoryUncheckedCreateWithoutUserInput> | SubscriptionHistoryCreateWithoutUserInput[] | SubscriptionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutUserInput | SubscriptionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionHistoryUpsertWithWhereUniqueWithoutUserInput | SubscriptionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionHistoryCreateManyUserInputEnvelope
    set?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    disconnect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    delete?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    update?: SubscriptionHistoryUpdateWithWhereUniqueWithoutUserInput | SubscriptionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionHistoryUpdateManyWithWhereWithoutUserInput | SubscriptionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionHistoryScalarWhereInput | SubscriptionHistoryScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutUserInput, SubscriptionHistoryUncheckedCreateWithoutUserInput> | SubscriptionHistoryCreateWithoutUserInput[] | SubscriptionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutUserInput | SubscriptionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionHistoryUpsertWithWhereUniqueWithoutUserInput | SubscriptionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionHistoryCreateManyUserInputEnvelope
    set?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    disconnect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    delete?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    update?: SubscriptionHistoryUpdateWithWhereUniqueWithoutUserInput | SubscriptionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionHistoryUpdateManyWithWhereWithoutUserInput | SubscriptionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionHistoryScalarWhereInput | SubscriptionHistoryScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type SubscriptionCreateNestedManyWithoutTarifPlanInput = {
    create?: XOR<SubscriptionCreateWithoutTarifPlanInput, SubscriptionUncheckedCreateWithoutTarifPlanInput> | SubscriptionCreateWithoutTarifPlanInput[] | SubscriptionUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTarifPlanInput | SubscriptionCreateOrConnectWithoutTarifPlanInput[]
    createMany?: SubscriptionCreateManyTarifPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionHistoryCreateNestedManyWithoutTarifPlanInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutTarifPlanInput, SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput> | SubscriptionHistoryCreateWithoutTarifPlanInput[] | SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput | SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput[]
    createMany?: SubscriptionHistoryCreateManyTarifPlanInputEnvelope
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutTarifPlanInput = {
    create?: XOR<SubscriptionCreateWithoutTarifPlanInput, SubscriptionUncheckedCreateWithoutTarifPlanInput> | SubscriptionCreateWithoutTarifPlanInput[] | SubscriptionUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTarifPlanInput | SubscriptionCreateOrConnectWithoutTarifPlanInput[]
    createMany?: SubscriptionCreateManyTarifPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionHistoryUncheckedCreateNestedManyWithoutTarifPlanInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutTarifPlanInput, SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput> | SubscriptionHistoryCreateWithoutTarifPlanInput[] | SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput | SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput[]
    createMany?: SubscriptionHistoryCreateManyTarifPlanInputEnvelope
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutTarifPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTarifPlanInput, SubscriptionUncheckedCreateWithoutTarifPlanInput> | SubscriptionCreateWithoutTarifPlanInput[] | SubscriptionUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTarifPlanInput | SubscriptionCreateOrConnectWithoutTarifPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutTarifPlanInput | SubscriptionUpsertWithWhereUniqueWithoutTarifPlanInput[]
    createMany?: SubscriptionCreateManyTarifPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutTarifPlanInput | SubscriptionUpdateWithWhereUniqueWithoutTarifPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutTarifPlanInput | SubscriptionUpdateManyWithWhereWithoutTarifPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionHistoryUpdateManyWithoutTarifPlanNestedInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutTarifPlanInput, SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput> | SubscriptionHistoryCreateWithoutTarifPlanInput[] | SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput | SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput[]
    upsert?: SubscriptionHistoryUpsertWithWhereUniqueWithoutTarifPlanInput | SubscriptionHistoryUpsertWithWhereUniqueWithoutTarifPlanInput[]
    createMany?: SubscriptionHistoryCreateManyTarifPlanInputEnvelope
    set?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    disconnect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    delete?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    update?: SubscriptionHistoryUpdateWithWhereUniqueWithoutTarifPlanInput | SubscriptionHistoryUpdateWithWhereUniqueWithoutTarifPlanInput[]
    updateMany?: SubscriptionHistoryUpdateManyWithWhereWithoutTarifPlanInput | SubscriptionHistoryUpdateManyWithWhereWithoutTarifPlanInput[]
    deleteMany?: SubscriptionHistoryScalarWhereInput | SubscriptionHistoryScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutTarifPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTarifPlanInput, SubscriptionUncheckedCreateWithoutTarifPlanInput> | SubscriptionCreateWithoutTarifPlanInput[] | SubscriptionUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTarifPlanInput | SubscriptionCreateOrConnectWithoutTarifPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutTarifPlanInput | SubscriptionUpsertWithWhereUniqueWithoutTarifPlanInput[]
    createMany?: SubscriptionCreateManyTarifPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutTarifPlanInput | SubscriptionUpdateWithWhereUniqueWithoutTarifPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutTarifPlanInput | SubscriptionUpdateManyWithWhereWithoutTarifPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionHistoryUncheckedUpdateManyWithoutTarifPlanNestedInput = {
    create?: XOR<SubscriptionHistoryCreateWithoutTarifPlanInput, SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput> | SubscriptionHistoryCreateWithoutTarifPlanInput[] | SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput[]
    connectOrCreate?: SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput | SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput[]
    upsert?: SubscriptionHistoryUpsertWithWhereUniqueWithoutTarifPlanInput | SubscriptionHistoryUpsertWithWhereUniqueWithoutTarifPlanInput[]
    createMany?: SubscriptionHistoryCreateManyTarifPlanInputEnvelope
    set?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    disconnect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    delete?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    connect?: SubscriptionHistoryWhereUniqueInput | SubscriptionHistoryWhereUniqueInput[]
    update?: SubscriptionHistoryUpdateWithWhereUniqueWithoutTarifPlanInput | SubscriptionHistoryUpdateWithWhereUniqueWithoutTarifPlanInput[]
    updateMany?: SubscriptionHistoryUpdateManyWithWhereWithoutTarifPlanInput | SubscriptionHistoryUpdateManyWithWhereWithoutTarifPlanInput[]
    deleteMany?: SubscriptionHistoryScalarWhereInput | SubscriptionHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type TariffPlanCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<TariffPlanCreateWithoutSubscriptionInput, TariffPlanUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TariffPlanCreateOrConnectWithoutSubscriptionInput
    connect?: TariffPlanWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TariffPlanUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<TariffPlanCreateWithoutSubscriptionInput, TariffPlanUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TariffPlanCreateOrConnectWithoutSubscriptionInput
    upsert?: TariffPlanUpsertWithoutSubscriptionInput
    connect?: TariffPlanWhereUniqueInput
    update?: XOR<XOR<TariffPlanUpdateToOneWithWhereWithoutSubscriptionInput, TariffPlanUpdateWithoutSubscriptionInput>, TariffPlanUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TariffPlanCreateNestedOneWithoutSubscriptionHistoryInput = {
    create?: XOR<TariffPlanCreateWithoutSubscriptionHistoryInput, TariffPlanUncheckedCreateWithoutSubscriptionHistoryInput>
    connectOrCreate?: TariffPlanCreateOrConnectWithoutSubscriptionHistoryInput
    connect?: TariffPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionHistoryInput = {
    create?: XOR<UserCreateWithoutSubscriptionHistoryInput, UserUncheckedCreateWithoutSubscriptionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type TariffPlanUpdateOneRequiredWithoutSubscriptionHistoryNestedInput = {
    create?: XOR<TariffPlanCreateWithoutSubscriptionHistoryInput, TariffPlanUncheckedCreateWithoutSubscriptionHistoryInput>
    connectOrCreate?: TariffPlanCreateOrConnectWithoutSubscriptionHistoryInput
    upsert?: TariffPlanUpsertWithoutSubscriptionHistoryInput
    connect?: TariffPlanWhereUniqueInput
    update?: XOR<XOR<TariffPlanUpdateToOneWithWhereWithoutSubscriptionHistoryInput, TariffPlanUpdateWithoutSubscriptionHistoryInput>, TariffPlanUncheckedUpdateWithoutSubscriptionHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutSubscriptionHistoryNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionHistoryInput, UserUncheckedCreateWithoutSubscriptionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionHistoryInput
    upsert?: UserUpsertWithoutSubscriptionHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionHistoryInput, UserUpdateWithoutSubscriptionHistoryInput>, UserUncheckedUpdateWithoutSubscriptionHistoryInput>
  }

  export type UserCreateNestedOneWithoutCourseInput = {
    create?: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUnitCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
  }

  export type CourseUnitUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseInput
    upsert?: UserUpsertWithoutCourseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseInput, UserUpdateWithoutCourseInput>, UserUncheckedUpdateWithoutCourseInput>
  }

  export type CourseUnitUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    upsert?: CourseUnitUpsertWithWhereUniqueWithoutCourseInput | CourseUnitUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    set?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    disconnect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    delete?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    update?: CourseUnitUpdateWithWhereUniqueWithoutCourseInput | CourseUnitUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseUnitUpdateManyWithWhereWithoutCourseInput | CourseUnitUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
  }

  export type CourseUnitUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput> | CourseUnitCreateWithoutCourseInput[] | CourseUnitUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseUnitCreateOrConnectWithoutCourseInput | CourseUnitCreateOrConnectWithoutCourseInput[]
    upsert?: CourseUnitUpsertWithWhereUniqueWithoutCourseInput | CourseUnitUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseUnitCreateManyCourseInputEnvelope
    set?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    disconnect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    delete?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    connect?: CourseUnitWhereUniqueInput | CourseUnitWhereUniqueInput[]
    update?: CourseUnitUpdateWithWhereUniqueWithoutCourseInput | CourseUnitUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseUnitUpdateManyWithWhereWithoutCourseInput | CourseUnitUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseUnitsInput = {
    create?: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseUnitsInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutCourseUnitInput = {
    create?: XOR<LessonCreateWithoutCourseUnitInput, LessonUncheckedCreateWithoutCourseUnitInput> | LessonCreateWithoutCourseUnitInput[] | LessonUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseUnitInput | LessonCreateOrConnectWithoutCourseUnitInput[]
    createMany?: LessonCreateManyCourseUnitInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseUnitInput = {
    create?: XOR<LessonCreateWithoutCourseUnitInput, LessonUncheckedCreateWithoutCourseUnitInput> | LessonCreateWithoutCourseUnitInput[] | LessonUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseUnitInput | LessonCreateOrConnectWithoutCourseUnitInput[]
    createMany?: LessonCreateManyCourseUnitInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutCourseUnitsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseUnitsInput
    upsert?: CourseUpsertWithoutCourseUnitsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseUnitsInput, CourseUpdateWithoutCourseUnitsInput>, CourseUncheckedUpdateWithoutCourseUnitsInput>
  }

  export type LessonUpdateManyWithoutCourseUnitNestedInput = {
    create?: XOR<LessonCreateWithoutCourseUnitInput, LessonUncheckedCreateWithoutCourseUnitInput> | LessonCreateWithoutCourseUnitInput[] | LessonUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseUnitInput | LessonCreateOrConnectWithoutCourseUnitInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseUnitInput | LessonUpsertWithWhereUniqueWithoutCourseUnitInput[]
    createMany?: LessonCreateManyCourseUnitInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseUnitInput | LessonUpdateWithWhereUniqueWithoutCourseUnitInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseUnitInput | LessonUpdateManyWithWhereWithoutCourseUnitInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutCourseUnitNestedInput = {
    create?: XOR<LessonCreateWithoutCourseUnitInput, LessonUncheckedCreateWithoutCourseUnitInput> | LessonCreateWithoutCourseUnitInput[] | LessonUncheckedCreateWithoutCourseUnitInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseUnitInput | LessonCreateOrConnectWithoutCourseUnitInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseUnitInput | LessonUpsertWithWhereUniqueWithoutCourseUnitInput[]
    createMany?: LessonCreateManyCourseUnitInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseUnitInput | LessonUpdateWithWhereUniqueWithoutCourseUnitInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseUnitInput | LessonUpdateManyWithWhereWithoutCourseUnitInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonTestCreateNestedOneWithoutLessonInput = {
    create?: XOR<LessonTestCreateWithoutLessonInput, LessonTestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonTestCreateOrConnectWithoutLessonInput
    connect?: LessonTestWhereUniqueInput
  }

  export type LessonWebinarCreateNestedOneWithoutLessonInput = {
    create?: XOR<LessonWebinarCreateWithoutLessonInput, LessonWebinarUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonWebinarCreateOrConnectWithoutLessonInput
    connect?: LessonWebinarWhereUniqueInput
  }

  export type CourseUnitCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseUnitCreateWithoutLessonsInput, CourseUnitUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseUnitCreateOrConnectWithoutLessonsInput
    connect?: CourseUnitWhereUniqueInput
  }

  export type LessonTestUncheckedCreateNestedOneWithoutLessonInput = {
    create?: XOR<LessonTestCreateWithoutLessonInput, LessonTestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonTestCreateOrConnectWithoutLessonInput
    connect?: LessonTestWhereUniqueInput
  }

  export type LessonWebinarUncheckedCreateNestedOneWithoutLessonInput = {
    create?: XOR<LessonWebinarCreateWithoutLessonInput, LessonWebinarUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonWebinarCreateOrConnectWithoutLessonInput
    connect?: LessonWebinarWhereUniqueInput
  }

  export type EnumLESSON_TYPESFieldUpdateOperationsInput = {
    set?: $Enums.LESSON_TYPES
  }

  export type LessonTestUpdateOneWithoutLessonNestedInput = {
    create?: XOR<LessonTestCreateWithoutLessonInput, LessonTestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonTestCreateOrConnectWithoutLessonInput
    upsert?: LessonTestUpsertWithoutLessonInput
    disconnect?: LessonTestWhereInput | boolean
    delete?: LessonTestWhereInput | boolean
    connect?: LessonTestWhereUniqueInput
    update?: XOR<XOR<LessonTestUpdateToOneWithWhereWithoutLessonInput, LessonTestUpdateWithoutLessonInput>, LessonTestUncheckedUpdateWithoutLessonInput>
  }

  export type LessonWebinarUpdateOneWithoutLessonNestedInput = {
    create?: XOR<LessonWebinarCreateWithoutLessonInput, LessonWebinarUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonWebinarCreateOrConnectWithoutLessonInput
    upsert?: LessonWebinarUpsertWithoutLessonInput
    disconnect?: LessonWebinarWhereInput | boolean
    delete?: LessonWebinarWhereInput | boolean
    connect?: LessonWebinarWhereUniqueInput
    update?: XOR<XOR<LessonWebinarUpdateToOneWithWhereWithoutLessonInput, LessonWebinarUpdateWithoutLessonInput>, LessonWebinarUncheckedUpdateWithoutLessonInput>
  }

  export type CourseUnitUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseUnitCreateWithoutLessonsInput, CourseUnitUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseUnitCreateOrConnectWithoutLessonsInput
    upsert?: CourseUnitUpsertWithoutLessonsInput
    connect?: CourseUnitWhereUniqueInput
    update?: XOR<XOR<CourseUnitUpdateToOneWithWhereWithoutLessonsInput, CourseUnitUpdateWithoutLessonsInput>, CourseUnitUncheckedUpdateWithoutLessonsInput>
  }

  export type LessonTestUncheckedUpdateOneWithoutLessonNestedInput = {
    create?: XOR<LessonTestCreateWithoutLessonInput, LessonTestUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonTestCreateOrConnectWithoutLessonInput
    upsert?: LessonTestUpsertWithoutLessonInput
    disconnect?: LessonTestWhereInput | boolean
    delete?: LessonTestWhereInput | boolean
    connect?: LessonTestWhereUniqueInput
    update?: XOR<XOR<LessonTestUpdateToOneWithWhereWithoutLessonInput, LessonTestUpdateWithoutLessonInput>, LessonTestUncheckedUpdateWithoutLessonInput>
  }

  export type LessonWebinarUncheckedUpdateOneWithoutLessonNestedInput = {
    create?: XOR<LessonWebinarCreateWithoutLessonInput, LessonWebinarUncheckedCreateWithoutLessonInput>
    connectOrCreate?: LessonWebinarCreateOrConnectWithoutLessonInput
    upsert?: LessonWebinarUpsertWithoutLessonInput
    disconnect?: LessonWebinarWhereInput | boolean
    delete?: LessonWebinarWhereInput | boolean
    connect?: LessonWebinarWhereUniqueInput
    update?: XOR<XOR<LessonWebinarUpdateToOneWithWhereWithoutLessonInput, LessonWebinarUpdateWithoutLessonInput>, LessonWebinarUncheckedUpdateWithoutLessonInput>
  }

  export type LessonCreateNestedOneWithoutWebinarInput = {
    create?: XOR<LessonCreateWithoutWebinarInput, LessonUncheckedCreateWithoutWebinarInput>
    connectOrCreate?: LessonCreateOrConnectWithoutWebinarInput
    connect?: LessonWhereUniqueInput
  }

  export type LessonUpdateOneRequiredWithoutWebinarNestedInput = {
    create?: XOR<LessonCreateWithoutWebinarInput, LessonUncheckedCreateWithoutWebinarInput>
    connectOrCreate?: LessonCreateOrConnectWithoutWebinarInput
    upsert?: LessonUpsertWithoutWebinarInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutWebinarInput, LessonUpdateWithoutWebinarInput>, LessonUncheckedUpdateWithoutWebinarInput>
  }

  export type LessonCreateNestedOneWithoutTestInput = {
    create?: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTestInput
    connect?: LessonWhereUniqueInput
  }

  export type TestQuestionCreateNestedManyWithoutTestInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
  }

  export type TestQuestionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
  }

  export type LessonUpdateOneRequiredWithoutTestNestedInput = {
    create?: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTestInput
    upsert?: LessonUpsertWithoutTestInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutTestInput, LessonUpdateWithoutTestInput>, LessonUncheckedUpdateWithoutTestInput>
  }

  export type TestQuestionUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    upsert?: TestQuestionUpsertWithWhereUniqueWithoutTestInput | TestQuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    set?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    disconnect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    delete?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    update?: TestQuestionUpdateWithWhereUniqueWithoutTestInput | TestQuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestQuestionUpdateManyWithWhereWithoutTestInput | TestQuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
  }

  export type TestQuestionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput> | TestQuestionCreateWithoutTestInput[] | TestQuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: TestQuestionCreateOrConnectWithoutTestInput | TestQuestionCreateOrConnectWithoutTestInput[]
    upsert?: TestQuestionUpsertWithWhereUniqueWithoutTestInput | TestQuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: TestQuestionCreateManyTestInputEnvelope
    set?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    disconnect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    delete?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    connect?: TestQuestionWhereUniqueInput | TestQuestionWhereUniqueInput[]
    update?: TestQuestionUpdateWithWhereUniqueWithoutTestInput | TestQuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: TestQuestionUpdateManyWithWhereWithoutTestInput | TestQuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
  }

  export type LessonTestCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<LessonTestCreateWithoutQuestionsInput, LessonTestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: LessonTestCreateOrConnectWithoutQuestionsInput
    connect?: LessonTestWhereUniqueInput
  }

  export type EnumTEST_TYPESFieldUpdateOperationsInput = {
    set?: $Enums.TEST_TYPES
  }

  export type LessonTestUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<LessonTestCreateWithoutQuestionsInput, LessonTestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: LessonTestCreateOrConnectWithoutQuestionsInput
    upsert?: LessonTestUpsertWithoutQuestionsInput
    connect?: LessonTestWhereUniqueInput
    update?: XOR<XOR<LessonTestUpdateToOneWithWhereWithoutQuestionsInput, LessonTestUpdateWithoutQuestionsInput>, LessonTestUncheckedUpdateWithoutQuestionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumLESSON_TYPESFilter<$PrismaModel = never> = {
    equals?: $Enums.LESSON_TYPES | EnumLESSON_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumLESSON_TYPESFilter<$PrismaModel> | $Enums.LESSON_TYPES
  }

  export type NestedEnumLESSON_TYPESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LESSON_TYPES | EnumLESSON_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.LESSON_TYPES[] | ListEnumLESSON_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumLESSON_TYPESWithAggregatesFilter<$PrismaModel> | $Enums.LESSON_TYPES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLESSON_TYPESFilter<$PrismaModel>
    _max?: NestedEnumLESSON_TYPESFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTEST_TYPESFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_TYPES | EnumTEST_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_TYPESFilter<$PrismaModel> | $Enums.TEST_TYPES
  }

  export type NestedEnumTEST_TYPESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_TYPES | EnumTEST_TYPESFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_TYPES[] | ListEnumTEST_TYPESFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_TYPESWithAggregatesFilter<$PrismaModel> | $Enums.TEST_TYPES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTEST_TYPESFilter<$PrismaModel>
    _max?: NestedEnumTEST_TYPESFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
    tarifPlan: TariffPlanCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    tarifPlanId: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionHistoryCreateWithoutUserInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    prise: number
    paymentId?: string | null
    tarifPlan: TariffPlanCreateNestedOneWithoutSubscriptionHistoryInput
  }

  export type SubscriptionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    tarifPlanId: string
    prise: number
    paymentId?: string | null
  }

  export type SubscriptionHistoryCreateOrConnectWithoutUserInput = {
    where: SubscriptionHistoryWhereUniqueInput
    create: XOR<SubscriptionHistoryCreateWithoutUserInput, SubscriptionHistoryUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionHistoryCreateManyUserInputEnvelope = {
    data: SubscriptionHistoryCreateManyUserInput | SubscriptionHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    courseUnits?: CourseUnitCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    courseUnits?: CourseUnitUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseCreateManyUserInputEnvelope = {
    data: CourseCreateManyUserInput | CourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    tarifPlan?: TariffPlanUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionHistoryWhereUniqueInput
    update: XOR<SubscriptionHistoryUpdateWithoutUserInput, SubscriptionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionHistoryCreateWithoutUserInput, SubscriptionHistoryUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionHistoryWhereUniqueInput
    data: XOR<SubscriptionHistoryUpdateWithoutUserInput, SubscriptionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionHistoryScalarWhereInput
    data: XOR<SubscriptionHistoryUpdateManyMutationInput, SubscriptionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionHistoryScalarWhereInput = {
    AND?: SubscriptionHistoryScalarWhereInput | SubscriptionHistoryScalarWhereInput[]
    OR?: SubscriptionHistoryScalarWhereInput[]
    NOT?: SubscriptionHistoryScalarWhereInput | SubscriptionHistoryScalarWhereInput[]
    id?: StringFilter<"SubscriptionHistory"> | string
    dateStart?: DateTimeFilter<"SubscriptionHistory"> | Date | string
    dateEnd?: DateTimeFilter<"SubscriptionHistory"> | Date | string
    tarifPlanId?: StringFilter<"SubscriptionHistory"> | string
    userId?: StringFilter<"SubscriptionHistory"> | string
    prise?: FloatFilter<"SubscriptionHistory"> | number
    paymentId?: StringNullableFilter<"SubscriptionHistory"> | string | null
  }

  export type CourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
  }

  export type CourseUpdateManyWithWhereWithoutUserInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    preview?: StringNullableFilter<"Course"> | string | null
    userId?: StringFilter<"Course"> | string
  }

  export type SubscriptionCreateWithoutTarifPlanInput = {
    id?: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutTarifPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutTarifPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutTarifPlanInput, SubscriptionUncheckedCreateWithoutTarifPlanInput>
  }

  export type SubscriptionCreateManyTarifPlanInputEnvelope = {
    data: SubscriptionCreateManyTarifPlanInput | SubscriptionCreateManyTarifPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionHistoryCreateWithoutTarifPlanInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    prise: number
    paymentId?: string | null
    user: UserCreateNestedOneWithoutSubscriptionHistoryInput
  }

  export type SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    userId: string
    prise: number
    paymentId?: string | null
  }

  export type SubscriptionHistoryCreateOrConnectWithoutTarifPlanInput = {
    where: SubscriptionHistoryWhereUniqueInput
    create: XOR<SubscriptionHistoryCreateWithoutTarifPlanInput, SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput>
  }

  export type SubscriptionHistoryCreateManyTarifPlanInputEnvelope = {
    data: SubscriptionHistoryCreateManyTarifPlanInput | SubscriptionHistoryCreateManyTarifPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutTarifPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutTarifPlanInput, SubscriptionUncheckedUpdateWithoutTarifPlanInput>
    create: XOR<SubscriptionCreateWithoutTarifPlanInput, SubscriptionUncheckedCreateWithoutTarifPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutTarifPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutTarifPlanInput, SubscriptionUncheckedUpdateWithoutTarifPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutTarifPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutTarifPlanInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    tarifPlanId?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    dateEnd?: DateTimeFilter<"Subscription"> | Date | string
    isActive?: BoolFilter<"Subscription"> | boolean
  }

  export type SubscriptionHistoryUpsertWithWhereUniqueWithoutTarifPlanInput = {
    where: SubscriptionHistoryWhereUniqueInput
    update: XOR<SubscriptionHistoryUpdateWithoutTarifPlanInput, SubscriptionHistoryUncheckedUpdateWithoutTarifPlanInput>
    create: XOR<SubscriptionHistoryCreateWithoutTarifPlanInput, SubscriptionHistoryUncheckedCreateWithoutTarifPlanInput>
  }

  export type SubscriptionHistoryUpdateWithWhereUniqueWithoutTarifPlanInput = {
    where: SubscriptionHistoryWhereUniqueInput
    data: XOR<SubscriptionHistoryUpdateWithoutTarifPlanInput, SubscriptionHistoryUncheckedUpdateWithoutTarifPlanInput>
  }

  export type SubscriptionHistoryUpdateManyWithWhereWithoutTarifPlanInput = {
    where: SubscriptionHistoryScalarWhereInput
    data: XOR<SubscriptionHistoryUpdateManyMutationInput, SubscriptionHistoryUncheckedUpdateManyWithoutTarifPlanInput>
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    SubscriptionHistory?: SubscriptionHistoryCreateNestedManyWithoutUserInput
    course?: CourseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    SubscriptionHistory?: SubscriptionHistoryUncheckedCreateNestedManyWithoutUserInput
    course?: CourseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type TariffPlanCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
    SubscriptionHistory?: SubscriptionHistoryCreateNestedManyWithoutTarifPlanInput
  }

  export type TariffPlanUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
    SubscriptionHistory?: SubscriptionHistoryUncheckedCreateNestedManyWithoutTarifPlanInput
  }

  export type TariffPlanCreateOrConnectWithoutSubscriptionInput = {
    where: TariffPlanWhereUniqueInput
    create: XOR<TariffPlanCreateWithoutSubscriptionInput, TariffPlanUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    SubscriptionHistory?: SubscriptionHistoryUpdateManyWithoutUserNestedInput
    course?: CourseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    SubscriptionHistory?: SubscriptionHistoryUncheckedUpdateManyWithoutUserNestedInput
    course?: CourseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TariffPlanUpsertWithoutSubscriptionInput = {
    update: XOR<TariffPlanUpdateWithoutSubscriptionInput, TariffPlanUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<TariffPlanCreateWithoutSubscriptionInput, TariffPlanUncheckedCreateWithoutSubscriptionInput>
    where?: TariffPlanWhereInput
  }

  export type TariffPlanUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: TariffPlanWhereInput
    data: XOR<TariffPlanUpdateWithoutSubscriptionInput, TariffPlanUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TariffPlanUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
    SubscriptionHistory?: SubscriptionHistoryUpdateManyWithoutTarifPlanNestedInput
  }

  export type TariffPlanUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
    SubscriptionHistory?: SubscriptionHistoryUncheckedUpdateManyWithoutTarifPlanNestedInput
  }

  export type TariffPlanCreateWithoutSubscriptionHistoryInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
    Subscription?: SubscriptionCreateNestedManyWithoutTarifPlanInput
  }

  export type TariffPlanUncheckedCreateWithoutSubscriptionHistoryInput = {
    id?: string
    name: string
    price: number
    duration?: number
    maxCourses: number
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutTarifPlanInput
  }

  export type TariffPlanCreateOrConnectWithoutSubscriptionHistoryInput = {
    where: TariffPlanWhereUniqueInput
    create: XOR<TariffPlanCreateWithoutSubscriptionHistoryInput, TariffPlanUncheckedCreateWithoutSubscriptionHistoryInput>
  }

  export type UserCreateWithoutSubscriptionHistoryInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    course?: CourseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionHistoryInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    course?: CourseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionHistoryInput, UserUncheckedCreateWithoutSubscriptionHistoryInput>
  }

  export type TariffPlanUpsertWithoutSubscriptionHistoryInput = {
    update: XOR<TariffPlanUpdateWithoutSubscriptionHistoryInput, TariffPlanUncheckedUpdateWithoutSubscriptionHistoryInput>
    create: XOR<TariffPlanCreateWithoutSubscriptionHistoryInput, TariffPlanUncheckedCreateWithoutSubscriptionHistoryInput>
    where?: TariffPlanWhereInput
  }

  export type TariffPlanUpdateToOneWithWhereWithoutSubscriptionHistoryInput = {
    where?: TariffPlanWhereInput
    data: XOR<TariffPlanUpdateWithoutSubscriptionHistoryInput, TariffPlanUncheckedUpdateWithoutSubscriptionHistoryInput>
  }

  export type TariffPlanUpdateWithoutSubscriptionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
    Subscription?: SubscriptionUpdateManyWithoutTarifPlanNestedInput
  }

  export type TariffPlanUncheckedUpdateWithoutSubscriptionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    maxCourses?: IntFieldUpdateOperationsInput | number
    Subscription?: SubscriptionUncheckedUpdateManyWithoutTarifPlanNestedInput
  }

  export type UserUpsertWithoutSubscriptionHistoryInput = {
    update: XOR<UserUpdateWithoutSubscriptionHistoryInput, UserUncheckedUpdateWithoutSubscriptionHistoryInput>
    create: XOR<UserCreateWithoutSubscriptionHistoryInput, UserUncheckedCreateWithoutSubscriptionHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionHistoryInput, UserUncheckedUpdateWithoutSubscriptionHistoryInput>
  }

  export type UserUpdateWithoutSubscriptionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    course?: CourseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    course?: CourseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCourseInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    SubscriptionHistory?: SubscriptionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    subscriptionHistoryId?: string | null
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    SubscriptionHistory?: SubscriptionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
  }

  export type CourseUnitCreateWithoutCourseInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    lessons?: LessonCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseUnitInput
  }

  export type CourseUnitCreateOrConnectWithoutCourseInput = {
    where: CourseUnitWhereUniqueInput
    create: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput>
  }

  export type CourseUnitCreateManyCourseInputEnvelope = {
    data: CourseUnitCreateManyCourseInput | CourseUnitCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCourseInput = {
    update: XOR<UserUpdateWithoutCourseInput, UserUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCreateWithoutCourseInput, UserUncheckedCreateWithoutCourseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseInput, UserUncheckedUpdateWithoutCourseInput>
  }

  export type UserUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    SubscriptionHistory?: SubscriptionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptionHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    SubscriptionHistory?: SubscriptionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUnitUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseUnitWhereUniqueInput
    update: XOR<CourseUnitUpdateWithoutCourseInput, CourseUnitUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseUnitCreateWithoutCourseInput, CourseUnitUncheckedCreateWithoutCourseInput>
  }

  export type CourseUnitUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseUnitWhereUniqueInput
    data: XOR<CourseUnitUpdateWithoutCourseInput, CourseUnitUncheckedUpdateWithoutCourseInput>
  }

  export type CourseUnitUpdateManyWithWhereWithoutCourseInput = {
    where: CourseUnitScalarWhereInput
    data: XOR<CourseUnitUpdateManyMutationInput, CourseUnitUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseUnitScalarWhereInput = {
    AND?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
    OR?: CourseUnitScalarWhereInput[]
    NOT?: CourseUnitScalarWhereInput | CourseUnitScalarWhereInput[]
    id?: StringFilter<"CourseUnit"> | string
    courseId?: StringFilter<"CourseUnit"> | string
    name?: StringFilter<"CourseUnit"> | string
    description?: StringNullableFilter<"CourseUnit"> | string | null
    orderIndex?: IntFilter<"CourseUnit"> | number
  }

  export type CourseCreateWithoutCourseUnitsInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    user: UserCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseUnitsInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
    userId: string
  }

  export type CourseCreateOrConnectWithoutCourseUnitsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
  }

  export type LessonCreateWithoutCourseUnitInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: number
    test?: LessonTestCreateNestedOneWithoutLessonInput
    webinar?: LessonWebinarCreateNestedOneWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutCourseUnitInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: number
    test?: LessonTestUncheckedCreateNestedOneWithoutLessonInput
    webinar?: LessonWebinarUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutCourseUnitInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseUnitInput, LessonUncheckedCreateWithoutCourseUnitInput>
  }

  export type LessonCreateManyCourseUnitInputEnvelope = {
    data: LessonCreateManyCourseUnitInput | LessonCreateManyCourseUnitInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseUnitsInput = {
    update: XOR<CourseUpdateWithoutCourseUnitsInput, CourseUncheckedUpdateWithoutCourseUnitsInput>
    create: XOR<CourseCreateWithoutCourseUnitsInput, CourseUncheckedCreateWithoutCourseUnitsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseUnitsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseUnitsInput, CourseUncheckedUpdateWithoutCourseUnitsInput>
  }

  export type CourseUpdateWithoutCourseUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseUnitInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseUnitInput, LessonUncheckedUpdateWithoutCourseUnitInput>
    create: XOR<LessonCreateWithoutCourseUnitInput, LessonUncheckedCreateWithoutCourseUnitInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseUnitInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseUnitInput, LessonUncheckedUpdateWithoutCourseUnitInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseUnitInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseUnitInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    name?: StringFilter<"Lesson"> | string
    lessonType?: EnumLESSON_TYPESFilter<"Lesson"> | $Enums.LESSON_TYPES
    content?: JsonNullableFilter<"Lesson">
    courseUnitId?: StringFilter<"Lesson"> | string
    orderIndex?: IntFilter<"Lesson"> | number
  }

  export type LessonTestCreateWithoutLessonInput = {
    id?: string
    questions?: TestQuestionCreateNestedManyWithoutTestInput
  }

  export type LessonTestUncheckedCreateWithoutLessonInput = {
    id?: string
    questions?: TestQuestionUncheckedCreateNestedManyWithoutTestInput
  }

  export type LessonTestCreateOrConnectWithoutLessonInput = {
    where: LessonTestWhereUniqueInput
    create: XOR<LessonTestCreateWithoutLessonInput, LessonTestUncheckedCreateWithoutLessonInput>
  }

  export type LessonWebinarCreateWithoutLessonInput = {
    id?: string
    link: string
    connectTime: string
    description?: string | null
  }

  export type LessonWebinarUncheckedCreateWithoutLessonInput = {
    id?: string
    link: string
    connectTime: string
    description?: string | null
  }

  export type LessonWebinarCreateOrConnectWithoutLessonInput = {
    where: LessonWebinarWhereUniqueInput
    create: XOR<LessonWebinarCreateWithoutLessonInput, LessonWebinarUncheckedCreateWithoutLessonInput>
  }

  export type CourseUnitCreateWithoutLessonsInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
    course: CourseCreateNestedOneWithoutCourseUnitsInput
  }

  export type CourseUnitUncheckedCreateWithoutLessonsInput = {
    id?: string
    courseId: string
    name: string
    description?: string | null
    orderIndex?: number
  }

  export type CourseUnitCreateOrConnectWithoutLessonsInput = {
    where: CourseUnitWhereUniqueInput
    create: XOR<CourseUnitCreateWithoutLessonsInput, CourseUnitUncheckedCreateWithoutLessonsInput>
  }

  export type LessonTestUpsertWithoutLessonInput = {
    update: XOR<LessonTestUpdateWithoutLessonInput, LessonTestUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonTestCreateWithoutLessonInput, LessonTestUncheckedCreateWithoutLessonInput>
    where?: LessonTestWhereInput
  }

  export type LessonTestUpdateToOneWithWhereWithoutLessonInput = {
    where?: LessonTestWhereInput
    data: XOR<LessonTestUpdateWithoutLessonInput, LessonTestUncheckedUpdateWithoutLessonInput>
  }

  export type LessonTestUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: TestQuestionUpdateManyWithoutTestNestedInput
  }

  export type LessonTestUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    questions?: TestQuestionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type LessonWebinarUpsertWithoutLessonInput = {
    update: XOR<LessonWebinarUpdateWithoutLessonInput, LessonWebinarUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonWebinarCreateWithoutLessonInput, LessonWebinarUncheckedCreateWithoutLessonInput>
    where?: LessonWebinarWhereInput
  }

  export type LessonWebinarUpdateToOneWithWhereWithoutLessonInput = {
    where?: LessonWebinarWhereInput
    data: XOR<LessonWebinarUpdateWithoutLessonInput, LessonWebinarUncheckedUpdateWithoutLessonInput>
  }

  export type LessonWebinarUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    connectTime?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LessonWebinarUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    connectTime?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUnitUpsertWithoutLessonsInput = {
    update: XOR<CourseUnitUpdateWithoutLessonsInput, CourseUnitUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseUnitCreateWithoutLessonsInput, CourseUnitUncheckedCreateWithoutLessonsInput>
    where?: CourseUnitWhereInput
  }

  export type CourseUnitUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseUnitWhereInput
    data: XOR<CourseUnitUpdateWithoutLessonsInput, CourseUnitUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUnitUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutCourseUnitsNestedInput
  }

  export type CourseUnitUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateWithoutWebinarInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: number
    test?: LessonTestCreateNestedOneWithoutLessonInput
    courseUnit: CourseUnitCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutWebinarInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId: string
    orderIndex?: number
    test?: LessonTestUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutWebinarInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutWebinarInput, LessonUncheckedCreateWithoutWebinarInput>
  }

  export type LessonUpsertWithoutWebinarInput = {
    update: XOR<LessonUpdateWithoutWebinarInput, LessonUncheckedUpdateWithoutWebinarInput>
    create: XOR<LessonCreateWithoutWebinarInput, LessonUncheckedCreateWithoutWebinarInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutWebinarInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutWebinarInput, LessonUncheckedUpdateWithoutWebinarInput>
  }

  export type LessonUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUpdateOneWithoutLessonNestedInput
    courseUnit?: CourseUnitUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonCreateWithoutTestInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: number
    webinar?: LessonWebinarCreateNestedOneWithoutLessonInput
    courseUnit: CourseUnitCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutTestInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId: string
    orderIndex?: number
    webinar?: LessonWebinarUncheckedCreateNestedOneWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutTestInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
  }

  export type TestQuestionCreateWithoutTestInput = {
    id?: string
    question: string
    type?: $Enums.TEST_TYPES
    answers: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type TestQuestionUncheckedCreateWithoutTestInput = {
    id?: string
    question: string
    type?: $Enums.TEST_TYPES
    answers: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type TestQuestionCreateOrConnectWithoutTestInput = {
    where: TestQuestionWhereUniqueInput
    create: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput>
  }

  export type TestQuestionCreateManyTestInputEnvelope = {
    data: TestQuestionCreateManyTestInput | TestQuestionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithoutTestInput = {
    update: XOR<LessonUpdateWithoutTestInput, LessonUncheckedUpdateWithoutTestInput>
    create: XOR<LessonCreateWithoutTestInput, LessonUncheckedCreateWithoutTestInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutTestInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutTestInput, LessonUncheckedUpdateWithoutTestInput>
  }

  export type LessonUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    webinar?: LessonWebinarUpdateOneWithoutLessonNestedInput
    courseUnit?: CourseUnitUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    courseUnitId?: StringFieldUpdateOperationsInput | string
    orderIndex?: IntFieldUpdateOperationsInput | number
    webinar?: LessonWebinarUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type TestQuestionUpsertWithWhereUniqueWithoutTestInput = {
    where: TestQuestionWhereUniqueInput
    update: XOR<TestQuestionUpdateWithoutTestInput, TestQuestionUncheckedUpdateWithoutTestInput>
    create: XOR<TestQuestionCreateWithoutTestInput, TestQuestionUncheckedCreateWithoutTestInput>
  }

  export type TestQuestionUpdateWithWhereUniqueWithoutTestInput = {
    where: TestQuestionWhereUniqueInput
    data: XOR<TestQuestionUpdateWithoutTestInput, TestQuestionUncheckedUpdateWithoutTestInput>
  }

  export type TestQuestionUpdateManyWithWhereWithoutTestInput = {
    where: TestQuestionScalarWhereInput
    data: XOR<TestQuestionUpdateManyMutationInput, TestQuestionUncheckedUpdateManyWithoutTestInput>
  }

  export type TestQuestionScalarWhereInput = {
    AND?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
    OR?: TestQuestionScalarWhereInput[]
    NOT?: TestQuestionScalarWhereInput | TestQuestionScalarWhereInput[]
    id?: StringFilter<"TestQuestion"> | string
    question?: StringFilter<"TestQuestion"> | string
    type?: EnumTEST_TYPESFilter<"TestQuestion"> | $Enums.TEST_TYPES
    answers?: JsonFilter<"TestQuestion">
    testId?: StringFilter<"TestQuestion"> | string
    orderIndex?: IntFilter<"TestQuestion"> | number
  }

  export type LessonTestCreateWithoutQuestionsInput = {
    id?: string
    lesson: LessonCreateNestedOneWithoutTestInput
  }

  export type LessonTestUncheckedCreateWithoutQuestionsInput = {
    id?: string
    lessonId: string
  }

  export type LessonTestCreateOrConnectWithoutQuestionsInput = {
    where: LessonTestWhereUniqueInput
    create: XOR<LessonTestCreateWithoutQuestionsInput, LessonTestUncheckedCreateWithoutQuestionsInput>
  }

  export type LessonTestUpsertWithoutQuestionsInput = {
    update: XOR<LessonTestUpdateWithoutQuestionsInput, LessonTestUncheckedUpdateWithoutQuestionsInput>
    create: XOR<LessonTestCreateWithoutQuestionsInput, LessonTestUncheckedCreateWithoutQuestionsInput>
    where?: LessonTestWhereInput
  }

  export type LessonTestUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: LessonTestWhereInput
    data: XOR<LessonTestUpdateWithoutQuestionsInput, LessonTestUncheckedUpdateWithoutQuestionsInput>
  }

  export type LessonTestUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutTestNestedInput
  }

  export type LessonTestUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionHistoryCreateManyUserInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    tarifPlanId: string
    prise: number
    paymentId?: string | null
  }

  export type CourseCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    preview?: string | null
  }

  export type SubscriptionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    tarifPlan?: TariffPlanUpdateOneRequiredWithoutSubscriptionHistoryNestedInput
  }

  export type SubscriptionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    tarifPlanId?: StringFieldUpdateOperationsInput | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    courseUnits?: CourseUnitUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
    courseUnits?: CourseUnitUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    preview?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateManyTarifPlanInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    dateEnd: Date | string
    isActive?: boolean
  }

  export type SubscriptionHistoryCreateManyTarifPlanInput = {
    id?: string
    dateStart: Date | string
    dateEnd: Date | string
    userId: string
    prise: number
    paymentId?: string | null
  }

  export type SubscriptionUpdateWithoutTarifPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutTarifPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutTarifPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionHistoryUpdateWithoutTarifPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSubscriptionHistoryNestedInput
  }

  export type SubscriptionHistoryUncheckedUpdateWithoutTarifPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionHistoryUncheckedUpdateManyWithoutTarifPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    prise?: FloatFieldUpdateOperationsInput | number
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUnitCreateManyCourseInput = {
    id?: string
    name: string
    description?: string | null
    orderIndex?: number
  }

  export type CourseUnitUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUncheckedUpdateManyWithoutCourseUnitNestedInput
  }

  export type CourseUnitUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateManyCourseUnitInput = {
    id?: string
    name: string
    lessonType?: $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type LessonUpdateWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUpdateOneWithoutLessonNestedInput
    webinar?: LessonWebinarUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    test?: LessonTestUncheckedUpdateOneWithoutLessonNestedInput
    webinar?: LessonWebinarUncheckedUpdateOneWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutCourseUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lessonType?: EnumLESSON_TYPESFieldUpdateOperationsInput | $Enums.LESSON_TYPES
    content?: NullableJsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionCreateManyTestInput = {
    id?: string
    question: string
    type?: $Enums.TEST_TYPES
    answers: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type TestQuestionUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type TestQuestionUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    type?: EnumTEST_TYPESFieldUpdateOperationsInput | $Enums.TEST_TYPES
    answers?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}