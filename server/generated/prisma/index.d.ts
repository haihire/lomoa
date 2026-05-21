
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
 * Model admin_users
 * 
 */
export type admin_users = $Result.DefaultSelection<Prisma.$admin_usersPayload>
/**
 * Model apm_page_visits
 * 
 */
export type apm_page_visits = $Result.DefaultSelection<Prisma.$apm_page_visitsPayload>
/**
 * Model apm_request_timings
 * 
 */
export type apm_request_timings = $Result.DefaultSelection<Prisma.$apm_request_timingsPayload>
/**
 * Model apm_site_clicks
 * 
 */
export type apm_site_clicks = $Result.DefaultSelection<Prisma.$apm_site_clicksPayload>
/**
 * Model apm_system_metrics
 * 
 */
export type apm_system_metrics = $Result.DefaultSelection<Prisma.$apm_system_metricsPayload>
/**
 * Model apm_youtube_clicks
 * 
 */
export type apm_youtube_clicks = $Result.DefaultSelection<Prisma.$apm_youtube_clicksPayload>
/**
 * Model loa_ark_grid
 * 
 */
export type loa_ark_grid = $Result.DefaultSelection<Prisma.$loa_ark_gridPayload>
/**
 * Model loa_class
 * 
 */
export type loa_class = $Result.DefaultSelection<Prisma.$loa_classPayload>
/**
 * Model loa_class_summaries
 * 
 */
export type loa_class_summaries = $Result.DefaultSelection<Prisma.$loa_class_summariesPayload>
/**
 * Model loa_sites
 * 
 */
export type loa_sites = $Result.DefaultSelection<Prisma.$loa_sitesPayload>
/**
 * Model loa_users
 * 
 */
export type loa_users = $Result.DefaultSelection<Prisma.$loa_usersPayload>
/**
 * Model monitoring_api_probes
 * 
 */
export type monitoring_api_probes = $Result.DefaultSelection<Prisma.$monitoring_api_probesPayload>
/**
 * Model youtube_view_snapshots
 * 
 */
export type youtube_view_snapshots = $Result.DefaultSelection<Prisma.$youtube_view_snapshotsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admin_users
 * const admin_users = await prisma.admin_users.findMany()
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
   * // Fetch zero or more Admin_users
   * const admin_users = await prisma.admin_users.findMany()
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
   * `prisma.admin_users`: Exposes CRUD operations for the **admin_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_users
    * const admin_users = await prisma.admin_users.findMany()
    * ```
    */
  get admin_users(): Prisma.admin_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apm_page_visits`: Exposes CRUD operations for the **apm_page_visits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apm_page_visits
    * const apm_page_visits = await prisma.apm_page_visits.findMany()
    * ```
    */
  get apm_page_visits(): Prisma.apm_page_visitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apm_request_timings`: Exposes CRUD operations for the **apm_request_timings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apm_request_timings
    * const apm_request_timings = await prisma.apm_request_timings.findMany()
    * ```
    */
  get apm_request_timings(): Prisma.apm_request_timingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apm_site_clicks`: Exposes CRUD operations for the **apm_site_clicks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apm_site_clicks
    * const apm_site_clicks = await prisma.apm_site_clicks.findMany()
    * ```
    */
  get apm_site_clicks(): Prisma.apm_site_clicksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apm_system_metrics`: Exposes CRUD operations for the **apm_system_metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apm_system_metrics
    * const apm_system_metrics = await prisma.apm_system_metrics.findMany()
    * ```
    */
  get apm_system_metrics(): Prisma.apm_system_metricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apm_youtube_clicks`: Exposes CRUD operations for the **apm_youtube_clicks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apm_youtube_clicks
    * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findMany()
    * ```
    */
  get apm_youtube_clicks(): Prisma.apm_youtube_clicksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loa_ark_grid`: Exposes CRUD operations for the **loa_ark_grid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loa_ark_grids
    * const loa_ark_grids = await prisma.loa_ark_grid.findMany()
    * ```
    */
  get loa_ark_grid(): Prisma.loa_ark_gridDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loa_class`: Exposes CRUD operations for the **loa_class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loa_classes
    * const loa_classes = await prisma.loa_class.findMany()
    * ```
    */
  get loa_class(): Prisma.loa_classDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loa_class_summaries`: Exposes CRUD operations for the **loa_class_summaries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loa_class_summaries
    * const loa_class_summaries = await prisma.loa_class_summaries.findMany()
    * ```
    */
  get loa_class_summaries(): Prisma.loa_class_summariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loa_sites`: Exposes CRUD operations for the **loa_sites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loa_sites
    * const loa_sites = await prisma.loa_sites.findMany()
    * ```
    */
  get loa_sites(): Prisma.loa_sitesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loa_users`: Exposes CRUD operations for the **loa_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loa_users
    * const loa_users = await prisma.loa_users.findMany()
    * ```
    */
  get loa_users(): Prisma.loa_usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monitoring_api_probes`: Exposes CRUD operations for the **monitoring_api_probes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitoring_api_probes
    * const monitoring_api_probes = await prisma.monitoring_api_probes.findMany()
    * ```
    */
  get monitoring_api_probes(): Prisma.monitoring_api_probesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.youtube_view_snapshots`: Exposes CRUD operations for the **youtube_view_snapshots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Youtube_view_snapshots
    * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findMany()
    * ```
    */
  get youtube_view_snapshots(): Prisma.youtube_view_snapshotsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    admin_users: 'admin_users',
    apm_page_visits: 'apm_page_visits',
    apm_request_timings: 'apm_request_timings',
    apm_site_clicks: 'apm_site_clicks',
    apm_system_metrics: 'apm_system_metrics',
    apm_youtube_clicks: 'apm_youtube_clicks',
    loa_ark_grid: 'loa_ark_grid',
    loa_class: 'loa_class',
    loa_class_summaries: 'loa_class_summaries',
    loa_sites: 'loa_sites',
    loa_users: 'loa_users',
    monitoring_api_probes: 'monitoring_api_probes',
    youtube_view_snapshots: 'youtube_view_snapshots'
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
      modelProps: "admin_users" | "apm_page_visits" | "apm_request_timings" | "apm_site_clicks" | "apm_system_metrics" | "apm_youtube_clicks" | "loa_ark_grid" | "loa_class" | "loa_class_summaries" | "loa_sites" | "loa_users" | "monitoring_api_probes" | "youtube_view_snapshots"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin_users: {
        payload: Prisma.$admin_usersPayload<ExtArgs>
        fields: Prisma.admin_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.admin_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.admin_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          findFirst: {
            args: Prisma.admin_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.admin_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          findMany: {
            args: Prisma.admin_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>[]
          }
          create: {
            args: Prisma.admin_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          createMany: {
            args: Prisma.admin_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.admin_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>[]
          }
          delete: {
            args: Prisma.admin_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          update: {
            args: Prisma.admin_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          deleteMany: {
            args: Prisma.admin_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.admin_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.admin_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>[]
          }
          upsert: {
            args: Prisma.admin_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$admin_usersPayload>
          }
          aggregate: {
            args: Prisma.Admin_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_users>
          }
          groupBy: {
            args: Prisma.admin_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.admin_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_usersCountAggregateOutputType> | number
          }
        }
      }
      apm_page_visits: {
        payload: Prisma.$apm_page_visitsPayload<ExtArgs>
        fields: Prisma.apm_page_visitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apm_page_visitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apm_page_visitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>
          }
          findFirst: {
            args: Prisma.apm_page_visitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apm_page_visitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>
          }
          findMany: {
            args: Prisma.apm_page_visitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>[]
          }
          create: {
            args: Prisma.apm_page_visitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>
          }
          createMany: {
            args: Prisma.apm_page_visitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apm_page_visitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>[]
          }
          delete: {
            args: Prisma.apm_page_visitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>
          }
          update: {
            args: Prisma.apm_page_visitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>
          }
          deleteMany: {
            args: Prisma.apm_page_visitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apm_page_visitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apm_page_visitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>[]
          }
          upsert: {
            args: Prisma.apm_page_visitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_page_visitsPayload>
          }
          aggregate: {
            args: Prisma.Apm_page_visitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApm_page_visits>
          }
          groupBy: {
            args: Prisma.apm_page_visitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apm_page_visitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.apm_page_visitsCountArgs<ExtArgs>
            result: $Utils.Optional<Apm_page_visitsCountAggregateOutputType> | number
          }
        }
      }
      apm_request_timings: {
        payload: Prisma.$apm_request_timingsPayload<ExtArgs>
        fields: Prisma.apm_request_timingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apm_request_timingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apm_request_timingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>
          }
          findFirst: {
            args: Prisma.apm_request_timingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apm_request_timingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>
          }
          findMany: {
            args: Prisma.apm_request_timingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>[]
          }
          create: {
            args: Prisma.apm_request_timingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>
          }
          createMany: {
            args: Prisma.apm_request_timingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apm_request_timingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>[]
          }
          delete: {
            args: Prisma.apm_request_timingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>
          }
          update: {
            args: Prisma.apm_request_timingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>
          }
          deleteMany: {
            args: Prisma.apm_request_timingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apm_request_timingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apm_request_timingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>[]
          }
          upsert: {
            args: Prisma.apm_request_timingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_request_timingsPayload>
          }
          aggregate: {
            args: Prisma.Apm_request_timingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApm_request_timings>
          }
          groupBy: {
            args: Prisma.apm_request_timingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apm_request_timingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.apm_request_timingsCountArgs<ExtArgs>
            result: $Utils.Optional<Apm_request_timingsCountAggregateOutputType> | number
          }
        }
      }
      apm_site_clicks: {
        payload: Prisma.$apm_site_clicksPayload<ExtArgs>
        fields: Prisma.apm_site_clicksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apm_site_clicksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apm_site_clicksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>
          }
          findFirst: {
            args: Prisma.apm_site_clicksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apm_site_clicksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>
          }
          findMany: {
            args: Prisma.apm_site_clicksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>[]
          }
          create: {
            args: Prisma.apm_site_clicksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>
          }
          createMany: {
            args: Prisma.apm_site_clicksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apm_site_clicksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>[]
          }
          delete: {
            args: Prisma.apm_site_clicksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>
          }
          update: {
            args: Prisma.apm_site_clicksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>
          }
          deleteMany: {
            args: Prisma.apm_site_clicksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apm_site_clicksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apm_site_clicksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>[]
          }
          upsert: {
            args: Prisma.apm_site_clicksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_site_clicksPayload>
          }
          aggregate: {
            args: Prisma.Apm_site_clicksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApm_site_clicks>
          }
          groupBy: {
            args: Prisma.apm_site_clicksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apm_site_clicksGroupByOutputType>[]
          }
          count: {
            args: Prisma.apm_site_clicksCountArgs<ExtArgs>
            result: $Utils.Optional<Apm_site_clicksCountAggregateOutputType> | number
          }
        }
      }
      apm_system_metrics: {
        payload: Prisma.$apm_system_metricsPayload<ExtArgs>
        fields: Prisma.apm_system_metricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apm_system_metricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apm_system_metricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>
          }
          findFirst: {
            args: Prisma.apm_system_metricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apm_system_metricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>
          }
          findMany: {
            args: Prisma.apm_system_metricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>[]
          }
          create: {
            args: Prisma.apm_system_metricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>
          }
          createMany: {
            args: Prisma.apm_system_metricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apm_system_metricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>[]
          }
          delete: {
            args: Prisma.apm_system_metricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>
          }
          update: {
            args: Prisma.apm_system_metricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>
          }
          deleteMany: {
            args: Prisma.apm_system_metricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apm_system_metricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apm_system_metricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>[]
          }
          upsert: {
            args: Prisma.apm_system_metricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_system_metricsPayload>
          }
          aggregate: {
            args: Prisma.Apm_system_metricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApm_system_metrics>
          }
          groupBy: {
            args: Prisma.apm_system_metricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apm_system_metricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.apm_system_metricsCountArgs<ExtArgs>
            result: $Utils.Optional<Apm_system_metricsCountAggregateOutputType> | number
          }
        }
      }
      apm_youtube_clicks: {
        payload: Prisma.$apm_youtube_clicksPayload<ExtArgs>
        fields: Prisma.apm_youtube_clicksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apm_youtube_clicksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apm_youtube_clicksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>
          }
          findFirst: {
            args: Prisma.apm_youtube_clicksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apm_youtube_clicksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>
          }
          findMany: {
            args: Prisma.apm_youtube_clicksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>[]
          }
          create: {
            args: Prisma.apm_youtube_clicksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>
          }
          createMany: {
            args: Prisma.apm_youtube_clicksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apm_youtube_clicksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>[]
          }
          delete: {
            args: Prisma.apm_youtube_clicksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>
          }
          update: {
            args: Prisma.apm_youtube_clicksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>
          }
          deleteMany: {
            args: Prisma.apm_youtube_clicksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apm_youtube_clicksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apm_youtube_clicksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>[]
          }
          upsert: {
            args: Prisma.apm_youtube_clicksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apm_youtube_clicksPayload>
          }
          aggregate: {
            args: Prisma.Apm_youtube_clicksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApm_youtube_clicks>
          }
          groupBy: {
            args: Prisma.apm_youtube_clicksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Apm_youtube_clicksGroupByOutputType>[]
          }
          count: {
            args: Prisma.apm_youtube_clicksCountArgs<ExtArgs>
            result: $Utils.Optional<Apm_youtube_clicksCountAggregateOutputType> | number
          }
        }
      }
      loa_ark_grid: {
        payload: Prisma.$loa_ark_gridPayload<ExtArgs>
        fields: Prisma.loa_ark_gridFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loa_ark_gridFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loa_ark_gridFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>
          }
          findFirst: {
            args: Prisma.loa_ark_gridFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loa_ark_gridFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>
          }
          findMany: {
            args: Prisma.loa_ark_gridFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>[]
          }
          create: {
            args: Prisma.loa_ark_gridCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>
          }
          createMany: {
            args: Prisma.loa_ark_gridCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loa_ark_gridCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>[]
          }
          delete: {
            args: Prisma.loa_ark_gridDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>
          }
          update: {
            args: Prisma.loa_ark_gridUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>
          }
          deleteMany: {
            args: Prisma.loa_ark_gridDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loa_ark_gridUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loa_ark_gridUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>[]
          }
          upsert: {
            args: Prisma.loa_ark_gridUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_ark_gridPayload>
          }
          aggregate: {
            args: Prisma.Loa_ark_gridAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoa_ark_grid>
          }
          groupBy: {
            args: Prisma.loa_ark_gridGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loa_ark_gridGroupByOutputType>[]
          }
          count: {
            args: Prisma.loa_ark_gridCountArgs<ExtArgs>
            result: $Utils.Optional<Loa_ark_gridCountAggregateOutputType> | number
          }
        }
      }
      loa_class: {
        payload: Prisma.$loa_classPayload<ExtArgs>
        fields: Prisma.loa_classFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loa_classFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loa_classFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>
          }
          findFirst: {
            args: Prisma.loa_classFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loa_classFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>
          }
          findMany: {
            args: Prisma.loa_classFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>[]
          }
          create: {
            args: Prisma.loa_classCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>
          }
          createMany: {
            args: Prisma.loa_classCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loa_classCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>[]
          }
          delete: {
            args: Prisma.loa_classDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>
          }
          update: {
            args: Prisma.loa_classUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>
          }
          deleteMany: {
            args: Prisma.loa_classDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loa_classUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loa_classUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>[]
          }
          upsert: {
            args: Prisma.loa_classUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_classPayload>
          }
          aggregate: {
            args: Prisma.Loa_classAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoa_class>
          }
          groupBy: {
            args: Prisma.loa_classGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loa_classGroupByOutputType>[]
          }
          count: {
            args: Prisma.loa_classCountArgs<ExtArgs>
            result: $Utils.Optional<Loa_classCountAggregateOutputType> | number
          }
        }
      }
      loa_class_summaries: {
        payload: Prisma.$loa_class_summariesPayload<ExtArgs>
        fields: Prisma.loa_class_summariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loa_class_summariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loa_class_summariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>
          }
          findFirst: {
            args: Prisma.loa_class_summariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loa_class_summariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>
          }
          findMany: {
            args: Prisma.loa_class_summariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>[]
          }
          create: {
            args: Prisma.loa_class_summariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>
          }
          createMany: {
            args: Prisma.loa_class_summariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loa_class_summariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>[]
          }
          delete: {
            args: Prisma.loa_class_summariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>
          }
          update: {
            args: Prisma.loa_class_summariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>
          }
          deleteMany: {
            args: Prisma.loa_class_summariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loa_class_summariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loa_class_summariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>[]
          }
          upsert: {
            args: Prisma.loa_class_summariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_class_summariesPayload>
          }
          aggregate: {
            args: Prisma.Loa_class_summariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoa_class_summaries>
          }
          groupBy: {
            args: Prisma.loa_class_summariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loa_class_summariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.loa_class_summariesCountArgs<ExtArgs>
            result: $Utils.Optional<Loa_class_summariesCountAggregateOutputType> | number
          }
        }
      }
      loa_sites: {
        payload: Prisma.$loa_sitesPayload<ExtArgs>
        fields: Prisma.loa_sitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loa_sitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loa_sitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>
          }
          findFirst: {
            args: Prisma.loa_sitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loa_sitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>
          }
          findMany: {
            args: Prisma.loa_sitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>[]
          }
          create: {
            args: Prisma.loa_sitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>
          }
          createMany: {
            args: Prisma.loa_sitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loa_sitesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>[]
          }
          delete: {
            args: Prisma.loa_sitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>
          }
          update: {
            args: Prisma.loa_sitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>
          }
          deleteMany: {
            args: Prisma.loa_sitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loa_sitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loa_sitesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>[]
          }
          upsert: {
            args: Prisma.loa_sitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_sitesPayload>
          }
          aggregate: {
            args: Prisma.Loa_sitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoa_sites>
          }
          groupBy: {
            args: Prisma.loa_sitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loa_sitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.loa_sitesCountArgs<ExtArgs>
            result: $Utils.Optional<Loa_sitesCountAggregateOutputType> | number
          }
        }
      }
      loa_users: {
        payload: Prisma.$loa_usersPayload<ExtArgs>
        fields: Prisma.loa_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loa_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loa_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>
          }
          findFirst: {
            args: Prisma.loa_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loa_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>
          }
          findMany: {
            args: Prisma.loa_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>[]
          }
          create: {
            args: Prisma.loa_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>
          }
          createMany: {
            args: Prisma.loa_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loa_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>[]
          }
          delete: {
            args: Prisma.loa_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>
          }
          update: {
            args: Prisma.loa_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>
          }
          deleteMany: {
            args: Prisma.loa_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loa_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.loa_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>[]
          }
          upsert: {
            args: Prisma.loa_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loa_usersPayload>
          }
          aggregate: {
            args: Prisma.Loa_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoa_users>
          }
          groupBy: {
            args: Prisma.loa_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Loa_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.loa_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Loa_usersCountAggregateOutputType> | number
          }
        }
      }
      monitoring_api_probes: {
        payload: Prisma.$monitoring_api_probesPayload<ExtArgs>
        fields: Prisma.monitoring_api_probesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monitoring_api_probesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monitoring_api_probesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>
          }
          findFirst: {
            args: Prisma.monitoring_api_probesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monitoring_api_probesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>
          }
          findMany: {
            args: Prisma.monitoring_api_probesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>[]
          }
          create: {
            args: Prisma.monitoring_api_probesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>
          }
          createMany: {
            args: Prisma.monitoring_api_probesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.monitoring_api_probesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>[]
          }
          delete: {
            args: Prisma.monitoring_api_probesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>
          }
          update: {
            args: Prisma.monitoring_api_probesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>
          }
          deleteMany: {
            args: Prisma.monitoring_api_probesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monitoring_api_probesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.monitoring_api_probesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>[]
          }
          upsert: {
            args: Prisma.monitoring_api_probesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_api_probesPayload>
          }
          aggregate: {
            args: Prisma.Monitoring_api_probesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoring_api_probes>
          }
          groupBy: {
            args: Prisma.monitoring_api_probesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Monitoring_api_probesGroupByOutputType>[]
          }
          count: {
            args: Prisma.monitoring_api_probesCountArgs<ExtArgs>
            result: $Utils.Optional<Monitoring_api_probesCountAggregateOutputType> | number
          }
        }
      }
      youtube_view_snapshots: {
        payload: Prisma.$youtube_view_snapshotsPayload<ExtArgs>
        fields: Prisma.youtube_view_snapshotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.youtube_view_snapshotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.youtube_view_snapshotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>
          }
          findFirst: {
            args: Prisma.youtube_view_snapshotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.youtube_view_snapshotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>
          }
          findMany: {
            args: Prisma.youtube_view_snapshotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>[]
          }
          create: {
            args: Prisma.youtube_view_snapshotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>
          }
          createMany: {
            args: Prisma.youtube_view_snapshotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.youtube_view_snapshotsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>[]
          }
          delete: {
            args: Prisma.youtube_view_snapshotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>
          }
          update: {
            args: Prisma.youtube_view_snapshotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>
          }
          deleteMany: {
            args: Prisma.youtube_view_snapshotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.youtube_view_snapshotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.youtube_view_snapshotsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>[]
          }
          upsert: {
            args: Prisma.youtube_view_snapshotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_view_snapshotsPayload>
          }
          aggregate: {
            args: Prisma.Youtube_view_snapshotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYoutube_view_snapshots>
          }
          groupBy: {
            args: Prisma.youtube_view_snapshotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Youtube_view_snapshotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.youtube_view_snapshotsCountArgs<ExtArgs>
            result: $Utils.Optional<Youtube_view_snapshotsCountAggregateOutputType> | number
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
    admin_users?: admin_usersOmit
    apm_page_visits?: apm_page_visitsOmit
    apm_request_timings?: apm_request_timingsOmit
    apm_site_clicks?: apm_site_clicksOmit
    apm_system_metrics?: apm_system_metricsOmit
    apm_youtube_clicks?: apm_youtube_clicksOmit
    loa_ark_grid?: loa_ark_gridOmit
    loa_class?: loa_classOmit
    loa_class_summaries?: loa_class_summariesOmit
    loa_sites?: loa_sitesOmit
    loa_users?: loa_usersOmit
    monitoring_api_probes?: monitoring_api_probesOmit
    youtube_view_snapshots?: youtube_view_snapshotsOmit
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
   * Count Type Loa_ark_gridCountOutputType
   */

  export type Loa_ark_gridCountOutputType = {
    loa_users_loa_users_core_moonToloa_ark_grid: number
    loa_users_loa_users_core_starToloa_ark_grid: number
    loa_users_loa_users_core_sunToloa_ark_grid: number
  }

  export type Loa_ark_gridCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_users_loa_users_core_moonToloa_ark_grid?: boolean | Loa_ark_gridCountOutputTypeCountLoa_users_loa_users_core_moonToloa_ark_gridArgs
    loa_users_loa_users_core_starToloa_ark_grid?: boolean | Loa_ark_gridCountOutputTypeCountLoa_users_loa_users_core_starToloa_ark_gridArgs
    loa_users_loa_users_core_sunToloa_ark_grid?: boolean | Loa_ark_gridCountOutputTypeCountLoa_users_loa_users_core_sunToloa_ark_gridArgs
  }

  // Custom InputTypes
  /**
   * Loa_ark_gridCountOutputType without action
   */
  export type Loa_ark_gridCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loa_ark_gridCountOutputType
     */
    select?: Loa_ark_gridCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Loa_ark_gridCountOutputType without action
   */
  export type Loa_ark_gridCountOutputTypeCountLoa_users_loa_users_core_moonToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_usersWhereInput
  }

  /**
   * Loa_ark_gridCountOutputType without action
   */
  export type Loa_ark_gridCountOutputTypeCountLoa_users_loa_users_core_starToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_usersWhereInput
  }

  /**
   * Loa_ark_gridCountOutputType without action
   */
  export type Loa_ark_gridCountOutputTypeCountLoa_users_loa_users_core_sunToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_usersWhereInput
  }


  /**
   * Count Type Loa_classCountOutputType
   */

  export type Loa_classCountOutputType = {
    loa_ark_grid: number
    loa_users: number
  }

  export type Loa_classCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_ark_grid?: boolean | Loa_classCountOutputTypeCountLoa_ark_gridArgs
    loa_users?: boolean | Loa_classCountOutputTypeCountLoa_usersArgs
  }

  // Custom InputTypes
  /**
   * Loa_classCountOutputType without action
   */
  export type Loa_classCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loa_classCountOutputType
     */
    select?: Loa_classCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Loa_classCountOutputType without action
   */
  export type Loa_classCountOutputTypeCountLoa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_ark_gridWhereInput
  }

  /**
   * Loa_classCountOutputType without action
   */
  export type Loa_classCountOutputTypeCountLoa_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin_users
   */

  export type AggregateAdmin_users = {
    _count: Admin_usersCountAggregateOutputType | null
    _avg: Admin_usersAvgAggregateOutputType | null
    _sum: Admin_usersSumAggregateOutputType | null
    _min: Admin_usersMinAggregateOutputType | null
    _max: Admin_usersMaxAggregateOutputType | null
  }

  export type Admin_usersAvgAggregateOutputType = {
    id: number | null
  }

  export type Admin_usersSumAggregateOutputType = {
    id: bigint | null
  }

  export type Admin_usersMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
  }

  export type Admin_usersMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
  }

  export type Admin_usersCountAggregateOutputType = {
    id: number
    username: number
    password_hash: number
    role: number
    created_at: number
    _all: number
  }


  export type Admin_usersAvgAggregateInputType = {
    id?: true
  }

  export type Admin_usersSumAggregateInputType = {
    id?: true
  }

  export type Admin_usersMinAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type Admin_usersMaxAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type Admin_usersCountAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type Admin_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_users to aggregate.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admin_users
    **/
    _count?: true | Admin_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_usersMaxAggregateInputType
  }

  export type GetAdmin_usersAggregateType<T extends Admin_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_users[P]>
      : GetScalarType<T[P], AggregateAdmin_users[P]>
  }




  export type admin_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: admin_usersWhereInput
    orderBy?: admin_usersOrderByWithAggregationInput | admin_usersOrderByWithAggregationInput[]
    by: Admin_usersScalarFieldEnum[] | Admin_usersScalarFieldEnum
    having?: admin_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_usersCountAggregateInputType | true
    _avg?: Admin_usersAvgAggregateInputType
    _sum?: Admin_usersSumAggregateInputType
    _min?: Admin_usersMinAggregateInputType
    _max?: Admin_usersMaxAggregateInputType
  }

  export type Admin_usersGroupByOutputType = {
    id: bigint
    username: string
    password_hash: string
    role: string
    created_at: Date
    _count: Admin_usersCountAggregateOutputType | null
    _avg: Admin_usersAvgAggregateOutputType | null
    _sum: Admin_usersSumAggregateOutputType | null
    _min: Admin_usersMinAggregateOutputType | null
    _max: Admin_usersMaxAggregateOutputType | null
  }

  type GetAdmin_usersGroupByPayload<T extends admin_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_usersGroupByOutputType[P]>
        }
      >
    >


  export type admin_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin_users"]>

  export type admin_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin_users"]>

  export type admin_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin_users"]>

  export type admin_usersSelectScalar = {
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type admin_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password_hash" | "role" | "created_at", ExtArgs["result"]["admin_users"]>

  export type $admin_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin_users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string
      password_hash: string
      role: string
      created_at: Date
    }, ExtArgs["result"]["admin_users"]>
    composites: {}
  }

  type admin_usersGetPayload<S extends boolean | null | undefined | admin_usersDefaultArgs> = $Result.GetResult<Prisma.$admin_usersPayload, S>

  type admin_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<admin_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_usersCountAggregateInputType | true
    }

  export interface admin_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin_users'], meta: { name: 'admin_users' } }
    /**
     * Find zero or one Admin_users that matches the filter.
     * @param {admin_usersFindUniqueArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends admin_usersFindUniqueArgs>(args: SelectSubset<T, admin_usersFindUniqueArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {admin_usersFindUniqueOrThrowArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends admin_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, admin_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersFindFirstArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends admin_usersFindFirstArgs>(args?: SelectSubset<T, admin_usersFindFirstArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersFindFirstOrThrowArgs} args - Arguments to find a Admin_users
     * @example
     * // Get one Admin_users
     * const admin_users = await prisma.admin_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends admin_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, admin_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_users
     * const admin_users = await prisma.admin_users.findMany()
     * 
     * // Get first 10 Admin_users
     * const admin_users = await prisma.admin_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_usersWithIdOnly = await prisma.admin_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends admin_usersFindManyArgs>(args?: SelectSubset<T, admin_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_users.
     * @param {admin_usersCreateArgs} args - Arguments to create a Admin_users.
     * @example
     * // Create one Admin_users
     * const Admin_users = await prisma.admin_users.create({
     *   data: {
     *     // ... data to create a Admin_users
     *   }
     * })
     * 
     */
    create<T extends admin_usersCreateArgs>(args: SelectSubset<T, admin_usersCreateArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_users.
     * @param {admin_usersCreateManyArgs} args - Arguments to create many Admin_users.
     * @example
     * // Create many Admin_users
     * const admin_users = await prisma.admin_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends admin_usersCreateManyArgs>(args?: SelectSubset<T, admin_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admin_users and returns the data saved in the database.
     * @param {admin_usersCreateManyAndReturnArgs} args - Arguments to create many Admin_users.
     * @example
     * // Create many Admin_users
     * const admin_users = await prisma.admin_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admin_users and only return the `id`
     * const admin_usersWithIdOnly = await prisma.admin_users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends admin_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, admin_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin_users.
     * @param {admin_usersDeleteArgs} args - Arguments to delete one Admin_users.
     * @example
     * // Delete one Admin_users
     * const Admin_users = await prisma.admin_users.delete({
     *   where: {
     *     // ... filter to delete one Admin_users
     *   }
     * })
     * 
     */
    delete<T extends admin_usersDeleteArgs>(args: SelectSubset<T, admin_usersDeleteArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_users.
     * @param {admin_usersUpdateArgs} args - Arguments to update one Admin_users.
     * @example
     * // Update one Admin_users
     * const admin_users = await prisma.admin_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends admin_usersUpdateArgs>(args: SelectSubset<T, admin_usersUpdateArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_users.
     * @param {admin_usersDeleteManyArgs} args - Arguments to filter Admin_users to delete.
     * @example
     * // Delete a few Admin_users
     * const { count } = await prisma.admin_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends admin_usersDeleteManyArgs>(args?: SelectSubset<T, admin_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_users
     * const admin_users = await prisma.admin_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends admin_usersUpdateManyArgs>(args: SelectSubset<T, admin_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_users and returns the data updated in the database.
     * @param {admin_usersUpdateManyAndReturnArgs} args - Arguments to update many Admin_users.
     * @example
     * // Update many Admin_users
     * const admin_users = await prisma.admin_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admin_users and only return the `id`
     * const admin_usersWithIdOnly = await prisma.admin_users.updateManyAndReturn({
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
    updateManyAndReturn<T extends admin_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, admin_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin_users.
     * @param {admin_usersUpsertArgs} args - Arguments to update or create a Admin_users.
     * @example
     * // Update or create a Admin_users
     * const admin_users = await prisma.admin_users.upsert({
     *   create: {
     *     // ... data to create a Admin_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_users we want to update
     *   }
     * })
     */
    upsert<T extends admin_usersUpsertArgs>(args: SelectSubset<T, admin_usersUpsertArgs<ExtArgs>>): Prisma__admin_usersClient<$Result.GetResult<Prisma.$admin_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersCountArgs} args - Arguments to filter Admin_users to count.
     * @example
     * // Count the number of Admin_users
     * const count = await prisma.admin_users.count({
     *   where: {
     *     // ... the filter for the Admin_users we want to count
     *   }
     * })
    **/
    count<T extends admin_usersCountArgs>(
      args?: Subset<T, admin_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_usersAggregateArgs>(args: Subset<T, Admin_usersAggregateArgs>): Prisma.PrismaPromise<GetAdmin_usersAggregateType<T>>

    /**
     * Group by Admin_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_usersGroupByArgs} args - Group by arguments.
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
      T extends admin_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_usersGroupByArgs['orderBy'] }
        : { orderBy?: admin_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, admin_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin_users model
   */
  readonly fields: admin_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__admin_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin_users model
   */
  interface admin_usersFieldRefs {
    readonly id: FieldRef<"admin_users", 'BigInt'>
    readonly username: FieldRef<"admin_users", 'String'>
    readonly password_hash: FieldRef<"admin_users", 'String'>
    readonly role: FieldRef<"admin_users", 'String'>
    readonly created_at: FieldRef<"admin_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin_users findUnique
   */
  export type admin_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users findUniqueOrThrow
   */
  export type admin_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users findFirst
   */
  export type admin_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Admin_usersScalarFieldEnum | Admin_usersScalarFieldEnum[]
  }

  /**
   * admin_users findFirstOrThrow
   */
  export type admin_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admin_users.
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admin_users.
     */
    distinct?: Admin_usersScalarFieldEnum | Admin_usersScalarFieldEnum[]
  }

  /**
   * admin_users findMany
   */
  export type admin_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Filter, which admin_users to fetch.
     */
    where?: admin_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admin_users to fetch.
     */
    orderBy?: admin_usersOrderByWithRelationInput | admin_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admin_users.
     */
    cursor?: admin_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admin_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admin_users.
     */
    skip?: number
    distinct?: Admin_usersScalarFieldEnum | Admin_usersScalarFieldEnum[]
  }

  /**
   * admin_users create
   */
  export type admin_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The data needed to create a admin_users.
     */
    data: XOR<admin_usersCreateInput, admin_usersUncheckedCreateInput>
  }

  /**
   * admin_users createMany
   */
  export type admin_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admin_users.
     */
    data: admin_usersCreateManyInput | admin_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_users createManyAndReturn
   */
  export type admin_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The data used to create many admin_users.
     */
    data: admin_usersCreateManyInput | admin_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin_users update
   */
  export type admin_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The data needed to update a admin_users.
     */
    data: XOR<admin_usersUpdateInput, admin_usersUncheckedUpdateInput>
    /**
     * Choose, which admin_users to update.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users updateMany
   */
  export type admin_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admin_users.
     */
    data: XOR<admin_usersUpdateManyMutationInput, admin_usersUncheckedUpdateManyInput>
    /**
     * Filter which admin_users to update
     */
    where?: admin_usersWhereInput
    /**
     * Limit how many admin_users to update.
     */
    limit?: number
  }

  /**
   * admin_users updateManyAndReturn
   */
  export type admin_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The data used to update admin_users.
     */
    data: XOR<admin_usersUpdateManyMutationInput, admin_usersUncheckedUpdateManyInput>
    /**
     * Filter which admin_users to update
     */
    where?: admin_usersWhereInput
    /**
     * Limit how many admin_users to update.
     */
    limit?: number
  }

  /**
   * admin_users upsert
   */
  export type admin_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * The filter to search for the admin_users to update in case it exists.
     */
    where: admin_usersWhereUniqueInput
    /**
     * In case the admin_users found by the `where` argument doesn't exist, create a new admin_users with this data.
     */
    create: XOR<admin_usersCreateInput, admin_usersUncheckedCreateInput>
    /**
     * In case the admin_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<admin_usersUpdateInput, admin_usersUncheckedUpdateInput>
  }

  /**
   * admin_users delete
   */
  export type admin_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
    /**
     * Filter which admin_users to delete.
     */
    where: admin_usersWhereUniqueInput
  }

  /**
   * admin_users deleteMany
   */
  export type admin_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin_users to delete
     */
    where?: admin_usersWhereInput
    /**
     * Limit how many admin_users to delete.
     */
    limit?: number
  }

  /**
   * admin_users without action
   */
  export type admin_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin_users
     */
    select?: admin_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin_users
     */
    omit?: admin_usersOmit<ExtArgs> | null
  }


  /**
   * Model apm_page_visits
   */

  export type AggregateApm_page_visits = {
    _count: Apm_page_visitsCountAggregateOutputType | null
    _avg: Apm_page_visitsAvgAggregateOutputType | null
    _sum: Apm_page_visitsSumAggregateOutputType | null
    _min: Apm_page_visitsMinAggregateOutputType | null
    _max: Apm_page_visitsMaxAggregateOutputType | null
  }

  export type Apm_page_visitsAvgAggregateOutputType = {
    id: number | null
    visits: number | null
  }

  export type Apm_page_visitsSumAggregateOutputType = {
    id: bigint | null
    visits: number | null
  }

  export type Apm_page_visitsMinAggregateOutputType = {
    id: bigint | null
    path: string | null
    device_type: string | null
    user_agent: string | null
    referrer: string | null
    visits: number | null
    last_seen_at: Date | null
    created_at: Date | null
    country_code: string | null
    os_name: string | null
    browser_name: string | null
  }

  export type Apm_page_visitsMaxAggregateOutputType = {
    id: bigint | null
    path: string | null
    device_type: string | null
    user_agent: string | null
    referrer: string | null
    visits: number | null
    last_seen_at: Date | null
    created_at: Date | null
    country_code: string | null
    os_name: string | null
    browser_name: string | null
  }

  export type Apm_page_visitsCountAggregateOutputType = {
    id: number
    path: number
    device_type: number
    user_agent: number
    referrer: number
    visits: number
    last_seen_at: number
    created_at: number
    country_code: number
    os_name: number
    browser_name: number
    _all: number
  }


  export type Apm_page_visitsAvgAggregateInputType = {
    id?: true
    visits?: true
  }

  export type Apm_page_visitsSumAggregateInputType = {
    id?: true
    visits?: true
  }

  export type Apm_page_visitsMinAggregateInputType = {
    id?: true
    path?: true
    device_type?: true
    user_agent?: true
    referrer?: true
    visits?: true
    last_seen_at?: true
    created_at?: true
    country_code?: true
    os_name?: true
    browser_name?: true
  }

  export type Apm_page_visitsMaxAggregateInputType = {
    id?: true
    path?: true
    device_type?: true
    user_agent?: true
    referrer?: true
    visits?: true
    last_seen_at?: true
    created_at?: true
    country_code?: true
    os_name?: true
    browser_name?: true
  }

  export type Apm_page_visitsCountAggregateInputType = {
    id?: true
    path?: true
    device_type?: true
    user_agent?: true
    referrer?: true
    visits?: true
    last_seen_at?: true
    created_at?: true
    country_code?: true
    os_name?: true
    browser_name?: true
    _all?: true
  }

  export type Apm_page_visitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_page_visits to aggregate.
     */
    where?: apm_page_visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_page_visits to fetch.
     */
    orderBy?: apm_page_visitsOrderByWithRelationInput | apm_page_visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apm_page_visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_page_visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_page_visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apm_page_visits
    **/
    _count?: true | Apm_page_visitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apm_page_visitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apm_page_visitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apm_page_visitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apm_page_visitsMaxAggregateInputType
  }

  export type GetApm_page_visitsAggregateType<T extends Apm_page_visitsAggregateArgs> = {
        [P in keyof T & keyof AggregateApm_page_visits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApm_page_visits[P]>
      : GetScalarType<T[P], AggregateApm_page_visits[P]>
  }




  export type apm_page_visitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apm_page_visitsWhereInput
    orderBy?: apm_page_visitsOrderByWithAggregationInput | apm_page_visitsOrderByWithAggregationInput[]
    by: Apm_page_visitsScalarFieldEnum[] | Apm_page_visitsScalarFieldEnum
    having?: apm_page_visitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apm_page_visitsCountAggregateInputType | true
    _avg?: Apm_page_visitsAvgAggregateInputType
    _sum?: Apm_page_visitsSumAggregateInputType
    _min?: Apm_page_visitsMinAggregateInputType
    _max?: Apm_page_visitsMaxAggregateInputType
  }

  export type Apm_page_visitsGroupByOutputType = {
    id: bigint
    path: string
    device_type: string
    user_agent: string
    referrer: string | null
    visits: number
    last_seen_at: Date
    created_at: Date
    country_code: string
    os_name: string
    browser_name: string
    _count: Apm_page_visitsCountAggregateOutputType | null
    _avg: Apm_page_visitsAvgAggregateOutputType | null
    _sum: Apm_page_visitsSumAggregateOutputType | null
    _min: Apm_page_visitsMinAggregateOutputType | null
    _max: Apm_page_visitsMaxAggregateOutputType | null
  }

  type GetApm_page_visitsGroupByPayload<T extends apm_page_visitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apm_page_visitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apm_page_visitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apm_page_visitsGroupByOutputType[P]>
            : GetScalarType<T[P], Apm_page_visitsGroupByOutputType[P]>
        }
      >
    >


  export type apm_page_visitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    device_type?: boolean
    user_agent?: boolean
    referrer?: boolean
    visits?: boolean
    last_seen_at?: boolean
    created_at?: boolean
    country_code?: boolean
    os_name?: boolean
    browser_name?: boolean
  }, ExtArgs["result"]["apm_page_visits"]>

  export type apm_page_visitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    device_type?: boolean
    user_agent?: boolean
    referrer?: boolean
    visits?: boolean
    last_seen_at?: boolean
    created_at?: boolean
    country_code?: boolean
    os_name?: boolean
    browser_name?: boolean
  }, ExtArgs["result"]["apm_page_visits"]>

  export type apm_page_visitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    device_type?: boolean
    user_agent?: boolean
    referrer?: boolean
    visits?: boolean
    last_seen_at?: boolean
    created_at?: boolean
    country_code?: boolean
    os_name?: boolean
    browser_name?: boolean
  }, ExtArgs["result"]["apm_page_visits"]>

  export type apm_page_visitsSelectScalar = {
    id?: boolean
    path?: boolean
    device_type?: boolean
    user_agent?: boolean
    referrer?: boolean
    visits?: boolean
    last_seen_at?: boolean
    created_at?: boolean
    country_code?: boolean
    os_name?: boolean
    browser_name?: boolean
  }

  export type apm_page_visitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "device_type" | "user_agent" | "referrer" | "visits" | "last_seen_at" | "created_at" | "country_code" | "os_name" | "browser_name", ExtArgs["result"]["apm_page_visits"]>

  export type $apm_page_visitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apm_page_visits"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      path: string
      device_type: string
      user_agent: string
      referrer: string | null
      visits: number
      last_seen_at: Date
      created_at: Date
      country_code: string
      os_name: string
      browser_name: string
    }, ExtArgs["result"]["apm_page_visits"]>
    composites: {}
  }

  type apm_page_visitsGetPayload<S extends boolean | null | undefined | apm_page_visitsDefaultArgs> = $Result.GetResult<Prisma.$apm_page_visitsPayload, S>

  type apm_page_visitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apm_page_visitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Apm_page_visitsCountAggregateInputType | true
    }

  export interface apm_page_visitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apm_page_visits'], meta: { name: 'apm_page_visits' } }
    /**
     * Find zero or one Apm_page_visits that matches the filter.
     * @param {apm_page_visitsFindUniqueArgs} args - Arguments to find a Apm_page_visits
     * @example
     * // Get one Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apm_page_visitsFindUniqueArgs>(args: SelectSubset<T, apm_page_visitsFindUniqueArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apm_page_visits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apm_page_visitsFindUniqueOrThrowArgs} args - Arguments to find a Apm_page_visits
     * @example
     * // Get one Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apm_page_visitsFindUniqueOrThrowArgs>(args: SelectSubset<T, apm_page_visitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_page_visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_page_visitsFindFirstArgs} args - Arguments to find a Apm_page_visits
     * @example
     * // Get one Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apm_page_visitsFindFirstArgs>(args?: SelectSubset<T, apm_page_visitsFindFirstArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_page_visits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_page_visitsFindFirstOrThrowArgs} args - Arguments to find a Apm_page_visits
     * @example
     * // Get one Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apm_page_visitsFindFirstOrThrowArgs>(args?: SelectSubset<T, apm_page_visitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apm_page_visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_page_visitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.findMany()
     * 
     * // Get first 10 Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apm_page_visitsWithIdOnly = await prisma.apm_page_visits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apm_page_visitsFindManyArgs>(args?: SelectSubset<T, apm_page_visitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apm_page_visits.
     * @param {apm_page_visitsCreateArgs} args - Arguments to create a Apm_page_visits.
     * @example
     * // Create one Apm_page_visits
     * const Apm_page_visits = await prisma.apm_page_visits.create({
     *   data: {
     *     // ... data to create a Apm_page_visits
     *   }
     * })
     * 
     */
    create<T extends apm_page_visitsCreateArgs>(args: SelectSubset<T, apm_page_visitsCreateArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apm_page_visits.
     * @param {apm_page_visitsCreateManyArgs} args - Arguments to create many Apm_page_visits.
     * @example
     * // Create many Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apm_page_visitsCreateManyArgs>(args?: SelectSubset<T, apm_page_visitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apm_page_visits and returns the data saved in the database.
     * @param {apm_page_visitsCreateManyAndReturnArgs} args - Arguments to create many Apm_page_visits.
     * @example
     * // Create many Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apm_page_visits and only return the `id`
     * const apm_page_visitsWithIdOnly = await prisma.apm_page_visits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apm_page_visitsCreateManyAndReturnArgs>(args?: SelectSubset<T, apm_page_visitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apm_page_visits.
     * @param {apm_page_visitsDeleteArgs} args - Arguments to delete one Apm_page_visits.
     * @example
     * // Delete one Apm_page_visits
     * const Apm_page_visits = await prisma.apm_page_visits.delete({
     *   where: {
     *     // ... filter to delete one Apm_page_visits
     *   }
     * })
     * 
     */
    delete<T extends apm_page_visitsDeleteArgs>(args: SelectSubset<T, apm_page_visitsDeleteArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apm_page_visits.
     * @param {apm_page_visitsUpdateArgs} args - Arguments to update one Apm_page_visits.
     * @example
     * // Update one Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apm_page_visitsUpdateArgs>(args: SelectSubset<T, apm_page_visitsUpdateArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apm_page_visits.
     * @param {apm_page_visitsDeleteManyArgs} args - Arguments to filter Apm_page_visits to delete.
     * @example
     * // Delete a few Apm_page_visits
     * const { count } = await prisma.apm_page_visits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apm_page_visitsDeleteManyArgs>(args?: SelectSubset<T, apm_page_visitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_page_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_page_visitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apm_page_visitsUpdateManyArgs>(args: SelectSubset<T, apm_page_visitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_page_visits and returns the data updated in the database.
     * @param {apm_page_visitsUpdateManyAndReturnArgs} args - Arguments to update many Apm_page_visits.
     * @example
     * // Update many Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apm_page_visits and only return the `id`
     * const apm_page_visitsWithIdOnly = await prisma.apm_page_visits.updateManyAndReturn({
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
    updateManyAndReturn<T extends apm_page_visitsUpdateManyAndReturnArgs>(args: SelectSubset<T, apm_page_visitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apm_page_visits.
     * @param {apm_page_visitsUpsertArgs} args - Arguments to update or create a Apm_page_visits.
     * @example
     * // Update or create a Apm_page_visits
     * const apm_page_visits = await prisma.apm_page_visits.upsert({
     *   create: {
     *     // ... data to create a Apm_page_visits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apm_page_visits we want to update
     *   }
     * })
     */
    upsert<T extends apm_page_visitsUpsertArgs>(args: SelectSubset<T, apm_page_visitsUpsertArgs<ExtArgs>>): Prisma__apm_page_visitsClient<$Result.GetResult<Prisma.$apm_page_visitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apm_page_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_page_visitsCountArgs} args - Arguments to filter Apm_page_visits to count.
     * @example
     * // Count the number of Apm_page_visits
     * const count = await prisma.apm_page_visits.count({
     *   where: {
     *     // ... the filter for the Apm_page_visits we want to count
     *   }
     * })
    **/
    count<T extends apm_page_visitsCountArgs>(
      args?: Subset<T, apm_page_visitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apm_page_visitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apm_page_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apm_page_visitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apm_page_visitsAggregateArgs>(args: Subset<T, Apm_page_visitsAggregateArgs>): Prisma.PrismaPromise<GetApm_page_visitsAggregateType<T>>

    /**
     * Group by Apm_page_visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_page_visitsGroupByArgs} args - Group by arguments.
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
      T extends apm_page_visitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apm_page_visitsGroupByArgs['orderBy'] }
        : { orderBy?: apm_page_visitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apm_page_visitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApm_page_visitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apm_page_visits model
   */
  readonly fields: apm_page_visitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apm_page_visits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apm_page_visitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the apm_page_visits model
   */
  interface apm_page_visitsFieldRefs {
    readonly id: FieldRef<"apm_page_visits", 'BigInt'>
    readonly path: FieldRef<"apm_page_visits", 'String'>
    readonly device_type: FieldRef<"apm_page_visits", 'String'>
    readonly user_agent: FieldRef<"apm_page_visits", 'String'>
    readonly referrer: FieldRef<"apm_page_visits", 'String'>
    readonly visits: FieldRef<"apm_page_visits", 'Int'>
    readonly last_seen_at: FieldRef<"apm_page_visits", 'DateTime'>
    readonly created_at: FieldRef<"apm_page_visits", 'DateTime'>
    readonly country_code: FieldRef<"apm_page_visits", 'String'>
    readonly os_name: FieldRef<"apm_page_visits", 'String'>
    readonly browser_name: FieldRef<"apm_page_visits", 'String'>
  }
    

  // Custom InputTypes
  /**
   * apm_page_visits findUnique
   */
  export type apm_page_visitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * Filter, which apm_page_visits to fetch.
     */
    where: apm_page_visitsWhereUniqueInput
  }

  /**
   * apm_page_visits findUniqueOrThrow
   */
  export type apm_page_visitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * Filter, which apm_page_visits to fetch.
     */
    where: apm_page_visitsWhereUniqueInput
  }

  /**
   * apm_page_visits findFirst
   */
  export type apm_page_visitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * Filter, which apm_page_visits to fetch.
     */
    where?: apm_page_visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_page_visits to fetch.
     */
    orderBy?: apm_page_visitsOrderByWithRelationInput | apm_page_visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_page_visits.
     */
    cursor?: apm_page_visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_page_visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_page_visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_page_visits.
     */
    distinct?: Apm_page_visitsScalarFieldEnum | Apm_page_visitsScalarFieldEnum[]
  }

  /**
   * apm_page_visits findFirstOrThrow
   */
  export type apm_page_visitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * Filter, which apm_page_visits to fetch.
     */
    where?: apm_page_visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_page_visits to fetch.
     */
    orderBy?: apm_page_visitsOrderByWithRelationInput | apm_page_visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_page_visits.
     */
    cursor?: apm_page_visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_page_visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_page_visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_page_visits.
     */
    distinct?: Apm_page_visitsScalarFieldEnum | Apm_page_visitsScalarFieldEnum[]
  }

  /**
   * apm_page_visits findMany
   */
  export type apm_page_visitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * Filter, which apm_page_visits to fetch.
     */
    where?: apm_page_visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_page_visits to fetch.
     */
    orderBy?: apm_page_visitsOrderByWithRelationInput | apm_page_visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apm_page_visits.
     */
    cursor?: apm_page_visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_page_visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_page_visits.
     */
    skip?: number
    distinct?: Apm_page_visitsScalarFieldEnum | Apm_page_visitsScalarFieldEnum[]
  }

  /**
   * apm_page_visits create
   */
  export type apm_page_visitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * The data needed to create a apm_page_visits.
     */
    data: XOR<apm_page_visitsCreateInput, apm_page_visitsUncheckedCreateInput>
  }

  /**
   * apm_page_visits createMany
   */
  export type apm_page_visitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apm_page_visits.
     */
    data: apm_page_visitsCreateManyInput | apm_page_visitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_page_visits createManyAndReturn
   */
  export type apm_page_visitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * The data used to create many apm_page_visits.
     */
    data: apm_page_visitsCreateManyInput | apm_page_visitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_page_visits update
   */
  export type apm_page_visitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * The data needed to update a apm_page_visits.
     */
    data: XOR<apm_page_visitsUpdateInput, apm_page_visitsUncheckedUpdateInput>
    /**
     * Choose, which apm_page_visits to update.
     */
    where: apm_page_visitsWhereUniqueInput
  }

  /**
   * apm_page_visits updateMany
   */
  export type apm_page_visitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apm_page_visits.
     */
    data: XOR<apm_page_visitsUpdateManyMutationInput, apm_page_visitsUncheckedUpdateManyInput>
    /**
     * Filter which apm_page_visits to update
     */
    where?: apm_page_visitsWhereInput
    /**
     * Limit how many apm_page_visits to update.
     */
    limit?: number
  }

  /**
   * apm_page_visits updateManyAndReturn
   */
  export type apm_page_visitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * The data used to update apm_page_visits.
     */
    data: XOR<apm_page_visitsUpdateManyMutationInput, apm_page_visitsUncheckedUpdateManyInput>
    /**
     * Filter which apm_page_visits to update
     */
    where?: apm_page_visitsWhereInput
    /**
     * Limit how many apm_page_visits to update.
     */
    limit?: number
  }

  /**
   * apm_page_visits upsert
   */
  export type apm_page_visitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * The filter to search for the apm_page_visits to update in case it exists.
     */
    where: apm_page_visitsWhereUniqueInput
    /**
     * In case the apm_page_visits found by the `where` argument doesn't exist, create a new apm_page_visits with this data.
     */
    create: XOR<apm_page_visitsCreateInput, apm_page_visitsUncheckedCreateInput>
    /**
     * In case the apm_page_visits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apm_page_visitsUpdateInput, apm_page_visitsUncheckedUpdateInput>
  }

  /**
   * apm_page_visits delete
   */
  export type apm_page_visitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
    /**
     * Filter which apm_page_visits to delete.
     */
    where: apm_page_visitsWhereUniqueInput
  }

  /**
   * apm_page_visits deleteMany
   */
  export type apm_page_visitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_page_visits to delete
     */
    where?: apm_page_visitsWhereInput
    /**
     * Limit how many apm_page_visits to delete.
     */
    limit?: number
  }

  /**
   * apm_page_visits without action
   */
  export type apm_page_visitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_page_visits
     */
    select?: apm_page_visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_page_visits
     */
    omit?: apm_page_visitsOmit<ExtArgs> | null
  }


  /**
   * Model apm_request_timings
   */

  export type AggregateApm_request_timings = {
    _count: Apm_request_timingsCountAggregateOutputType | null
    _avg: Apm_request_timingsAvgAggregateOutputType | null
    _sum: Apm_request_timingsSumAggregateOutputType | null
    _min: Apm_request_timingsMinAggregateOutputType | null
    _max: Apm_request_timingsMaxAggregateOutputType | null
  }

  export type Apm_request_timingsAvgAggregateOutputType = {
    id: number | null
    status_code: number | null
    duration_ms: number | null
  }

  export type Apm_request_timingsSumAggregateOutputType = {
    id: bigint | null
    status_code: number | null
    duration_ms: number | null
  }

  export type Apm_request_timingsMinAggregateOutputType = {
    id: bigint | null
    scope: string | null
    name: string | null
    path: string | null
    method: string | null
    status_code: number | null
    duration_ms: number | null
    created_at: Date | null
  }

  export type Apm_request_timingsMaxAggregateOutputType = {
    id: bigint | null
    scope: string | null
    name: string | null
    path: string | null
    method: string | null
    status_code: number | null
    duration_ms: number | null
    created_at: Date | null
  }

  export type Apm_request_timingsCountAggregateOutputType = {
    id: number
    scope: number
    name: number
    path: number
    method: number
    status_code: number
    duration_ms: number
    created_at: number
    _all: number
  }


  export type Apm_request_timingsAvgAggregateInputType = {
    id?: true
    status_code?: true
    duration_ms?: true
  }

  export type Apm_request_timingsSumAggregateInputType = {
    id?: true
    status_code?: true
    duration_ms?: true
  }

  export type Apm_request_timingsMinAggregateInputType = {
    id?: true
    scope?: true
    name?: true
    path?: true
    method?: true
    status_code?: true
    duration_ms?: true
    created_at?: true
  }

  export type Apm_request_timingsMaxAggregateInputType = {
    id?: true
    scope?: true
    name?: true
    path?: true
    method?: true
    status_code?: true
    duration_ms?: true
    created_at?: true
  }

  export type Apm_request_timingsCountAggregateInputType = {
    id?: true
    scope?: true
    name?: true
    path?: true
    method?: true
    status_code?: true
    duration_ms?: true
    created_at?: true
    _all?: true
  }

  export type Apm_request_timingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_request_timings to aggregate.
     */
    where?: apm_request_timingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_request_timings to fetch.
     */
    orderBy?: apm_request_timingsOrderByWithRelationInput | apm_request_timingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apm_request_timingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_request_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_request_timings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apm_request_timings
    **/
    _count?: true | Apm_request_timingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apm_request_timingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apm_request_timingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apm_request_timingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apm_request_timingsMaxAggregateInputType
  }

  export type GetApm_request_timingsAggregateType<T extends Apm_request_timingsAggregateArgs> = {
        [P in keyof T & keyof AggregateApm_request_timings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApm_request_timings[P]>
      : GetScalarType<T[P], AggregateApm_request_timings[P]>
  }




  export type apm_request_timingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apm_request_timingsWhereInput
    orderBy?: apm_request_timingsOrderByWithAggregationInput | apm_request_timingsOrderByWithAggregationInput[]
    by: Apm_request_timingsScalarFieldEnum[] | Apm_request_timingsScalarFieldEnum
    having?: apm_request_timingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apm_request_timingsCountAggregateInputType | true
    _avg?: Apm_request_timingsAvgAggregateInputType
    _sum?: Apm_request_timingsSumAggregateInputType
    _min?: Apm_request_timingsMinAggregateInputType
    _max?: Apm_request_timingsMaxAggregateInputType
  }

  export type Apm_request_timingsGroupByOutputType = {
    id: bigint
    scope: string
    name: string
    path: string | null
    method: string | null
    status_code: number | null
    duration_ms: number
    created_at: Date
    _count: Apm_request_timingsCountAggregateOutputType | null
    _avg: Apm_request_timingsAvgAggregateOutputType | null
    _sum: Apm_request_timingsSumAggregateOutputType | null
    _min: Apm_request_timingsMinAggregateOutputType | null
    _max: Apm_request_timingsMaxAggregateOutputType | null
  }

  type GetApm_request_timingsGroupByPayload<T extends apm_request_timingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apm_request_timingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apm_request_timingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apm_request_timingsGroupByOutputType[P]>
            : GetScalarType<T[P], Apm_request_timingsGroupByOutputType[P]>
        }
      >
    >


  export type apm_request_timingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    name?: boolean
    path?: boolean
    method?: boolean
    status_code?: boolean
    duration_ms?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_request_timings"]>

  export type apm_request_timingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    name?: boolean
    path?: boolean
    method?: boolean
    status_code?: boolean
    duration_ms?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_request_timings"]>

  export type apm_request_timingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    name?: boolean
    path?: boolean
    method?: boolean
    status_code?: boolean
    duration_ms?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_request_timings"]>

  export type apm_request_timingsSelectScalar = {
    id?: boolean
    scope?: boolean
    name?: boolean
    path?: boolean
    method?: boolean
    status_code?: boolean
    duration_ms?: boolean
    created_at?: boolean
  }

  export type apm_request_timingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scope" | "name" | "path" | "method" | "status_code" | "duration_ms" | "created_at", ExtArgs["result"]["apm_request_timings"]>

  export type $apm_request_timingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apm_request_timings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      scope: string
      name: string
      path: string | null
      method: string | null
      status_code: number | null
      duration_ms: number
      created_at: Date
    }, ExtArgs["result"]["apm_request_timings"]>
    composites: {}
  }

  type apm_request_timingsGetPayload<S extends boolean | null | undefined | apm_request_timingsDefaultArgs> = $Result.GetResult<Prisma.$apm_request_timingsPayload, S>

  type apm_request_timingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apm_request_timingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Apm_request_timingsCountAggregateInputType | true
    }

  export interface apm_request_timingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apm_request_timings'], meta: { name: 'apm_request_timings' } }
    /**
     * Find zero or one Apm_request_timings that matches the filter.
     * @param {apm_request_timingsFindUniqueArgs} args - Arguments to find a Apm_request_timings
     * @example
     * // Get one Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apm_request_timingsFindUniqueArgs>(args: SelectSubset<T, apm_request_timingsFindUniqueArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apm_request_timings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apm_request_timingsFindUniqueOrThrowArgs} args - Arguments to find a Apm_request_timings
     * @example
     * // Get one Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apm_request_timingsFindUniqueOrThrowArgs>(args: SelectSubset<T, apm_request_timingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_request_timings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_request_timingsFindFirstArgs} args - Arguments to find a Apm_request_timings
     * @example
     * // Get one Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apm_request_timingsFindFirstArgs>(args?: SelectSubset<T, apm_request_timingsFindFirstArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_request_timings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_request_timingsFindFirstOrThrowArgs} args - Arguments to find a Apm_request_timings
     * @example
     * // Get one Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apm_request_timingsFindFirstOrThrowArgs>(args?: SelectSubset<T, apm_request_timingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apm_request_timings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_request_timingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.findMany()
     * 
     * // Get first 10 Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apm_request_timingsWithIdOnly = await prisma.apm_request_timings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apm_request_timingsFindManyArgs>(args?: SelectSubset<T, apm_request_timingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apm_request_timings.
     * @param {apm_request_timingsCreateArgs} args - Arguments to create a Apm_request_timings.
     * @example
     * // Create one Apm_request_timings
     * const Apm_request_timings = await prisma.apm_request_timings.create({
     *   data: {
     *     // ... data to create a Apm_request_timings
     *   }
     * })
     * 
     */
    create<T extends apm_request_timingsCreateArgs>(args: SelectSubset<T, apm_request_timingsCreateArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apm_request_timings.
     * @param {apm_request_timingsCreateManyArgs} args - Arguments to create many Apm_request_timings.
     * @example
     * // Create many Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apm_request_timingsCreateManyArgs>(args?: SelectSubset<T, apm_request_timingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apm_request_timings and returns the data saved in the database.
     * @param {apm_request_timingsCreateManyAndReturnArgs} args - Arguments to create many Apm_request_timings.
     * @example
     * // Create many Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apm_request_timings and only return the `id`
     * const apm_request_timingsWithIdOnly = await prisma.apm_request_timings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apm_request_timingsCreateManyAndReturnArgs>(args?: SelectSubset<T, apm_request_timingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apm_request_timings.
     * @param {apm_request_timingsDeleteArgs} args - Arguments to delete one Apm_request_timings.
     * @example
     * // Delete one Apm_request_timings
     * const Apm_request_timings = await prisma.apm_request_timings.delete({
     *   where: {
     *     // ... filter to delete one Apm_request_timings
     *   }
     * })
     * 
     */
    delete<T extends apm_request_timingsDeleteArgs>(args: SelectSubset<T, apm_request_timingsDeleteArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apm_request_timings.
     * @param {apm_request_timingsUpdateArgs} args - Arguments to update one Apm_request_timings.
     * @example
     * // Update one Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apm_request_timingsUpdateArgs>(args: SelectSubset<T, apm_request_timingsUpdateArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apm_request_timings.
     * @param {apm_request_timingsDeleteManyArgs} args - Arguments to filter Apm_request_timings to delete.
     * @example
     * // Delete a few Apm_request_timings
     * const { count } = await prisma.apm_request_timings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apm_request_timingsDeleteManyArgs>(args?: SelectSubset<T, apm_request_timingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_request_timings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_request_timingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apm_request_timingsUpdateManyArgs>(args: SelectSubset<T, apm_request_timingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_request_timings and returns the data updated in the database.
     * @param {apm_request_timingsUpdateManyAndReturnArgs} args - Arguments to update many Apm_request_timings.
     * @example
     * // Update many Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apm_request_timings and only return the `id`
     * const apm_request_timingsWithIdOnly = await prisma.apm_request_timings.updateManyAndReturn({
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
    updateManyAndReturn<T extends apm_request_timingsUpdateManyAndReturnArgs>(args: SelectSubset<T, apm_request_timingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apm_request_timings.
     * @param {apm_request_timingsUpsertArgs} args - Arguments to update or create a Apm_request_timings.
     * @example
     * // Update or create a Apm_request_timings
     * const apm_request_timings = await prisma.apm_request_timings.upsert({
     *   create: {
     *     // ... data to create a Apm_request_timings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apm_request_timings we want to update
     *   }
     * })
     */
    upsert<T extends apm_request_timingsUpsertArgs>(args: SelectSubset<T, apm_request_timingsUpsertArgs<ExtArgs>>): Prisma__apm_request_timingsClient<$Result.GetResult<Prisma.$apm_request_timingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apm_request_timings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_request_timingsCountArgs} args - Arguments to filter Apm_request_timings to count.
     * @example
     * // Count the number of Apm_request_timings
     * const count = await prisma.apm_request_timings.count({
     *   where: {
     *     // ... the filter for the Apm_request_timings we want to count
     *   }
     * })
    **/
    count<T extends apm_request_timingsCountArgs>(
      args?: Subset<T, apm_request_timingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apm_request_timingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apm_request_timings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apm_request_timingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apm_request_timingsAggregateArgs>(args: Subset<T, Apm_request_timingsAggregateArgs>): Prisma.PrismaPromise<GetApm_request_timingsAggregateType<T>>

    /**
     * Group by Apm_request_timings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_request_timingsGroupByArgs} args - Group by arguments.
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
      T extends apm_request_timingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apm_request_timingsGroupByArgs['orderBy'] }
        : { orderBy?: apm_request_timingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apm_request_timingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApm_request_timingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apm_request_timings model
   */
  readonly fields: apm_request_timingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apm_request_timings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apm_request_timingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the apm_request_timings model
   */
  interface apm_request_timingsFieldRefs {
    readonly id: FieldRef<"apm_request_timings", 'BigInt'>
    readonly scope: FieldRef<"apm_request_timings", 'String'>
    readonly name: FieldRef<"apm_request_timings", 'String'>
    readonly path: FieldRef<"apm_request_timings", 'String'>
    readonly method: FieldRef<"apm_request_timings", 'String'>
    readonly status_code: FieldRef<"apm_request_timings", 'Int'>
    readonly duration_ms: FieldRef<"apm_request_timings", 'Int'>
    readonly created_at: FieldRef<"apm_request_timings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apm_request_timings findUnique
   */
  export type apm_request_timingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * Filter, which apm_request_timings to fetch.
     */
    where: apm_request_timingsWhereUniqueInput
  }

  /**
   * apm_request_timings findUniqueOrThrow
   */
  export type apm_request_timingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * Filter, which apm_request_timings to fetch.
     */
    where: apm_request_timingsWhereUniqueInput
  }

  /**
   * apm_request_timings findFirst
   */
  export type apm_request_timingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * Filter, which apm_request_timings to fetch.
     */
    where?: apm_request_timingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_request_timings to fetch.
     */
    orderBy?: apm_request_timingsOrderByWithRelationInput | apm_request_timingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_request_timings.
     */
    cursor?: apm_request_timingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_request_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_request_timings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_request_timings.
     */
    distinct?: Apm_request_timingsScalarFieldEnum | Apm_request_timingsScalarFieldEnum[]
  }

  /**
   * apm_request_timings findFirstOrThrow
   */
  export type apm_request_timingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * Filter, which apm_request_timings to fetch.
     */
    where?: apm_request_timingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_request_timings to fetch.
     */
    orderBy?: apm_request_timingsOrderByWithRelationInput | apm_request_timingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_request_timings.
     */
    cursor?: apm_request_timingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_request_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_request_timings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_request_timings.
     */
    distinct?: Apm_request_timingsScalarFieldEnum | Apm_request_timingsScalarFieldEnum[]
  }

  /**
   * apm_request_timings findMany
   */
  export type apm_request_timingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * Filter, which apm_request_timings to fetch.
     */
    where?: apm_request_timingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_request_timings to fetch.
     */
    orderBy?: apm_request_timingsOrderByWithRelationInput | apm_request_timingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apm_request_timings.
     */
    cursor?: apm_request_timingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_request_timings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_request_timings.
     */
    skip?: number
    distinct?: Apm_request_timingsScalarFieldEnum | Apm_request_timingsScalarFieldEnum[]
  }

  /**
   * apm_request_timings create
   */
  export type apm_request_timingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * The data needed to create a apm_request_timings.
     */
    data: XOR<apm_request_timingsCreateInput, apm_request_timingsUncheckedCreateInput>
  }

  /**
   * apm_request_timings createMany
   */
  export type apm_request_timingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apm_request_timings.
     */
    data: apm_request_timingsCreateManyInput | apm_request_timingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_request_timings createManyAndReturn
   */
  export type apm_request_timingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * The data used to create many apm_request_timings.
     */
    data: apm_request_timingsCreateManyInput | apm_request_timingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_request_timings update
   */
  export type apm_request_timingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * The data needed to update a apm_request_timings.
     */
    data: XOR<apm_request_timingsUpdateInput, apm_request_timingsUncheckedUpdateInput>
    /**
     * Choose, which apm_request_timings to update.
     */
    where: apm_request_timingsWhereUniqueInput
  }

  /**
   * apm_request_timings updateMany
   */
  export type apm_request_timingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apm_request_timings.
     */
    data: XOR<apm_request_timingsUpdateManyMutationInput, apm_request_timingsUncheckedUpdateManyInput>
    /**
     * Filter which apm_request_timings to update
     */
    where?: apm_request_timingsWhereInput
    /**
     * Limit how many apm_request_timings to update.
     */
    limit?: number
  }

  /**
   * apm_request_timings updateManyAndReturn
   */
  export type apm_request_timingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * The data used to update apm_request_timings.
     */
    data: XOR<apm_request_timingsUpdateManyMutationInput, apm_request_timingsUncheckedUpdateManyInput>
    /**
     * Filter which apm_request_timings to update
     */
    where?: apm_request_timingsWhereInput
    /**
     * Limit how many apm_request_timings to update.
     */
    limit?: number
  }

  /**
   * apm_request_timings upsert
   */
  export type apm_request_timingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * The filter to search for the apm_request_timings to update in case it exists.
     */
    where: apm_request_timingsWhereUniqueInput
    /**
     * In case the apm_request_timings found by the `where` argument doesn't exist, create a new apm_request_timings with this data.
     */
    create: XOR<apm_request_timingsCreateInput, apm_request_timingsUncheckedCreateInput>
    /**
     * In case the apm_request_timings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apm_request_timingsUpdateInput, apm_request_timingsUncheckedUpdateInput>
  }

  /**
   * apm_request_timings delete
   */
  export type apm_request_timingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
    /**
     * Filter which apm_request_timings to delete.
     */
    where: apm_request_timingsWhereUniqueInput
  }

  /**
   * apm_request_timings deleteMany
   */
  export type apm_request_timingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_request_timings to delete
     */
    where?: apm_request_timingsWhereInput
    /**
     * Limit how many apm_request_timings to delete.
     */
    limit?: number
  }

  /**
   * apm_request_timings without action
   */
  export type apm_request_timingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_request_timings
     */
    select?: apm_request_timingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_request_timings
     */
    omit?: apm_request_timingsOmit<ExtArgs> | null
  }


  /**
   * Model apm_site_clicks
   */

  export type AggregateApm_site_clicks = {
    _count: Apm_site_clicksCountAggregateOutputType | null
    _avg: Apm_site_clicksAvgAggregateOutputType | null
    _sum: Apm_site_clicksSumAggregateOutputType | null
    _min: Apm_site_clicksMinAggregateOutputType | null
    _max: Apm_site_clicksMaxAggregateOutputType | null
  }

  export type Apm_site_clicksAvgAggregateOutputType = {
    id: number | null
  }

  export type Apm_site_clicksSumAggregateOutputType = {
    id: bigint | null
  }

  export type Apm_site_clicksMinAggregateOutputType = {
    id: bigint | null
    site_name: string | null
    site_href: string | null
    site_category: string | null
    device_type: string | null
    created_at: Date | null
  }

  export type Apm_site_clicksMaxAggregateOutputType = {
    id: bigint | null
    site_name: string | null
    site_href: string | null
    site_category: string | null
    device_type: string | null
    created_at: Date | null
  }

  export type Apm_site_clicksCountAggregateOutputType = {
    id: number
    site_name: number
    site_href: number
    site_category: number
    device_type: number
    created_at: number
    _all: number
  }


  export type Apm_site_clicksAvgAggregateInputType = {
    id?: true
  }

  export type Apm_site_clicksSumAggregateInputType = {
    id?: true
  }

  export type Apm_site_clicksMinAggregateInputType = {
    id?: true
    site_name?: true
    site_href?: true
    site_category?: true
    device_type?: true
    created_at?: true
  }

  export type Apm_site_clicksMaxAggregateInputType = {
    id?: true
    site_name?: true
    site_href?: true
    site_category?: true
    device_type?: true
    created_at?: true
  }

  export type Apm_site_clicksCountAggregateInputType = {
    id?: true
    site_name?: true
    site_href?: true
    site_category?: true
    device_type?: true
    created_at?: true
    _all?: true
  }

  export type Apm_site_clicksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_site_clicks to aggregate.
     */
    where?: apm_site_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_site_clicks to fetch.
     */
    orderBy?: apm_site_clicksOrderByWithRelationInput | apm_site_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apm_site_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_site_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_site_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apm_site_clicks
    **/
    _count?: true | Apm_site_clicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apm_site_clicksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apm_site_clicksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apm_site_clicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apm_site_clicksMaxAggregateInputType
  }

  export type GetApm_site_clicksAggregateType<T extends Apm_site_clicksAggregateArgs> = {
        [P in keyof T & keyof AggregateApm_site_clicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApm_site_clicks[P]>
      : GetScalarType<T[P], AggregateApm_site_clicks[P]>
  }




  export type apm_site_clicksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apm_site_clicksWhereInput
    orderBy?: apm_site_clicksOrderByWithAggregationInput | apm_site_clicksOrderByWithAggregationInput[]
    by: Apm_site_clicksScalarFieldEnum[] | Apm_site_clicksScalarFieldEnum
    having?: apm_site_clicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apm_site_clicksCountAggregateInputType | true
    _avg?: Apm_site_clicksAvgAggregateInputType
    _sum?: Apm_site_clicksSumAggregateInputType
    _min?: Apm_site_clicksMinAggregateInputType
    _max?: Apm_site_clicksMaxAggregateInputType
  }

  export type Apm_site_clicksGroupByOutputType = {
    id: bigint
    site_name: string
    site_href: string
    site_category: string
    device_type: string
    created_at: Date
    _count: Apm_site_clicksCountAggregateOutputType | null
    _avg: Apm_site_clicksAvgAggregateOutputType | null
    _sum: Apm_site_clicksSumAggregateOutputType | null
    _min: Apm_site_clicksMinAggregateOutputType | null
    _max: Apm_site_clicksMaxAggregateOutputType | null
  }

  type GetApm_site_clicksGroupByPayload<T extends apm_site_clicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apm_site_clicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apm_site_clicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apm_site_clicksGroupByOutputType[P]>
            : GetScalarType<T[P], Apm_site_clicksGroupByOutputType[P]>
        }
      >
    >


  export type apm_site_clicksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    site_name?: boolean
    site_href?: boolean
    site_category?: boolean
    device_type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_site_clicks"]>

  export type apm_site_clicksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    site_name?: boolean
    site_href?: boolean
    site_category?: boolean
    device_type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_site_clicks"]>

  export type apm_site_clicksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    site_name?: boolean
    site_href?: boolean
    site_category?: boolean
    device_type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_site_clicks"]>

  export type apm_site_clicksSelectScalar = {
    id?: boolean
    site_name?: boolean
    site_href?: boolean
    site_category?: boolean
    device_type?: boolean
    created_at?: boolean
  }

  export type apm_site_clicksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "site_name" | "site_href" | "site_category" | "device_type" | "created_at", ExtArgs["result"]["apm_site_clicks"]>

  export type $apm_site_clicksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apm_site_clicks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      site_name: string
      site_href: string
      site_category: string
      device_type: string
      created_at: Date
    }, ExtArgs["result"]["apm_site_clicks"]>
    composites: {}
  }

  type apm_site_clicksGetPayload<S extends boolean | null | undefined | apm_site_clicksDefaultArgs> = $Result.GetResult<Prisma.$apm_site_clicksPayload, S>

  type apm_site_clicksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apm_site_clicksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Apm_site_clicksCountAggregateInputType | true
    }

  export interface apm_site_clicksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apm_site_clicks'], meta: { name: 'apm_site_clicks' } }
    /**
     * Find zero or one Apm_site_clicks that matches the filter.
     * @param {apm_site_clicksFindUniqueArgs} args - Arguments to find a Apm_site_clicks
     * @example
     * // Get one Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apm_site_clicksFindUniqueArgs>(args: SelectSubset<T, apm_site_clicksFindUniqueArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apm_site_clicks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apm_site_clicksFindUniqueOrThrowArgs} args - Arguments to find a Apm_site_clicks
     * @example
     * // Get one Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apm_site_clicksFindUniqueOrThrowArgs>(args: SelectSubset<T, apm_site_clicksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_site_clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_site_clicksFindFirstArgs} args - Arguments to find a Apm_site_clicks
     * @example
     * // Get one Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apm_site_clicksFindFirstArgs>(args?: SelectSubset<T, apm_site_clicksFindFirstArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_site_clicks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_site_clicksFindFirstOrThrowArgs} args - Arguments to find a Apm_site_clicks
     * @example
     * // Get one Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apm_site_clicksFindFirstOrThrowArgs>(args?: SelectSubset<T, apm_site_clicksFindFirstOrThrowArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apm_site_clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_site_clicksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.findMany()
     * 
     * // Get first 10 Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apm_site_clicksWithIdOnly = await prisma.apm_site_clicks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apm_site_clicksFindManyArgs>(args?: SelectSubset<T, apm_site_clicksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apm_site_clicks.
     * @param {apm_site_clicksCreateArgs} args - Arguments to create a Apm_site_clicks.
     * @example
     * // Create one Apm_site_clicks
     * const Apm_site_clicks = await prisma.apm_site_clicks.create({
     *   data: {
     *     // ... data to create a Apm_site_clicks
     *   }
     * })
     * 
     */
    create<T extends apm_site_clicksCreateArgs>(args: SelectSubset<T, apm_site_clicksCreateArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apm_site_clicks.
     * @param {apm_site_clicksCreateManyArgs} args - Arguments to create many Apm_site_clicks.
     * @example
     * // Create many Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apm_site_clicksCreateManyArgs>(args?: SelectSubset<T, apm_site_clicksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apm_site_clicks and returns the data saved in the database.
     * @param {apm_site_clicksCreateManyAndReturnArgs} args - Arguments to create many Apm_site_clicks.
     * @example
     * // Create many Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apm_site_clicks and only return the `id`
     * const apm_site_clicksWithIdOnly = await prisma.apm_site_clicks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apm_site_clicksCreateManyAndReturnArgs>(args?: SelectSubset<T, apm_site_clicksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apm_site_clicks.
     * @param {apm_site_clicksDeleteArgs} args - Arguments to delete one Apm_site_clicks.
     * @example
     * // Delete one Apm_site_clicks
     * const Apm_site_clicks = await prisma.apm_site_clicks.delete({
     *   where: {
     *     // ... filter to delete one Apm_site_clicks
     *   }
     * })
     * 
     */
    delete<T extends apm_site_clicksDeleteArgs>(args: SelectSubset<T, apm_site_clicksDeleteArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apm_site_clicks.
     * @param {apm_site_clicksUpdateArgs} args - Arguments to update one Apm_site_clicks.
     * @example
     * // Update one Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apm_site_clicksUpdateArgs>(args: SelectSubset<T, apm_site_clicksUpdateArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apm_site_clicks.
     * @param {apm_site_clicksDeleteManyArgs} args - Arguments to filter Apm_site_clicks to delete.
     * @example
     * // Delete a few Apm_site_clicks
     * const { count } = await prisma.apm_site_clicks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apm_site_clicksDeleteManyArgs>(args?: SelectSubset<T, apm_site_clicksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_site_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_site_clicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apm_site_clicksUpdateManyArgs>(args: SelectSubset<T, apm_site_clicksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_site_clicks and returns the data updated in the database.
     * @param {apm_site_clicksUpdateManyAndReturnArgs} args - Arguments to update many Apm_site_clicks.
     * @example
     * // Update many Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apm_site_clicks and only return the `id`
     * const apm_site_clicksWithIdOnly = await prisma.apm_site_clicks.updateManyAndReturn({
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
    updateManyAndReturn<T extends apm_site_clicksUpdateManyAndReturnArgs>(args: SelectSubset<T, apm_site_clicksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apm_site_clicks.
     * @param {apm_site_clicksUpsertArgs} args - Arguments to update or create a Apm_site_clicks.
     * @example
     * // Update or create a Apm_site_clicks
     * const apm_site_clicks = await prisma.apm_site_clicks.upsert({
     *   create: {
     *     // ... data to create a Apm_site_clicks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apm_site_clicks we want to update
     *   }
     * })
     */
    upsert<T extends apm_site_clicksUpsertArgs>(args: SelectSubset<T, apm_site_clicksUpsertArgs<ExtArgs>>): Prisma__apm_site_clicksClient<$Result.GetResult<Prisma.$apm_site_clicksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apm_site_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_site_clicksCountArgs} args - Arguments to filter Apm_site_clicks to count.
     * @example
     * // Count the number of Apm_site_clicks
     * const count = await prisma.apm_site_clicks.count({
     *   where: {
     *     // ... the filter for the Apm_site_clicks we want to count
     *   }
     * })
    **/
    count<T extends apm_site_clicksCountArgs>(
      args?: Subset<T, apm_site_clicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apm_site_clicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apm_site_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apm_site_clicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apm_site_clicksAggregateArgs>(args: Subset<T, Apm_site_clicksAggregateArgs>): Prisma.PrismaPromise<GetApm_site_clicksAggregateType<T>>

    /**
     * Group by Apm_site_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_site_clicksGroupByArgs} args - Group by arguments.
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
      T extends apm_site_clicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apm_site_clicksGroupByArgs['orderBy'] }
        : { orderBy?: apm_site_clicksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apm_site_clicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApm_site_clicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apm_site_clicks model
   */
  readonly fields: apm_site_clicksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apm_site_clicks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apm_site_clicksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the apm_site_clicks model
   */
  interface apm_site_clicksFieldRefs {
    readonly id: FieldRef<"apm_site_clicks", 'BigInt'>
    readonly site_name: FieldRef<"apm_site_clicks", 'String'>
    readonly site_href: FieldRef<"apm_site_clicks", 'String'>
    readonly site_category: FieldRef<"apm_site_clicks", 'String'>
    readonly device_type: FieldRef<"apm_site_clicks", 'String'>
    readonly created_at: FieldRef<"apm_site_clicks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apm_site_clicks findUnique
   */
  export type apm_site_clicksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_site_clicks to fetch.
     */
    where: apm_site_clicksWhereUniqueInput
  }

  /**
   * apm_site_clicks findUniqueOrThrow
   */
  export type apm_site_clicksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_site_clicks to fetch.
     */
    where: apm_site_clicksWhereUniqueInput
  }

  /**
   * apm_site_clicks findFirst
   */
  export type apm_site_clicksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_site_clicks to fetch.
     */
    where?: apm_site_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_site_clicks to fetch.
     */
    orderBy?: apm_site_clicksOrderByWithRelationInput | apm_site_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_site_clicks.
     */
    cursor?: apm_site_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_site_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_site_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_site_clicks.
     */
    distinct?: Apm_site_clicksScalarFieldEnum | Apm_site_clicksScalarFieldEnum[]
  }

  /**
   * apm_site_clicks findFirstOrThrow
   */
  export type apm_site_clicksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_site_clicks to fetch.
     */
    where?: apm_site_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_site_clicks to fetch.
     */
    orderBy?: apm_site_clicksOrderByWithRelationInput | apm_site_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_site_clicks.
     */
    cursor?: apm_site_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_site_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_site_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_site_clicks.
     */
    distinct?: Apm_site_clicksScalarFieldEnum | Apm_site_clicksScalarFieldEnum[]
  }

  /**
   * apm_site_clicks findMany
   */
  export type apm_site_clicksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_site_clicks to fetch.
     */
    where?: apm_site_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_site_clicks to fetch.
     */
    orderBy?: apm_site_clicksOrderByWithRelationInput | apm_site_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apm_site_clicks.
     */
    cursor?: apm_site_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_site_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_site_clicks.
     */
    skip?: number
    distinct?: Apm_site_clicksScalarFieldEnum | Apm_site_clicksScalarFieldEnum[]
  }

  /**
   * apm_site_clicks create
   */
  export type apm_site_clicksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * The data needed to create a apm_site_clicks.
     */
    data: XOR<apm_site_clicksCreateInput, apm_site_clicksUncheckedCreateInput>
  }

  /**
   * apm_site_clicks createMany
   */
  export type apm_site_clicksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apm_site_clicks.
     */
    data: apm_site_clicksCreateManyInput | apm_site_clicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_site_clicks createManyAndReturn
   */
  export type apm_site_clicksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * The data used to create many apm_site_clicks.
     */
    data: apm_site_clicksCreateManyInput | apm_site_clicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_site_clicks update
   */
  export type apm_site_clicksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * The data needed to update a apm_site_clicks.
     */
    data: XOR<apm_site_clicksUpdateInput, apm_site_clicksUncheckedUpdateInput>
    /**
     * Choose, which apm_site_clicks to update.
     */
    where: apm_site_clicksWhereUniqueInput
  }

  /**
   * apm_site_clicks updateMany
   */
  export type apm_site_clicksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apm_site_clicks.
     */
    data: XOR<apm_site_clicksUpdateManyMutationInput, apm_site_clicksUncheckedUpdateManyInput>
    /**
     * Filter which apm_site_clicks to update
     */
    where?: apm_site_clicksWhereInput
    /**
     * Limit how many apm_site_clicks to update.
     */
    limit?: number
  }

  /**
   * apm_site_clicks updateManyAndReturn
   */
  export type apm_site_clicksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * The data used to update apm_site_clicks.
     */
    data: XOR<apm_site_clicksUpdateManyMutationInput, apm_site_clicksUncheckedUpdateManyInput>
    /**
     * Filter which apm_site_clicks to update
     */
    where?: apm_site_clicksWhereInput
    /**
     * Limit how many apm_site_clicks to update.
     */
    limit?: number
  }

  /**
   * apm_site_clicks upsert
   */
  export type apm_site_clicksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * The filter to search for the apm_site_clicks to update in case it exists.
     */
    where: apm_site_clicksWhereUniqueInput
    /**
     * In case the apm_site_clicks found by the `where` argument doesn't exist, create a new apm_site_clicks with this data.
     */
    create: XOR<apm_site_clicksCreateInput, apm_site_clicksUncheckedCreateInput>
    /**
     * In case the apm_site_clicks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apm_site_clicksUpdateInput, apm_site_clicksUncheckedUpdateInput>
  }

  /**
   * apm_site_clicks delete
   */
  export type apm_site_clicksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
    /**
     * Filter which apm_site_clicks to delete.
     */
    where: apm_site_clicksWhereUniqueInput
  }

  /**
   * apm_site_clicks deleteMany
   */
  export type apm_site_clicksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_site_clicks to delete
     */
    where?: apm_site_clicksWhereInput
    /**
     * Limit how many apm_site_clicks to delete.
     */
    limit?: number
  }

  /**
   * apm_site_clicks without action
   */
  export type apm_site_clicksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_site_clicks
     */
    select?: apm_site_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_site_clicks
     */
    omit?: apm_site_clicksOmit<ExtArgs> | null
  }


  /**
   * Model apm_system_metrics
   */

  export type AggregateApm_system_metrics = {
    _count: Apm_system_metricsCountAggregateOutputType | null
    _avg: Apm_system_metricsAvgAggregateOutputType | null
    _sum: Apm_system_metricsSumAggregateOutputType | null
    _min: Apm_system_metricsMinAggregateOutputType | null
    _max: Apm_system_metricsMaxAggregateOutputType | null
  }

  export type Apm_system_metricsAvgAggregateOutputType = {
    id: number | null
    cpu_percent: Decimal | null
    memory_percent: Decimal | null
    rss_mb: number | null
    heap_used_mb: number | null
    total_mem_mb: number | null
    load_avg_1m: Decimal | null
  }

  export type Apm_system_metricsSumAggregateOutputType = {
    id: bigint | null
    cpu_percent: Decimal | null
    memory_percent: Decimal | null
    rss_mb: number | null
    heap_used_mb: number | null
    total_mem_mb: number | null
    load_avg_1m: Decimal | null
  }

  export type Apm_system_metricsMinAggregateOutputType = {
    id: bigint | null
    cpu_percent: Decimal | null
    memory_percent: Decimal | null
    rss_mb: number | null
    heap_used_mb: number | null
    total_mem_mb: number | null
    load_avg_1m: Decimal | null
    created_at: Date | null
  }

  export type Apm_system_metricsMaxAggregateOutputType = {
    id: bigint | null
    cpu_percent: Decimal | null
    memory_percent: Decimal | null
    rss_mb: number | null
    heap_used_mb: number | null
    total_mem_mb: number | null
    load_avg_1m: Decimal | null
    created_at: Date | null
  }

  export type Apm_system_metricsCountAggregateOutputType = {
    id: number
    cpu_percent: number
    memory_percent: number
    rss_mb: number
    heap_used_mb: number
    total_mem_mb: number
    load_avg_1m: number
    created_at: number
    _all: number
  }


  export type Apm_system_metricsAvgAggregateInputType = {
    id?: true
    cpu_percent?: true
    memory_percent?: true
    rss_mb?: true
    heap_used_mb?: true
    total_mem_mb?: true
    load_avg_1m?: true
  }

  export type Apm_system_metricsSumAggregateInputType = {
    id?: true
    cpu_percent?: true
    memory_percent?: true
    rss_mb?: true
    heap_used_mb?: true
    total_mem_mb?: true
    load_avg_1m?: true
  }

  export type Apm_system_metricsMinAggregateInputType = {
    id?: true
    cpu_percent?: true
    memory_percent?: true
    rss_mb?: true
    heap_used_mb?: true
    total_mem_mb?: true
    load_avg_1m?: true
    created_at?: true
  }

  export type Apm_system_metricsMaxAggregateInputType = {
    id?: true
    cpu_percent?: true
    memory_percent?: true
    rss_mb?: true
    heap_used_mb?: true
    total_mem_mb?: true
    load_avg_1m?: true
    created_at?: true
  }

  export type Apm_system_metricsCountAggregateInputType = {
    id?: true
    cpu_percent?: true
    memory_percent?: true
    rss_mb?: true
    heap_used_mb?: true
    total_mem_mb?: true
    load_avg_1m?: true
    created_at?: true
    _all?: true
  }

  export type Apm_system_metricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_system_metrics to aggregate.
     */
    where?: apm_system_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_system_metrics to fetch.
     */
    orderBy?: apm_system_metricsOrderByWithRelationInput | apm_system_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apm_system_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_system_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_system_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apm_system_metrics
    **/
    _count?: true | Apm_system_metricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apm_system_metricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apm_system_metricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apm_system_metricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apm_system_metricsMaxAggregateInputType
  }

  export type GetApm_system_metricsAggregateType<T extends Apm_system_metricsAggregateArgs> = {
        [P in keyof T & keyof AggregateApm_system_metrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApm_system_metrics[P]>
      : GetScalarType<T[P], AggregateApm_system_metrics[P]>
  }




  export type apm_system_metricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apm_system_metricsWhereInput
    orderBy?: apm_system_metricsOrderByWithAggregationInput | apm_system_metricsOrderByWithAggregationInput[]
    by: Apm_system_metricsScalarFieldEnum[] | Apm_system_metricsScalarFieldEnum
    having?: apm_system_metricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apm_system_metricsCountAggregateInputType | true
    _avg?: Apm_system_metricsAvgAggregateInputType
    _sum?: Apm_system_metricsSumAggregateInputType
    _min?: Apm_system_metricsMinAggregateInputType
    _max?: Apm_system_metricsMaxAggregateInputType
  }

  export type Apm_system_metricsGroupByOutputType = {
    id: bigint
    cpu_percent: Decimal
    memory_percent: Decimal
    rss_mb: number
    heap_used_mb: number
    total_mem_mb: number
    load_avg_1m: Decimal
    created_at: Date
    _count: Apm_system_metricsCountAggregateOutputType | null
    _avg: Apm_system_metricsAvgAggregateOutputType | null
    _sum: Apm_system_metricsSumAggregateOutputType | null
    _min: Apm_system_metricsMinAggregateOutputType | null
    _max: Apm_system_metricsMaxAggregateOutputType | null
  }

  type GetApm_system_metricsGroupByPayload<T extends apm_system_metricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apm_system_metricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apm_system_metricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apm_system_metricsGroupByOutputType[P]>
            : GetScalarType<T[P], Apm_system_metricsGroupByOutputType[P]>
        }
      >
    >


  export type apm_system_metricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpu_percent?: boolean
    memory_percent?: boolean
    rss_mb?: boolean
    heap_used_mb?: boolean
    total_mem_mb?: boolean
    load_avg_1m?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_system_metrics"]>

  export type apm_system_metricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpu_percent?: boolean
    memory_percent?: boolean
    rss_mb?: boolean
    heap_used_mb?: boolean
    total_mem_mb?: boolean
    load_avg_1m?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_system_metrics"]>

  export type apm_system_metricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpu_percent?: boolean
    memory_percent?: boolean
    rss_mb?: boolean
    heap_used_mb?: boolean
    total_mem_mb?: boolean
    load_avg_1m?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_system_metrics"]>

  export type apm_system_metricsSelectScalar = {
    id?: boolean
    cpu_percent?: boolean
    memory_percent?: boolean
    rss_mb?: boolean
    heap_used_mb?: boolean
    total_mem_mb?: boolean
    load_avg_1m?: boolean
    created_at?: boolean
  }

  export type apm_system_metricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpu_percent" | "memory_percent" | "rss_mb" | "heap_used_mb" | "total_mem_mb" | "load_avg_1m" | "created_at", ExtArgs["result"]["apm_system_metrics"]>

  export type $apm_system_metricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apm_system_metrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      cpu_percent: Prisma.Decimal
      memory_percent: Prisma.Decimal
      rss_mb: number
      heap_used_mb: number
      total_mem_mb: number
      load_avg_1m: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["apm_system_metrics"]>
    composites: {}
  }

  type apm_system_metricsGetPayload<S extends boolean | null | undefined | apm_system_metricsDefaultArgs> = $Result.GetResult<Prisma.$apm_system_metricsPayload, S>

  type apm_system_metricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apm_system_metricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Apm_system_metricsCountAggregateInputType | true
    }

  export interface apm_system_metricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apm_system_metrics'], meta: { name: 'apm_system_metrics' } }
    /**
     * Find zero or one Apm_system_metrics that matches the filter.
     * @param {apm_system_metricsFindUniqueArgs} args - Arguments to find a Apm_system_metrics
     * @example
     * // Get one Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apm_system_metricsFindUniqueArgs>(args: SelectSubset<T, apm_system_metricsFindUniqueArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apm_system_metrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apm_system_metricsFindUniqueOrThrowArgs} args - Arguments to find a Apm_system_metrics
     * @example
     * // Get one Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apm_system_metricsFindUniqueOrThrowArgs>(args: SelectSubset<T, apm_system_metricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_system_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_system_metricsFindFirstArgs} args - Arguments to find a Apm_system_metrics
     * @example
     * // Get one Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apm_system_metricsFindFirstArgs>(args?: SelectSubset<T, apm_system_metricsFindFirstArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_system_metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_system_metricsFindFirstOrThrowArgs} args - Arguments to find a Apm_system_metrics
     * @example
     * // Get one Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apm_system_metricsFindFirstOrThrowArgs>(args?: SelectSubset<T, apm_system_metricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apm_system_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_system_metricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.findMany()
     * 
     * // Get first 10 Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apm_system_metricsWithIdOnly = await prisma.apm_system_metrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apm_system_metricsFindManyArgs>(args?: SelectSubset<T, apm_system_metricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apm_system_metrics.
     * @param {apm_system_metricsCreateArgs} args - Arguments to create a Apm_system_metrics.
     * @example
     * // Create one Apm_system_metrics
     * const Apm_system_metrics = await prisma.apm_system_metrics.create({
     *   data: {
     *     // ... data to create a Apm_system_metrics
     *   }
     * })
     * 
     */
    create<T extends apm_system_metricsCreateArgs>(args: SelectSubset<T, apm_system_metricsCreateArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apm_system_metrics.
     * @param {apm_system_metricsCreateManyArgs} args - Arguments to create many Apm_system_metrics.
     * @example
     * // Create many Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apm_system_metricsCreateManyArgs>(args?: SelectSubset<T, apm_system_metricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apm_system_metrics and returns the data saved in the database.
     * @param {apm_system_metricsCreateManyAndReturnArgs} args - Arguments to create many Apm_system_metrics.
     * @example
     * // Create many Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apm_system_metrics and only return the `id`
     * const apm_system_metricsWithIdOnly = await prisma.apm_system_metrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apm_system_metricsCreateManyAndReturnArgs>(args?: SelectSubset<T, apm_system_metricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apm_system_metrics.
     * @param {apm_system_metricsDeleteArgs} args - Arguments to delete one Apm_system_metrics.
     * @example
     * // Delete one Apm_system_metrics
     * const Apm_system_metrics = await prisma.apm_system_metrics.delete({
     *   where: {
     *     // ... filter to delete one Apm_system_metrics
     *   }
     * })
     * 
     */
    delete<T extends apm_system_metricsDeleteArgs>(args: SelectSubset<T, apm_system_metricsDeleteArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apm_system_metrics.
     * @param {apm_system_metricsUpdateArgs} args - Arguments to update one Apm_system_metrics.
     * @example
     * // Update one Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apm_system_metricsUpdateArgs>(args: SelectSubset<T, apm_system_metricsUpdateArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apm_system_metrics.
     * @param {apm_system_metricsDeleteManyArgs} args - Arguments to filter Apm_system_metrics to delete.
     * @example
     * // Delete a few Apm_system_metrics
     * const { count } = await prisma.apm_system_metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apm_system_metricsDeleteManyArgs>(args?: SelectSubset<T, apm_system_metricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_system_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_system_metricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apm_system_metricsUpdateManyArgs>(args: SelectSubset<T, apm_system_metricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_system_metrics and returns the data updated in the database.
     * @param {apm_system_metricsUpdateManyAndReturnArgs} args - Arguments to update many Apm_system_metrics.
     * @example
     * // Update many Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apm_system_metrics and only return the `id`
     * const apm_system_metricsWithIdOnly = await prisma.apm_system_metrics.updateManyAndReturn({
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
    updateManyAndReturn<T extends apm_system_metricsUpdateManyAndReturnArgs>(args: SelectSubset<T, apm_system_metricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apm_system_metrics.
     * @param {apm_system_metricsUpsertArgs} args - Arguments to update or create a Apm_system_metrics.
     * @example
     * // Update or create a Apm_system_metrics
     * const apm_system_metrics = await prisma.apm_system_metrics.upsert({
     *   create: {
     *     // ... data to create a Apm_system_metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apm_system_metrics we want to update
     *   }
     * })
     */
    upsert<T extends apm_system_metricsUpsertArgs>(args: SelectSubset<T, apm_system_metricsUpsertArgs<ExtArgs>>): Prisma__apm_system_metricsClient<$Result.GetResult<Prisma.$apm_system_metricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apm_system_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_system_metricsCountArgs} args - Arguments to filter Apm_system_metrics to count.
     * @example
     * // Count the number of Apm_system_metrics
     * const count = await prisma.apm_system_metrics.count({
     *   where: {
     *     // ... the filter for the Apm_system_metrics we want to count
     *   }
     * })
    **/
    count<T extends apm_system_metricsCountArgs>(
      args?: Subset<T, apm_system_metricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apm_system_metricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apm_system_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apm_system_metricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apm_system_metricsAggregateArgs>(args: Subset<T, Apm_system_metricsAggregateArgs>): Prisma.PrismaPromise<GetApm_system_metricsAggregateType<T>>

    /**
     * Group by Apm_system_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_system_metricsGroupByArgs} args - Group by arguments.
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
      T extends apm_system_metricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apm_system_metricsGroupByArgs['orderBy'] }
        : { orderBy?: apm_system_metricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apm_system_metricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApm_system_metricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apm_system_metrics model
   */
  readonly fields: apm_system_metricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apm_system_metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apm_system_metricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the apm_system_metrics model
   */
  interface apm_system_metricsFieldRefs {
    readonly id: FieldRef<"apm_system_metrics", 'BigInt'>
    readonly cpu_percent: FieldRef<"apm_system_metrics", 'Decimal'>
    readonly memory_percent: FieldRef<"apm_system_metrics", 'Decimal'>
    readonly rss_mb: FieldRef<"apm_system_metrics", 'Int'>
    readonly heap_used_mb: FieldRef<"apm_system_metrics", 'Int'>
    readonly total_mem_mb: FieldRef<"apm_system_metrics", 'Int'>
    readonly load_avg_1m: FieldRef<"apm_system_metrics", 'Decimal'>
    readonly created_at: FieldRef<"apm_system_metrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apm_system_metrics findUnique
   */
  export type apm_system_metricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * Filter, which apm_system_metrics to fetch.
     */
    where: apm_system_metricsWhereUniqueInput
  }

  /**
   * apm_system_metrics findUniqueOrThrow
   */
  export type apm_system_metricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * Filter, which apm_system_metrics to fetch.
     */
    where: apm_system_metricsWhereUniqueInput
  }

  /**
   * apm_system_metrics findFirst
   */
  export type apm_system_metricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * Filter, which apm_system_metrics to fetch.
     */
    where?: apm_system_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_system_metrics to fetch.
     */
    orderBy?: apm_system_metricsOrderByWithRelationInput | apm_system_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_system_metrics.
     */
    cursor?: apm_system_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_system_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_system_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_system_metrics.
     */
    distinct?: Apm_system_metricsScalarFieldEnum | Apm_system_metricsScalarFieldEnum[]
  }

  /**
   * apm_system_metrics findFirstOrThrow
   */
  export type apm_system_metricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * Filter, which apm_system_metrics to fetch.
     */
    where?: apm_system_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_system_metrics to fetch.
     */
    orderBy?: apm_system_metricsOrderByWithRelationInput | apm_system_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_system_metrics.
     */
    cursor?: apm_system_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_system_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_system_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_system_metrics.
     */
    distinct?: Apm_system_metricsScalarFieldEnum | Apm_system_metricsScalarFieldEnum[]
  }

  /**
   * apm_system_metrics findMany
   */
  export type apm_system_metricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * Filter, which apm_system_metrics to fetch.
     */
    where?: apm_system_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_system_metrics to fetch.
     */
    orderBy?: apm_system_metricsOrderByWithRelationInput | apm_system_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apm_system_metrics.
     */
    cursor?: apm_system_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_system_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_system_metrics.
     */
    skip?: number
    distinct?: Apm_system_metricsScalarFieldEnum | Apm_system_metricsScalarFieldEnum[]
  }

  /**
   * apm_system_metrics create
   */
  export type apm_system_metricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * The data needed to create a apm_system_metrics.
     */
    data: XOR<apm_system_metricsCreateInput, apm_system_metricsUncheckedCreateInput>
  }

  /**
   * apm_system_metrics createMany
   */
  export type apm_system_metricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apm_system_metrics.
     */
    data: apm_system_metricsCreateManyInput | apm_system_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_system_metrics createManyAndReturn
   */
  export type apm_system_metricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * The data used to create many apm_system_metrics.
     */
    data: apm_system_metricsCreateManyInput | apm_system_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_system_metrics update
   */
  export type apm_system_metricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * The data needed to update a apm_system_metrics.
     */
    data: XOR<apm_system_metricsUpdateInput, apm_system_metricsUncheckedUpdateInput>
    /**
     * Choose, which apm_system_metrics to update.
     */
    where: apm_system_metricsWhereUniqueInput
  }

  /**
   * apm_system_metrics updateMany
   */
  export type apm_system_metricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apm_system_metrics.
     */
    data: XOR<apm_system_metricsUpdateManyMutationInput, apm_system_metricsUncheckedUpdateManyInput>
    /**
     * Filter which apm_system_metrics to update
     */
    where?: apm_system_metricsWhereInput
    /**
     * Limit how many apm_system_metrics to update.
     */
    limit?: number
  }

  /**
   * apm_system_metrics updateManyAndReturn
   */
  export type apm_system_metricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * The data used to update apm_system_metrics.
     */
    data: XOR<apm_system_metricsUpdateManyMutationInput, apm_system_metricsUncheckedUpdateManyInput>
    /**
     * Filter which apm_system_metrics to update
     */
    where?: apm_system_metricsWhereInput
    /**
     * Limit how many apm_system_metrics to update.
     */
    limit?: number
  }

  /**
   * apm_system_metrics upsert
   */
  export type apm_system_metricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * The filter to search for the apm_system_metrics to update in case it exists.
     */
    where: apm_system_metricsWhereUniqueInput
    /**
     * In case the apm_system_metrics found by the `where` argument doesn't exist, create a new apm_system_metrics with this data.
     */
    create: XOR<apm_system_metricsCreateInput, apm_system_metricsUncheckedCreateInput>
    /**
     * In case the apm_system_metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apm_system_metricsUpdateInput, apm_system_metricsUncheckedUpdateInput>
  }

  /**
   * apm_system_metrics delete
   */
  export type apm_system_metricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
    /**
     * Filter which apm_system_metrics to delete.
     */
    where: apm_system_metricsWhereUniqueInput
  }

  /**
   * apm_system_metrics deleteMany
   */
  export type apm_system_metricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_system_metrics to delete
     */
    where?: apm_system_metricsWhereInput
    /**
     * Limit how many apm_system_metrics to delete.
     */
    limit?: number
  }

  /**
   * apm_system_metrics without action
   */
  export type apm_system_metricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_system_metrics
     */
    select?: apm_system_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_system_metrics
     */
    omit?: apm_system_metricsOmit<ExtArgs> | null
  }


  /**
   * Model apm_youtube_clicks
   */

  export type AggregateApm_youtube_clicks = {
    _count: Apm_youtube_clicksCountAggregateOutputType | null
    _avg: Apm_youtube_clicksAvgAggregateOutputType | null
    _sum: Apm_youtube_clicksSumAggregateOutputType | null
    _min: Apm_youtube_clicksMinAggregateOutputType | null
    _max: Apm_youtube_clicksMaxAggregateOutputType | null
  }

  export type Apm_youtube_clicksAvgAggregateOutputType = {
    id: number | null
  }

  export type Apm_youtube_clicksSumAggregateOutputType = {
    id: bigint | null
  }

  export type Apm_youtube_clicksMinAggregateOutputType = {
    id: bigint | null
    video_id: string | null
    video_title: string | null
    channel_title: string | null
    device_type: string | null
    created_at: Date | null
  }

  export type Apm_youtube_clicksMaxAggregateOutputType = {
    id: bigint | null
    video_id: string | null
    video_title: string | null
    channel_title: string | null
    device_type: string | null
    created_at: Date | null
  }

  export type Apm_youtube_clicksCountAggregateOutputType = {
    id: number
    video_id: number
    video_title: number
    channel_title: number
    device_type: number
    created_at: number
    _all: number
  }


  export type Apm_youtube_clicksAvgAggregateInputType = {
    id?: true
  }

  export type Apm_youtube_clicksSumAggregateInputType = {
    id?: true
  }

  export type Apm_youtube_clicksMinAggregateInputType = {
    id?: true
    video_id?: true
    video_title?: true
    channel_title?: true
    device_type?: true
    created_at?: true
  }

  export type Apm_youtube_clicksMaxAggregateInputType = {
    id?: true
    video_id?: true
    video_title?: true
    channel_title?: true
    device_type?: true
    created_at?: true
  }

  export type Apm_youtube_clicksCountAggregateInputType = {
    id?: true
    video_id?: true
    video_title?: true
    channel_title?: true
    device_type?: true
    created_at?: true
    _all?: true
  }

  export type Apm_youtube_clicksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_youtube_clicks to aggregate.
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_youtube_clicks to fetch.
     */
    orderBy?: apm_youtube_clicksOrderByWithRelationInput | apm_youtube_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apm_youtube_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_youtube_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_youtube_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apm_youtube_clicks
    **/
    _count?: true | Apm_youtube_clicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Apm_youtube_clicksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Apm_youtube_clicksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Apm_youtube_clicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Apm_youtube_clicksMaxAggregateInputType
  }

  export type GetApm_youtube_clicksAggregateType<T extends Apm_youtube_clicksAggregateArgs> = {
        [P in keyof T & keyof AggregateApm_youtube_clicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApm_youtube_clicks[P]>
      : GetScalarType<T[P], AggregateApm_youtube_clicks[P]>
  }




  export type apm_youtube_clicksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apm_youtube_clicksWhereInput
    orderBy?: apm_youtube_clicksOrderByWithAggregationInput | apm_youtube_clicksOrderByWithAggregationInput[]
    by: Apm_youtube_clicksScalarFieldEnum[] | Apm_youtube_clicksScalarFieldEnum
    having?: apm_youtube_clicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Apm_youtube_clicksCountAggregateInputType | true
    _avg?: Apm_youtube_clicksAvgAggregateInputType
    _sum?: Apm_youtube_clicksSumAggregateInputType
    _min?: Apm_youtube_clicksMinAggregateInputType
    _max?: Apm_youtube_clicksMaxAggregateInputType
  }

  export type Apm_youtube_clicksGroupByOutputType = {
    id: bigint
    video_id: string
    video_title: string
    channel_title: string
    device_type: string
    created_at: Date
    _count: Apm_youtube_clicksCountAggregateOutputType | null
    _avg: Apm_youtube_clicksAvgAggregateOutputType | null
    _sum: Apm_youtube_clicksSumAggregateOutputType | null
    _min: Apm_youtube_clicksMinAggregateOutputType | null
    _max: Apm_youtube_clicksMaxAggregateOutputType | null
  }

  type GetApm_youtube_clicksGroupByPayload<T extends apm_youtube_clicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Apm_youtube_clicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Apm_youtube_clicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Apm_youtube_clicksGroupByOutputType[P]>
            : GetScalarType<T[P], Apm_youtube_clicksGroupByOutputType[P]>
        }
      >
    >


  export type apm_youtube_clicksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    video_title?: boolean
    channel_title?: boolean
    device_type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_youtube_clicks"]>

  export type apm_youtube_clicksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    video_title?: boolean
    channel_title?: boolean
    device_type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_youtube_clicks"]>

  export type apm_youtube_clicksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    video_title?: boolean
    channel_title?: boolean
    device_type?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["apm_youtube_clicks"]>

  export type apm_youtube_clicksSelectScalar = {
    id?: boolean
    video_id?: boolean
    video_title?: boolean
    channel_title?: boolean
    device_type?: boolean
    created_at?: boolean
  }

  export type apm_youtube_clicksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "video_id" | "video_title" | "channel_title" | "device_type" | "created_at", ExtArgs["result"]["apm_youtube_clicks"]>

  export type $apm_youtube_clicksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apm_youtube_clicks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      video_id: string
      video_title: string
      channel_title: string
      device_type: string
      created_at: Date
    }, ExtArgs["result"]["apm_youtube_clicks"]>
    composites: {}
  }

  type apm_youtube_clicksGetPayload<S extends boolean | null | undefined | apm_youtube_clicksDefaultArgs> = $Result.GetResult<Prisma.$apm_youtube_clicksPayload, S>

  type apm_youtube_clicksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apm_youtube_clicksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Apm_youtube_clicksCountAggregateInputType | true
    }

  export interface apm_youtube_clicksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apm_youtube_clicks'], meta: { name: 'apm_youtube_clicks' } }
    /**
     * Find zero or one Apm_youtube_clicks that matches the filter.
     * @param {apm_youtube_clicksFindUniqueArgs} args - Arguments to find a Apm_youtube_clicks
     * @example
     * // Get one Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apm_youtube_clicksFindUniqueArgs>(args: SelectSubset<T, apm_youtube_clicksFindUniqueArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apm_youtube_clicks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apm_youtube_clicksFindUniqueOrThrowArgs} args - Arguments to find a Apm_youtube_clicks
     * @example
     * // Get one Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apm_youtube_clicksFindUniqueOrThrowArgs>(args: SelectSubset<T, apm_youtube_clicksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_youtube_clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_youtube_clicksFindFirstArgs} args - Arguments to find a Apm_youtube_clicks
     * @example
     * // Get one Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apm_youtube_clicksFindFirstArgs>(args?: SelectSubset<T, apm_youtube_clicksFindFirstArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apm_youtube_clicks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_youtube_clicksFindFirstOrThrowArgs} args - Arguments to find a Apm_youtube_clicks
     * @example
     * // Get one Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apm_youtube_clicksFindFirstOrThrowArgs>(args?: SelectSubset<T, apm_youtube_clicksFindFirstOrThrowArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apm_youtube_clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_youtube_clicksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findMany()
     * 
     * // Get first 10 Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apm_youtube_clicksWithIdOnly = await prisma.apm_youtube_clicks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends apm_youtube_clicksFindManyArgs>(args?: SelectSubset<T, apm_youtube_clicksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apm_youtube_clicks.
     * @param {apm_youtube_clicksCreateArgs} args - Arguments to create a Apm_youtube_clicks.
     * @example
     * // Create one Apm_youtube_clicks
     * const Apm_youtube_clicks = await prisma.apm_youtube_clicks.create({
     *   data: {
     *     // ... data to create a Apm_youtube_clicks
     *   }
     * })
     * 
     */
    create<T extends apm_youtube_clicksCreateArgs>(args: SelectSubset<T, apm_youtube_clicksCreateArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apm_youtube_clicks.
     * @param {apm_youtube_clicksCreateManyArgs} args - Arguments to create many Apm_youtube_clicks.
     * @example
     * // Create many Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apm_youtube_clicksCreateManyArgs>(args?: SelectSubset<T, apm_youtube_clicksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apm_youtube_clicks and returns the data saved in the database.
     * @param {apm_youtube_clicksCreateManyAndReturnArgs} args - Arguments to create many Apm_youtube_clicks.
     * @example
     * // Create many Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apm_youtube_clicks and only return the `id`
     * const apm_youtube_clicksWithIdOnly = await prisma.apm_youtube_clicks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apm_youtube_clicksCreateManyAndReturnArgs>(args?: SelectSubset<T, apm_youtube_clicksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apm_youtube_clicks.
     * @param {apm_youtube_clicksDeleteArgs} args - Arguments to delete one Apm_youtube_clicks.
     * @example
     * // Delete one Apm_youtube_clicks
     * const Apm_youtube_clicks = await prisma.apm_youtube_clicks.delete({
     *   where: {
     *     // ... filter to delete one Apm_youtube_clicks
     *   }
     * })
     * 
     */
    delete<T extends apm_youtube_clicksDeleteArgs>(args: SelectSubset<T, apm_youtube_clicksDeleteArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apm_youtube_clicks.
     * @param {apm_youtube_clicksUpdateArgs} args - Arguments to update one Apm_youtube_clicks.
     * @example
     * // Update one Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apm_youtube_clicksUpdateArgs>(args: SelectSubset<T, apm_youtube_clicksUpdateArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apm_youtube_clicks.
     * @param {apm_youtube_clicksDeleteManyArgs} args - Arguments to filter Apm_youtube_clicks to delete.
     * @example
     * // Delete a few Apm_youtube_clicks
     * const { count } = await prisma.apm_youtube_clicks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apm_youtube_clicksDeleteManyArgs>(args?: SelectSubset<T, apm_youtube_clicksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_youtube_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_youtube_clicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apm_youtube_clicksUpdateManyArgs>(args: SelectSubset<T, apm_youtube_clicksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apm_youtube_clicks and returns the data updated in the database.
     * @param {apm_youtube_clicksUpdateManyAndReturnArgs} args - Arguments to update many Apm_youtube_clicks.
     * @example
     * // Update many Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apm_youtube_clicks and only return the `id`
     * const apm_youtube_clicksWithIdOnly = await prisma.apm_youtube_clicks.updateManyAndReturn({
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
    updateManyAndReturn<T extends apm_youtube_clicksUpdateManyAndReturnArgs>(args: SelectSubset<T, apm_youtube_clicksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apm_youtube_clicks.
     * @param {apm_youtube_clicksUpsertArgs} args - Arguments to update or create a Apm_youtube_clicks.
     * @example
     * // Update or create a Apm_youtube_clicks
     * const apm_youtube_clicks = await prisma.apm_youtube_clicks.upsert({
     *   create: {
     *     // ... data to create a Apm_youtube_clicks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apm_youtube_clicks we want to update
     *   }
     * })
     */
    upsert<T extends apm_youtube_clicksUpsertArgs>(args: SelectSubset<T, apm_youtube_clicksUpsertArgs<ExtArgs>>): Prisma__apm_youtube_clicksClient<$Result.GetResult<Prisma.$apm_youtube_clicksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apm_youtube_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_youtube_clicksCountArgs} args - Arguments to filter Apm_youtube_clicks to count.
     * @example
     * // Count the number of Apm_youtube_clicks
     * const count = await prisma.apm_youtube_clicks.count({
     *   where: {
     *     // ... the filter for the Apm_youtube_clicks we want to count
     *   }
     * })
    **/
    count<T extends apm_youtube_clicksCountArgs>(
      args?: Subset<T, apm_youtube_clicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Apm_youtube_clicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apm_youtube_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Apm_youtube_clicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Apm_youtube_clicksAggregateArgs>(args: Subset<T, Apm_youtube_clicksAggregateArgs>): Prisma.PrismaPromise<GetApm_youtube_clicksAggregateType<T>>

    /**
     * Group by Apm_youtube_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apm_youtube_clicksGroupByArgs} args - Group by arguments.
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
      T extends apm_youtube_clicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apm_youtube_clicksGroupByArgs['orderBy'] }
        : { orderBy?: apm_youtube_clicksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, apm_youtube_clicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApm_youtube_clicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apm_youtube_clicks model
   */
  readonly fields: apm_youtube_clicksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apm_youtube_clicks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apm_youtube_clicksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the apm_youtube_clicks model
   */
  interface apm_youtube_clicksFieldRefs {
    readonly id: FieldRef<"apm_youtube_clicks", 'BigInt'>
    readonly video_id: FieldRef<"apm_youtube_clicks", 'String'>
    readonly video_title: FieldRef<"apm_youtube_clicks", 'String'>
    readonly channel_title: FieldRef<"apm_youtube_clicks", 'String'>
    readonly device_type: FieldRef<"apm_youtube_clicks", 'String'>
    readonly created_at: FieldRef<"apm_youtube_clicks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * apm_youtube_clicks findUnique
   */
  export type apm_youtube_clicksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_youtube_clicks to fetch.
     */
    where: apm_youtube_clicksWhereUniqueInput
  }

  /**
   * apm_youtube_clicks findUniqueOrThrow
   */
  export type apm_youtube_clicksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_youtube_clicks to fetch.
     */
    where: apm_youtube_clicksWhereUniqueInput
  }

  /**
   * apm_youtube_clicks findFirst
   */
  export type apm_youtube_clicksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_youtube_clicks to fetch.
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_youtube_clicks to fetch.
     */
    orderBy?: apm_youtube_clicksOrderByWithRelationInput | apm_youtube_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_youtube_clicks.
     */
    cursor?: apm_youtube_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_youtube_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_youtube_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_youtube_clicks.
     */
    distinct?: Apm_youtube_clicksScalarFieldEnum | Apm_youtube_clicksScalarFieldEnum[]
  }

  /**
   * apm_youtube_clicks findFirstOrThrow
   */
  export type apm_youtube_clicksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_youtube_clicks to fetch.
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_youtube_clicks to fetch.
     */
    orderBy?: apm_youtube_clicksOrderByWithRelationInput | apm_youtube_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apm_youtube_clicks.
     */
    cursor?: apm_youtube_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_youtube_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_youtube_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apm_youtube_clicks.
     */
    distinct?: Apm_youtube_clicksScalarFieldEnum | Apm_youtube_clicksScalarFieldEnum[]
  }

  /**
   * apm_youtube_clicks findMany
   */
  export type apm_youtube_clicksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * Filter, which apm_youtube_clicks to fetch.
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apm_youtube_clicks to fetch.
     */
    orderBy?: apm_youtube_clicksOrderByWithRelationInput | apm_youtube_clicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apm_youtube_clicks.
     */
    cursor?: apm_youtube_clicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apm_youtube_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apm_youtube_clicks.
     */
    skip?: number
    distinct?: Apm_youtube_clicksScalarFieldEnum | Apm_youtube_clicksScalarFieldEnum[]
  }

  /**
   * apm_youtube_clicks create
   */
  export type apm_youtube_clicksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * The data needed to create a apm_youtube_clicks.
     */
    data: XOR<apm_youtube_clicksCreateInput, apm_youtube_clicksUncheckedCreateInput>
  }

  /**
   * apm_youtube_clicks createMany
   */
  export type apm_youtube_clicksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apm_youtube_clicks.
     */
    data: apm_youtube_clicksCreateManyInput | apm_youtube_clicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_youtube_clicks createManyAndReturn
   */
  export type apm_youtube_clicksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * The data used to create many apm_youtube_clicks.
     */
    data: apm_youtube_clicksCreateManyInput | apm_youtube_clicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apm_youtube_clicks update
   */
  export type apm_youtube_clicksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * The data needed to update a apm_youtube_clicks.
     */
    data: XOR<apm_youtube_clicksUpdateInput, apm_youtube_clicksUncheckedUpdateInput>
    /**
     * Choose, which apm_youtube_clicks to update.
     */
    where: apm_youtube_clicksWhereUniqueInput
  }

  /**
   * apm_youtube_clicks updateMany
   */
  export type apm_youtube_clicksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apm_youtube_clicks.
     */
    data: XOR<apm_youtube_clicksUpdateManyMutationInput, apm_youtube_clicksUncheckedUpdateManyInput>
    /**
     * Filter which apm_youtube_clicks to update
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * Limit how many apm_youtube_clicks to update.
     */
    limit?: number
  }

  /**
   * apm_youtube_clicks updateManyAndReturn
   */
  export type apm_youtube_clicksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * The data used to update apm_youtube_clicks.
     */
    data: XOR<apm_youtube_clicksUpdateManyMutationInput, apm_youtube_clicksUncheckedUpdateManyInput>
    /**
     * Filter which apm_youtube_clicks to update
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * Limit how many apm_youtube_clicks to update.
     */
    limit?: number
  }

  /**
   * apm_youtube_clicks upsert
   */
  export type apm_youtube_clicksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * The filter to search for the apm_youtube_clicks to update in case it exists.
     */
    where: apm_youtube_clicksWhereUniqueInput
    /**
     * In case the apm_youtube_clicks found by the `where` argument doesn't exist, create a new apm_youtube_clicks with this data.
     */
    create: XOR<apm_youtube_clicksCreateInput, apm_youtube_clicksUncheckedCreateInput>
    /**
     * In case the apm_youtube_clicks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apm_youtube_clicksUpdateInput, apm_youtube_clicksUncheckedUpdateInput>
  }

  /**
   * apm_youtube_clicks delete
   */
  export type apm_youtube_clicksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
    /**
     * Filter which apm_youtube_clicks to delete.
     */
    where: apm_youtube_clicksWhereUniqueInput
  }

  /**
   * apm_youtube_clicks deleteMany
   */
  export type apm_youtube_clicksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apm_youtube_clicks to delete
     */
    where?: apm_youtube_clicksWhereInput
    /**
     * Limit how many apm_youtube_clicks to delete.
     */
    limit?: number
  }

  /**
   * apm_youtube_clicks without action
   */
  export type apm_youtube_clicksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apm_youtube_clicks
     */
    select?: apm_youtube_clicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apm_youtube_clicks
     */
    omit?: apm_youtube_clicksOmit<ExtArgs> | null
  }


  /**
   * Model loa_ark_grid
   */

  export type AggregateLoa_ark_grid = {
    _count: Loa_ark_gridCountAggregateOutputType | null
    _avg: Loa_ark_gridAvgAggregateOutputType | null
    _sum: Loa_ark_gridSumAggregateOutputType | null
    _min: Loa_ark_gridMinAggregateOutputType | null
    _max: Loa_ark_gridMaxAggregateOutputType | null
  }

  export type Loa_ark_gridAvgAggregateOutputType = {
    seq: number | null
    class: number | null
    order: number | null
  }

  export type Loa_ark_gridSumAggregateOutputType = {
    seq: bigint | null
    class: bigint | null
    order: number | null
  }

  export type Loa_ark_gridMinAggregateOutputType = {
    seq: bigint | null
    core: string | null
    star: string | null
    class: bigint | null
    order: number | null
  }

  export type Loa_ark_gridMaxAggregateOutputType = {
    seq: bigint | null
    core: string | null
    star: string | null
    class: bigint | null
    order: number | null
  }

  export type Loa_ark_gridCountAggregateOutputType = {
    seq: number
    core: number
    star: number
    class: number
    order: number
    _all: number
  }


  export type Loa_ark_gridAvgAggregateInputType = {
    seq?: true
    class?: true
    order?: true
  }

  export type Loa_ark_gridSumAggregateInputType = {
    seq?: true
    class?: true
    order?: true
  }

  export type Loa_ark_gridMinAggregateInputType = {
    seq?: true
    core?: true
    star?: true
    class?: true
    order?: true
  }

  export type Loa_ark_gridMaxAggregateInputType = {
    seq?: true
    core?: true
    star?: true
    class?: true
    order?: true
  }

  export type Loa_ark_gridCountAggregateInputType = {
    seq?: true
    core?: true
    star?: true
    class?: true
    order?: true
    _all?: true
  }

  export type Loa_ark_gridAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_ark_grid to aggregate.
     */
    where?: loa_ark_gridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_ark_grids to fetch.
     */
    orderBy?: loa_ark_gridOrderByWithRelationInput | loa_ark_gridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loa_ark_gridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_ark_grids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_ark_grids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loa_ark_grids
    **/
    _count?: true | Loa_ark_gridCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loa_ark_gridAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loa_ark_gridSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loa_ark_gridMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loa_ark_gridMaxAggregateInputType
  }

  export type GetLoa_ark_gridAggregateType<T extends Loa_ark_gridAggregateArgs> = {
        [P in keyof T & keyof AggregateLoa_ark_grid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoa_ark_grid[P]>
      : GetScalarType<T[P], AggregateLoa_ark_grid[P]>
  }




  export type loa_ark_gridGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_ark_gridWhereInput
    orderBy?: loa_ark_gridOrderByWithAggregationInput | loa_ark_gridOrderByWithAggregationInput[]
    by: Loa_ark_gridScalarFieldEnum[] | Loa_ark_gridScalarFieldEnum
    having?: loa_ark_gridScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loa_ark_gridCountAggregateInputType | true
    _avg?: Loa_ark_gridAvgAggregateInputType
    _sum?: Loa_ark_gridSumAggregateInputType
    _min?: Loa_ark_gridMinAggregateInputType
    _max?: Loa_ark_gridMaxAggregateInputType
  }

  export type Loa_ark_gridGroupByOutputType = {
    seq: bigint
    core: string | null
    star: string | null
    class: bigint | null
    order: number | null
    _count: Loa_ark_gridCountAggregateOutputType | null
    _avg: Loa_ark_gridAvgAggregateOutputType | null
    _sum: Loa_ark_gridSumAggregateOutputType | null
    _min: Loa_ark_gridMinAggregateOutputType | null
    _max: Loa_ark_gridMaxAggregateOutputType | null
  }

  type GetLoa_ark_gridGroupByPayload<T extends loa_ark_gridGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loa_ark_gridGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loa_ark_gridGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loa_ark_gridGroupByOutputType[P]>
            : GetScalarType<T[P], Loa_ark_gridGroupByOutputType[P]>
        }
      >
    >


  export type loa_ark_gridSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    core?: boolean
    star?: boolean
    class?: boolean
    order?: boolean
    loa_class?: boolean | loa_ark_grid$loa_classArgs<ExtArgs>
    loa_users_loa_users_core_moonToloa_ark_grid?: boolean | loa_ark_grid$loa_users_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_users_loa_users_core_starToloa_ark_grid?: boolean | loa_ark_grid$loa_users_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_users_loa_users_core_sunToloa_ark_grid?: boolean | loa_ark_grid$loa_users_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    _count?: boolean | Loa_ark_gridCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loa_ark_grid"]>

  export type loa_ark_gridSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    core?: boolean
    star?: boolean
    class?: boolean
    order?: boolean
    loa_class?: boolean | loa_ark_grid$loa_classArgs<ExtArgs>
  }, ExtArgs["result"]["loa_ark_grid"]>

  export type loa_ark_gridSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    core?: boolean
    star?: boolean
    class?: boolean
    order?: boolean
    loa_class?: boolean | loa_ark_grid$loa_classArgs<ExtArgs>
  }, ExtArgs["result"]["loa_ark_grid"]>

  export type loa_ark_gridSelectScalar = {
    seq?: boolean
    core?: boolean
    star?: boolean
    class?: boolean
    order?: boolean
  }

  export type loa_ark_gridOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seq" | "core" | "star" | "class" | "order", ExtArgs["result"]["loa_ark_grid"]>
  export type loa_ark_gridInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_class?: boolean | loa_ark_grid$loa_classArgs<ExtArgs>
    loa_users_loa_users_core_moonToloa_ark_grid?: boolean | loa_ark_grid$loa_users_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_users_loa_users_core_starToloa_ark_grid?: boolean | loa_ark_grid$loa_users_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_users_loa_users_core_sunToloa_ark_grid?: boolean | loa_ark_grid$loa_users_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    _count?: boolean | Loa_ark_gridCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type loa_ark_gridIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_class?: boolean | loa_ark_grid$loa_classArgs<ExtArgs>
  }
  export type loa_ark_gridIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_class?: boolean | loa_ark_grid$loa_classArgs<ExtArgs>
  }

  export type $loa_ark_gridPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loa_ark_grid"
    objects: {
      loa_class: Prisma.$loa_classPayload<ExtArgs> | null
      loa_users_loa_users_core_moonToloa_ark_grid: Prisma.$loa_usersPayload<ExtArgs>[]
      loa_users_loa_users_core_starToloa_ark_grid: Prisma.$loa_usersPayload<ExtArgs>[]
      loa_users_loa_users_core_sunToloa_ark_grid: Prisma.$loa_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      seq: bigint
      core: string | null
      star: string | null
      class: bigint | null
      order: number | null
    }, ExtArgs["result"]["loa_ark_grid"]>
    composites: {}
  }

  type loa_ark_gridGetPayload<S extends boolean | null | undefined | loa_ark_gridDefaultArgs> = $Result.GetResult<Prisma.$loa_ark_gridPayload, S>

  type loa_ark_gridCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loa_ark_gridFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loa_ark_gridCountAggregateInputType | true
    }

  export interface loa_ark_gridDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loa_ark_grid'], meta: { name: 'loa_ark_grid' } }
    /**
     * Find zero or one Loa_ark_grid that matches the filter.
     * @param {loa_ark_gridFindUniqueArgs} args - Arguments to find a Loa_ark_grid
     * @example
     * // Get one Loa_ark_grid
     * const loa_ark_grid = await prisma.loa_ark_grid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loa_ark_gridFindUniqueArgs>(args: SelectSubset<T, loa_ark_gridFindUniqueArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loa_ark_grid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loa_ark_gridFindUniqueOrThrowArgs} args - Arguments to find a Loa_ark_grid
     * @example
     * // Get one Loa_ark_grid
     * const loa_ark_grid = await prisma.loa_ark_grid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loa_ark_gridFindUniqueOrThrowArgs>(args: SelectSubset<T, loa_ark_gridFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_ark_grid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_ark_gridFindFirstArgs} args - Arguments to find a Loa_ark_grid
     * @example
     * // Get one Loa_ark_grid
     * const loa_ark_grid = await prisma.loa_ark_grid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loa_ark_gridFindFirstArgs>(args?: SelectSubset<T, loa_ark_gridFindFirstArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_ark_grid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_ark_gridFindFirstOrThrowArgs} args - Arguments to find a Loa_ark_grid
     * @example
     * // Get one Loa_ark_grid
     * const loa_ark_grid = await prisma.loa_ark_grid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loa_ark_gridFindFirstOrThrowArgs>(args?: SelectSubset<T, loa_ark_gridFindFirstOrThrowArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loa_ark_grids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_ark_gridFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loa_ark_grids
     * const loa_ark_grids = await prisma.loa_ark_grid.findMany()
     * 
     * // Get first 10 Loa_ark_grids
     * const loa_ark_grids = await prisma.loa_ark_grid.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const loa_ark_gridWithSeqOnly = await prisma.loa_ark_grid.findMany({ select: { seq: true } })
     * 
     */
    findMany<T extends loa_ark_gridFindManyArgs>(args?: SelectSubset<T, loa_ark_gridFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loa_ark_grid.
     * @param {loa_ark_gridCreateArgs} args - Arguments to create a Loa_ark_grid.
     * @example
     * // Create one Loa_ark_grid
     * const Loa_ark_grid = await prisma.loa_ark_grid.create({
     *   data: {
     *     // ... data to create a Loa_ark_grid
     *   }
     * })
     * 
     */
    create<T extends loa_ark_gridCreateArgs>(args: SelectSubset<T, loa_ark_gridCreateArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loa_ark_grids.
     * @param {loa_ark_gridCreateManyArgs} args - Arguments to create many Loa_ark_grids.
     * @example
     * // Create many Loa_ark_grids
     * const loa_ark_grid = await prisma.loa_ark_grid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loa_ark_gridCreateManyArgs>(args?: SelectSubset<T, loa_ark_gridCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loa_ark_grids and returns the data saved in the database.
     * @param {loa_ark_gridCreateManyAndReturnArgs} args - Arguments to create many Loa_ark_grids.
     * @example
     * // Create many Loa_ark_grids
     * const loa_ark_grid = await prisma.loa_ark_grid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loa_ark_grids and only return the `seq`
     * const loa_ark_gridWithSeqOnly = await prisma.loa_ark_grid.createManyAndReturn({
     *   select: { seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loa_ark_gridCreateManyAndReturnArgs>(args?: SelectSubset<T, loa_ark_gridCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loa_ark_grid.
     * @param {loa_ark_gridDeleteArgs} args - Arguments to delete one Loa_ark_grid.
     * @example
     * // Delete one Loa_ark_grid
     * const Loa_ark_grid = await prisma.loa_ark_grid.delete({
     *   where: {
     *     // ... filter to delete one Loa_ark_grid
     *   }
     * })
     * 
     */
    delete<T extends loa_ark_gridDeleteArgs>(args: SelectSubset<T, loa_ark_gridDeleteArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loa_ark_grid.
     * @param {loa_ark_gridUpdateArgs} args - Arguments to update one Loa_ark_grid.
     * @example
     * // Update one Loa_ark_grid
     * const loa_ark_grid = await prisma.loa_ark_grid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loa_ark_gridUpdateArgs>(args: SelectSubset<T, loa_ark_gridUpdateArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loa_ark_grids.
     * @param {loa_ark_gridDeleteManyArgs} args - Arguments to filter Loa_ark_grids to delete.
     * @example
     * // Delete a few Loa_ark_grids
     * const { count } = await prisma.loa_ark_grid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loa_ark_gridDeleteManyArgs>(args?: SelectSubset<T, loa_ark_gridDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_ark_grids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_ark_gridUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loa_ark_grids
     * const loa_ark_grid = await prisma.loa_ark_grid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loa_ark_gridUpdateManyArgs>(args: SelectSubset<T, loa_ark_gridUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_ark_grids and returns the data updated in the database.
     * @param {loa_ark_gridUpdateManyAndReturnArgs} args - Arguments to update many Loa_ark_grids.
     * @example
     * // Update many Loa_ark_grids
     * const loa_ark_grid = await prisma.loa_ark_grid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loa_ark_grids and only return the `seq`
     * const loa_ark_gridWithSeqOnly = await prisma.loa_ark_grid.updateManyAndReturn({
     *   select: { seq: true },
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
    updateManyAndReturn<T extends loa_ark_gridUpdateManyAndReturnArgs>(args: SelectSubset<T, loa_ark_gridUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loa_ark_grid.
     * @param {loa_ark_gridUpsertArgs} args - Arguments to update or create a Loa_ark_grid.
     * @example
     * // Update or create a Loa_ark_grid
     * const loa_ark_grid = await prisma.loa_ark_grid.upsert({
     *   create: {
     *     // ... data to create a Loa_ark_grid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loa_ark_grid we want to update
     *   }
     * })
     */
    upsert<T extends loa_ark_gridUpsertArgs>(args: SelectSubset<T, loa_ark_gridUpsertArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loa_ark_grids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_ark_gridCountArgs} args - Arguments to filter Loa_ark_grids to count.
     * @example
     * // Count the number of Loa_ark_grids
     * const count = await prisma.loa_ark_grid.count({
     *   where: {
     *     // ... the filter for the Loa_ark_grids we want to count
     *   }
     * })
    **/
    count<T extends loa_ark_gridCountArgs>(
      args?: Subset<T, loa_ark_gridCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loa_ark_gridCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loa_ark_grid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loa_ark_gridAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Loa_ark_gridAggregateArgs>(args: Subset<T, Loa_ark_gridAggregateArgs>): Prisma.PrismaPromise<GetLoa_ark_gridAggregateType<T>>

    /**
     * Group by Loa_ark_grid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_ark_gridGroupByArgs} args - Group by arguments.
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
      T extends loa_ark_gridGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loa_ark_gridGroupByArgs['orderBy'] }
        : { orderBy?: loa_ark_gridGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loa_ark_gridGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoa_ark_gridGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loa_ark_grid model
   */
  readonly fields: loa_ark_gridFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loa_ark_grid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loa_ark_gridClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loa_class<T extends loa_ark_grid$loa_classArgs<ExtArgs> = {}>(args?: Subset<T, loa_ark_grid$loa_classArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loa_users_loa_users_core_moonToloa_ark_grid<T extends loa_ark_grid$loa_users_loa_users_core_moonToloa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_ark_grid$loa_users_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loa_users_loa_users_core_starToloa_ark_grid<T extends loa_ark_grid$loa_users_loa_users_core_starToloa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_ark_grid$loa_users_loa_users_core_starToloa_ark_gridArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loa_users_loa_users_core_sunToloa_ark_grid<T extends loa_ark_grid$loa_users_loa_users_core_sunToloa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_ark_grid$loa_users_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the loa_ark_grid model
   */
  interface loa_ark_gridFieldRefs {
    readonly seq: FieldRef<"loa_ark_grid", 'BigInt'>
    readonly core: FieldRef<"loa_ark_grid", 'String'>
    readonly star: FieldRef<"loa_ark_grid", 'String'>
    readonly class: FieldRef<"loa_ark_grid", 'BigInt'>
    readonly order: FieldRef<"loa_ark_grid", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * loa_ark_grid findUnique
   */
  export type loa_ark_gridFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * Filter, which loa_ark_grid to fetch.
     */
    where: loa_ark_gridWhereUniqueInput
  }

  /**
   * loa_ark_grid findUniqueOrThrow
   */
  export type loa_ark_gridFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * Filter, which loa_ark_grid to fetch.
     */
    where: loa_ark_gridWhereUniqueInput
  }

  /**
   * loa_ark_grid findFirst
   */
  export type loa_ark_gridFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * Filter, which loa_ark_grid to fetch.
     */
    where?: loa_ark_gridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_ark_grids to fetch.
     */
    orderBy?: loa_ark_gridOrderByWithRelationInput | loa_ark_gridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_ark_grids.
     */
    cursor?: loa_ark_gridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_ark_grids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_ark_grids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_ark_grids.
     */
    distinct?: Loa_ark_gridScalarFieldEnum | Loa_ark_gridScalarFieldEnum[]
  }

  /**
   * loa_ark_grid findFirstOrThrow
   */
  export type loa_ark_gridFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * Filter, which loa_ark_grid to fetch.
     */
    where?: loa_ark_gridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_ark_grids to fetch.
     */
    orderBy?: loa_ark_gridOrderByWithRelationInput | loa_ark_gridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_ark_grids.
     */
    cursor?: loa_ark_gridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_ark_grids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_ark_grids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_ark_grids.
     */
    distinct?: Loa_ark_gridScalarFieldEnum | Loa_ark_gridScalarFieldEnum[]
  }

  /**
   * loa_ark_grid findMany
   */
  export type loa_ark_gridFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * Filter, which loa_ark_grids to fetch.
     */
    where?: loa_ark_gridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_ark_grids to fetch.
     */
    orderBy?: loa_ark_gridOrderByWithRelationInput | loa_ark_gridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loa_ark_grids.
     */
    cursor?: loa_ark_gridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_ark_grids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_ark_grids.
     */
    skip?: number
    distinct?: Loa_ark_gridScalarFieldEnum | Loa_ark_gridScalarFieldEnum[]
  }

  /**
   * loa_ark_grid create
   */
  export type loa_ark_gridCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * The data needed to create a loa_ark_grid.
     */
    data?: XOR<loa_ark_gridCreateInput, loa_ark_gridUncheckedCreateInput>
  }

  /**
   * loa_ark_grid createMany
   */
  export type loa_ark_gridCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loa_ark_grids.
     */
    data: loa_ark_gridCreateManyInput | loa_ark_gridCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_ark_grid createManyAndReturn
   */
  export type loa_ark_gridCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * The data used to create many loa_ark_grids.
     */
    data: loa_ark_gridCreateManyInput | loa_ark_gridCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * loa_ark_grid update
   */
  export type loa_ark_gridUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * The data needed to update a loa_ark_grid.
     */
    data: XOR<loa_ark_gridUpdateInput, loa_ark_gridUncheckedUpdateInput>
    /**
     * Choose, which loa_ark_grid to update.
     */
    where: loa_ark_gridWhereUniqueInput
  }

  /**
   * loa_ark_grid updateMany
   */
  export type loa_ark_gridUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loa_ark_grids.
     */
    data: XOR<loa_ark_gridUpdateManyMutationInput, loa_ark_gridUncheckedUpdateManyInput>
    /**
     * Filter which loa_ark_grids to update
     */
    where?: loa_ark_gridWhereInput
    /**
     * Limit how many loa_ark_grids to update.
     */
    limit?: number
  }

  /**
   * loa_ark_grid updateManyAndReturn
   */
  export type loa_ark_gridUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * The data used to update loa_ark_grids.
     */
    data: XOR<loa_ark_gridUpdateManyMutationInput, loa_ark_gridUncheckedUpdateManyInput>
    /**
     * Filter which loa_ark_grids to update
     */
    where?: loa_ark_gridWhereInput
    /**
     * Limit how many loa_ark_grids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * loa_ark_grid upsert
   */
  export type loa_ark_gridUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * The filter to search for the loa_ark_grid to update in case it exists.
     */
    where: loa_ark_gridWhereUniqueInput
    /**
     * In case the loa_ark_grid found by the `where` argument doesn't exist, create a new loa_ark_grid with this data.
     */
    create: XOR<loa_ark_gridCreateInput, loa_ark_gridUncheckedCreateInput>
    /**
     * In case the loa_ark_grid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loa_ark_gridUpdateInput, loa_ark_gridUncheckedUpdateInput>
  }

  /**
   * loa_ark_grid delete
   */
  export type loa_ark_gridDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    /**
     * Filter which loa_ark_grid to delete.
     */
    where: loa_ark_gridWhereUniqueInput
  }

  /**
   * loa_ark_grid deleteMany
   */
  export type loa_ark_gridDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_ark_grids to delete
     */
    where?: loa_ark_gridWhereInput
    /**
     * Limit how many loa_ark_grids to delete.
     */
    limit?: number
  }

  /**
   * loa_ark_grid.loa_class
   */
  export type loa_ark_grid$loa_classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    where?: loa_classWhereInput
  }

  /**
   * loa_ark_grid.loa_users_loa_users_core_moonToloa_ark_grid
   */
  export type loa_ark_grid$loa_users_loa_users_core_moonToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    where?: loa_usersWhereInput
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    cursor?: loa_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_ark_grid.loa_users_loa_users_core_starToloa_ark_grid
   */
  export type loa_ark_grid$loa_users_loa_users_core_starToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    where?: loa_usersWhereInput
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    cursor?: loa_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_ark_grid.loa_users_loa_users_core_sunToloa_ark_grid
   */
  export type loa_ark_grid$loa_users_loa_users_core_sunToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    where?: loa_usersWhereInput
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    cursor?: loa_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_ark_grid without action
   */
  export type loa_ark_gridDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
  }


  /**
   * Model loa_class
   */

  export type AggregateLoa_class = {
    _count: Loa_classCountAggregateOutputType | null
    _avg: Loa_classAvgAggregateOutputType | null
    _sum: Loa_classSumAggregateOutputType | null
    _min: Loa_classMinAggregateOutputType | null
    _max: Loa_classMaxAggregateOutputType | null
  }

  export type Loa_classAvgAggregateOutputType = {
    idx: number | null
  }

  export type Loa_classSumAggregateOutputType = {
    idx: bigint | null
  }

  export type Loa_classMinAggregateOutputType = {
    idx: bigint | null
    class_engraving: string | null
    class_root: string | null
    gender: string | null
    class_detail: string | null
  }

  export type Loa_classMaxAggregateOutputType = {
    idx: bigint | null
    class_engraving: string | null
    class_root: string | null
    gender: string | null
    class_detail: string | null
  }

  export type Loa_classCountAggregateOutputType = {
    idx: number
    class_engraving: number
    class_root: number
    gender: number
    class_detail: number
    _all: number
  }


  export type Loa_classAvgAggregateInputType = {
    idx?: true
  }

  export type Loa_classSumAggregateInputType = {
    idx?: true
  }

  export type Loa_classMinAggregateInputType = {
    idx?: true
    class_engraving?: true
    class_root?: true
    gender?: true
    class_detail?: true
  }

  export type Loa_classMaxAggregateInputType = {
    idx?: true
    class_engraving?: true
    class_root?: true
    gender?: true
    class_detail?: true
  }

  export type Loa_classCountAggregateInputType = {
    idx?: true
    class_engraving?: true
    class_root?: true
    gender?: true
    class_detail?: true
    _all?: true
  }

  export type Loa_classAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_class to aggregate.
     */
    where?: loa_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_classes to fetch.
     */
    orderBy?: loa_classOrderByWithRelationInput | loa_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loa_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loa_classes
    **/
    _count?: true | Loa_classCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loa_classAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loa_classSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loa_classMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loa_classMaxAggregateInputType
  }

  export type GetLoa_classAggregateType<T extends Loa_classAggregateArgs> = {
        [P in keyof T & keyof AggregateLoa_class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoa_class[P]>
      : GetScalarType<T[P], AggregateLoa_class[P]>
  }




  export type loa_classGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_classWhereInput
    orderBy?: loa_classOrderByWithAggregationInput | loa_classOrderByWithAggregationInput[]
    by: Loa_classScalarFieldEnum[] | Loa_classScalarFieldEnum
    having?: loa_classScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loa_classCountAggregateInputType | true
    _avg?: Loa_classAvgAggregateInputType
    _sum?: Loa_classSumAggregateInputType
    _min?: Loa_classMinAggregateInputType
    _max?: Loa_classMaxAggregateInputType
  }

  export type Loa_classGroupByOutputType = {
    idx: bigint
    class_engraving: string | null
    class_root: string | null
    gender: string | null
    class_detail: string | null
    _count: Loa_classCountAggregateOutputType | null
    _avg: Loa_classAvgAggregateOutputType | null
    _sum: Loa_classSumAggregateOutputType | null
    _min: Loa_classMinAggregateOutputType | null
    _max: Loa_classMaxAggregateOutputType | null
  }

  type GetLoa_classGroupByPayload<T extends loa_classGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loa_classGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loa_classGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loa_classGroupByOutputType[P]>
            : GetScalarType<T[P], Loa_classGroupByOutputType[P]>
        }
      >
    >


  export type loa_classSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idx?: boolean
    class_engraving?: boolean
    class_root?: boolean
    gender?: boolean
    class_detail?: boolean
    loa_ark_grid?: boolean | loa_class$loa_ark_gridArgs<ExtArgs>
    loa_users?: boolean | loa_class$loa_usersArgs<ExtArgs>
    _count?: boolean | Loa_classCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loa_class"]>

  export type loa_classSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idx?: boolean
    class_engraving?: boolean
    class_root?: boolean
    gender?: boolean
    class_detail?: boolean
  }, ExtArgs["result"]["loa_class"]>

  export type loa_classSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idx?: boolean
    class_engraving?: boolean
    class_root?: boolean
    gender?: boolean
    class_detail?: boolean
  }, ExtArgs["result"]["loa_class"]>

  export type loa_classSelectScalar = {
    idx?: boolean
    class_engraving?: boolean
    class_root?: boolean
    gender?: boolean
    class_detail?: boolean
  }

  export type loa_classOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idx" | "class_engraving" | "class_root" | "gender" | "class_detail", ExtArgs["result"]["loa_class"]>
  export type loa_classInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_ark_grid?: boolean | loa_class$loa_ark_gridArgs<ExtArgs>
    loa_users?: boolean | loa_class$loa_usersArgs<ExtArgs>
    _count?: boolean | Loa_classCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type loa_classIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type loa_classIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $loa_classPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loa_class"
    objects: {
      loa_ark_grid: Prisma.$loa_ark_gridPayload<ExtArgs>[]
      loa_users: Prisma.$loa_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idx: bigint
      class_engraving: string | null
      class_root: string | null
      gender: string | null
      class_detail: string | null
    }, ExtArgs["result"]["loa_class"]>
    composites: {}
  }

  type loa_classGetPayload<S extends boolean | null | undefined | loa_classDefaultArgs> = $Result.GetResult<Prisma.$loa_classPayload, S>

  type loa_classCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loa_classFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loa_classCountAggregateInputType | true
    }

  export interface loa_classDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loa_class'], meta: { name: 'loa_class' } }
    /**
     * Find zero or one Loa_class that matches the filter.
     * @param {loa_classFindUniqueArgs} args - Arguments to find a Loa_class
     * @example
     * // Get one Loa_class
     * const loa_class = await prisma.loa_class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loa_classFindUniqueArgs>(args: SelectSubset<T, loa_classFindUniqueArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loa_class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loa_classFindUniqueOrThrowArgs} args - Arguments to find a Loa_class
     * @example
     * // Get one Loa_class
     * const loa_class = await prisma.loa_class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loa_classFindUniqueOrThrowArgs>(args: SelectSubset<T, loa_classFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_classFindFirstArgs} args - Arguments to find a Loa_class
     * @example
     * // Get one Loa_class
     * const loa_class = await prisma.loa_class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loa_classFindFirstArgs>(args?: SelectSubset<T, loa_classFindFirstArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_classFindFirstOrThrowArgs} args - Arguments to find a Loa_class
     * @example
     * // Get one Loa_class
     * const loa_class = await prisma.loa_class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loa_classFindFirstOrThrowArgs>(args?: SelectSubset<T, loa_classFindFirstOrThrowArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loa_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_classFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loa_classes
     * const loa_classes = await prisma.loa_class.findMany()
     * 
     * // Get first 10 Loa_classes
     * const loa_classes = await prisma.loa_class.findMany({ take: 10 })
     * 
     * // Only select the `idx`
     * const loa_classWithIdxOnly = await prisma.loa_class.findMany({ select: { idx: true } })
     * 
     */
    findMany<T extends loa_classFindManyArgs>(args?: SelectSubset<T, loa_classFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loa_class.
     * @param {loa_classCreateArgs} args - Arguments to create a Loa_class.
     * @example
     * // Create one Loa_class
     * const Loa_class = await prisma.loa_class.create({
     *   data: {
     *     // ... data to create a Loa_class
     *   }
     * })
     * 
     */
    create<T extends loa_classCreateArgs>(args: SelectSubset<T, loa_classCreateArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loa_classes.
     * @param {loa_classCreateManyArgs} args - Arguments to create many Loa_classes.
     * @example
     * // Create many Loa_classes
     * const loa_class = await prisma.loa_class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loa_classCreateManyArgs>(args?: SelectSubset<T, loa_classCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loa_classes and returns the data saved in the database.
     * @param {loa_classCreateManyAndReturnArgs} args - Arguments to create many Loa_classes.
     * @example
     * // Create many Loa_classes
     * const loa_class = await prisma.loa_class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loa_classes and only return the `idx`
     * const loa_classWithIdxOnly = await prisma.loa_class.createManyAndReturn({
     *   select: { idx: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loa_classCreateManyAndReturnArgs>(args?: SelectSubset<T, loa_classCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loa_class.
     * @param {loa_classDeleteArgs} args - Arguments to delete one Loa_class.
     * @example
     * // Delete one Loa_class
     * const Loa_class = await prisma.loa_class.delete({
     *   where: {
     *     // ... filter to delete one Loa_class
     *   }
     * })
     * 
     */
    delete<T extends loa_classDeleteArgs>(args: SelectSubset<T, loa_classDeleteArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loa_class.
     * @param {loa_classUpdateArgs} args - Arguments to update one Loa_class.
     * @example
     * // Update one Loa_class
     * const loa_class = await prisma.loa_class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loa_classUpdateArgs>(args: SelectSubset<T, loa_classUpdateArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loa_classes.
     * @param {loa_classDeleteManyArgs} args - Arguments to filter Loa_classes to delete.
     * @example
     * // Delete a few Loa_classes
     * const { count } = await prisma.loa_class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loa_classDeleteManyArgs>(args?: SelectSubset<T, loa_classDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_classUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loa_classes
     * const loa_class = await prisma.loa_class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loa_classUpdateManyArgs>(args: SelectSubset<T, loa_classUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_classes and returns the data updated in the database.
     * @param {loa_classUpdateManyAndReturnArgs} args - Arguments to update many Loa_classes.
     * @example
     * // Update many Loa_classes
     * const loa_class = await prisma.loa_class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loa_classes and only return the `idx`
     * const loa_classWithIdxOnly = await prisma.loa_class.updateManyAndReturn({
     *   select: { idx: true },
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
    updateManyAndReturn<T extends loa_classUpdateManyAndReturnArgs>(args: SelectSubset<T, loa_classUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loa_class.
     * @param {loa_classUpsertArgs} args - Arguments to update or create a Loa_class.
     * @example
     * // Update or create a Loa_class
     * const loa_class = await prisma.loa_class.upsert({
     *   create: {
     *     // ... data to create a Loa_class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loa_class we want to update
     *   }
     * })
     */
    upsert<T extends loa_classUpsertArgs>(args: SelectSubset<T, loa_classUpsertArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loa_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_classCountArgs} args - Arguments to filter Loa_classes to count.
     * @example
     * // Count the number of Loa_classes
     * const count = await prisma.loa_class.count({
     *   where: {
     *     // ... the filter for the Loa_classes we want to count
     *   }
     * })
    **/
    count<T extends loa_classCountArgs>(
      args?: Subset<T, loa_classCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loa_classCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loa_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loa_classAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Loa_classAggregateArgs>(args: Subset<T, Loa_classAggregateArgs>): Prisma.PrismaPromise<GetLoa_classAggregateType<T>>

    /**
     * Group by Loa_class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_classGroupByArgs} args - Group by arguments.
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
      T extends loa_classGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loa_classGroupByArgs['orderBy'] }
        : { orderBy?: loa_classGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loa_classGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoa_classGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loa_class model
   */
  readonly fields: loa_classFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loa_class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loa_classClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loa_ark_grid<T extends loa_class$loa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_class$loa_ark_gridArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loa_users<T extends loa_class$loa_usersArgs<ExtArgs> = {}>(args?: Subset<T, loa_class$loa_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the loa_class model
   */
  interface loa_classFieldRefs {
    readonly idx: FieldRef<"loa_class", 'BigInt'>
    readonly class_engraving: FieldRef<"loa_class", 'String'>
    readonly class_root: FieldRef<"loa_class", 'String'>
    readonly gender: FieldRef<"loa_class", 'String'>
    readonly class_detail: FieldRef<"loa_class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * loa_class findUnique
   */
  export type loa_classFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * Filter, which loa_class to fetch.
     */
    where: loa_classWhereUniqueInput
  }

  /**
   * loa_class findUniqueOrThrow
   */
  export type loa_classFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * Filter, which loa_class to fetch.
     */
    where: loa_classWhereUniqueInput
  }

  /**
   * loa_class findFirst
   */
  export type loa_classFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * Filter, which loa_class to fetch.
     */
    where?: loa_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_classes to fetch.
     */
    orderBy?: loa_classOrderByWithRelationInput | loa_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_classes.
     */
    cursor?: loa_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_classes.
     */
    distinct?: Loa_classScalarFieldEnum | Loa_classScalarFieldEnum[]
  }

  /**
   * loa_class findFirstOrThrow
   */
  export type loa_classFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * Filter, which loa_class to fetch.
     */
    where?: loa_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_classes to fetch.
     */
    orderBy?: loa_classOrderByWithRelationInput | loa_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_classes.
     */
    cursor?: loa_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_classes.
     */
    distinct?: Loa_classScalarFieldEnum | Loa_classScalarFieldEnum[]
  }

  /**
   * loa_class findMany
   */
  export type loa_classFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * Filter, which loa_classes to fetch.
     */
    where?: loa_classWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_classes to fetch.
     */
    orderBy?: loa_classOrderByWithRelationInput | loa_classOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loa_classes.
     */
    cursor?: loa_classWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_classes.
     */
    skip?: number
    distinct?: Loa_classScalarFieldEnum | Loa_classScalarFieldEnum[]
  }

  /**
   * loa_class create
   */
  export type loa_classCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * The data needed to create a loa_class.
     */
    data?: XOR<loa_classCreateInput, loa_classUncheckedCreateInput>
  }

  /**
   * loa_class createMany
   */
  export type loa_classCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loa_classes.
     */
    data: loa_classCreateManyInput | loa_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_class createManyAndReturn
   */
  export type loa_classCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * The data used to create many loa_classes.
     */
    data: loa_classCreateManyInput | loa_classCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_class update
   */
  export type loa_classUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * The data needed to update a loa_class.
     */
    data: XOR<loa_classUpdateInput, loa_classUncheckedUpdateInput>
    /**
     * Choose, which loa_class to update.
     */
    where: loa_classWhereUniqueInput
  }

  /**
   * loa_class updateMany
   */
  export type loa_classUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loa_classes.
     */
    data: XOR<loa_classUpdateManyMutationInput, loa_classUncheckedUpdateManyInput>
    /**
     * Filter which loa_classes to update
     */
    where?: loa_classWhereInput
    /**
     * Limit how many loa_classes to update.
     */
    limit?: number
  }

  /**
   * loa_class updateManyAndReturn
   */
  export type loa_classUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * The data used to update loa_classes.
     */
    data: XOR<loa_classUpdateManyMutationInput, loa_classUncheckedUpdateManyInput>
    /**
     * Filter which loa_classes to update
     */
    where?: loa_classWhereInput
    /**
     * Limit how many loa_classes to update.
     */
    limit?: number
  }

  /**
   * loa_class upsert
   */
  export type loa_classUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * The filter to search for the loa_class to update in case it exists.
     */
    where: loa_classWhereUniqueInput
    /**
     * In case the loa_class found by the `where` argument doesn't exist, create a new loa_class with this data.
     */
    create: XOR<loa_classCreateInput, loa_classUncheckedCreateInput>
    /**
     * In case the loa_class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loa_classUpdateInput, loa_classUncheckedUpdateInput>
  }

  /**
   * loa_class delete
   */
  export type loa_classDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    /**
     * Filter which loa_class to delete.
     */
    where: loa_classWhereUniqueInput
  }

  /**
   * loa_class deleteMany
   */
  export type loa_classDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_classes to delete
     */
    where?: loa_classWhereInput
    /**
     * Limit how many loa_classes to delete.
     */
    limit?: number
  }

  /**
   * loa_class.loa_ark_grid
   */
  export type loa_class$loa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    where?: loa_ark_gridWhereInput
    orderBy?: loa_ark_gridOrderByWithRelationInput | loa_ark_gridOrderByWithRelationInput[]
    cursor?: loa_ark_gridWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Loa_ark_gridScalarFieldEnum | Loa_ark_gridScalarFieldEnum[]
  }

  /**
   * loa_class.loa_users
   */
  export type loa_class$loa_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    where?: loa_usersWhereInput
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    cursor?: loa_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_class without action
   */
  export type loa_classDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
  }


  /**
   * Model loa_class_summaries
   */

  export type AggregateLoa_class_summaries = {
    _count: Loa_class_summariesCountAggregateOutputType | null
    _min: Loa_class_summariesMinAggregateOutputType | null
    _max: Loa_class_summariesMaxAggregateOutputType | null
  }

  export type Loa_class_summariesMinAggregateOutputType = {
    class_name: string | null
    summary: string | null
    updated_at: Date | null
  }

  export type Loa_class_summariesMaxAggregateOutputType = {
    class_name: string | null
    summary: string | null
    updated_at: Date | null
  }

  export type Loa_class_summariesCountAggregateOutputType = {
    class_name: number
    summary: number
    updated_at: number
    _all: number
  }


  export type Loa_class_summariesMinAggregateInputType = {
    class_name?: true
    summary?: true
    updated_at?: true
  }

  export type Loa_class_summariesMaxAggregateInputType = {
    class_name?: true
    summary?: true
    updated_at?: true
  }

  export type Loa_class_summariesCountAggregateInputType = {
    class_name?: true
    summary?: true
    updated_at?: true
    _all?: true
  }

  export type Loa_class_summariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_class_summaries to aggregate.
     */
    where?: loa_class_summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_class_summaries to fetch.
     */
    orderBy?: loa_class_summariesOrderByWithRelationInput | loa_class_summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loa_class_summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_class_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_class_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loa_class_summaries
    **/
    _count?: true | Loa_class_summariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loa_class_summariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loa_class_summariesMaxAggregateInputType
  }

  export type GetLoa_class_summariesAggregateType<T extends Loa_class_summariesAggregateArgs> = {
        [P in keyof T & keyof AggregateLoa_class_summaries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoa_class_summaries[P]>
      : GetScalarType<T[P], AggregateLoa_class_summaries[P]>
  }




  export type loa_class_summariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_class_summariesWhereInput
    orderBy?: loa_class_summariesOrderByWithAggregationInput | loa_class_summariesOrderByWithAggregationInput[]
    by: Loa_class_summariesScalarFieldEnum[] | Loa_class_summariesScalarFieldEnum
    having?: loa_class_summariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loa_class_summariesCountAggregateInputType | true
    _min?: Loa_class_summariesMinAggregateInputType
    _max?: Loa_class_summariesMaxAggregateInputType
  }

  export type Loa_class_summariesGroupByOutputType = {
    class_name: string
    summary: string | null
    updated_at: Date | null
    _count: Loa_class_summariesCountAggregateOutputType | null
    _min: Loa_class_summariesMinAggregateOutputType | null
    _max: Loa_class_summariesMaxAggregateOutputType | null
  }

  type GetLoa_class_summariesGroupByPayload<T extends loa_class_summariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loa_class_summariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loa_class_summariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loa_class_summariesGroupByOutputType[P]>
            : GetScalarType<T[P], Loa_class_summariesGroupByOutputType[P]>
        }
      >
    >


  export type loa_class_summariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_name?: boolean
    summary?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["loa_class_summaries"]>

  export type loa_class_summariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_name?: boolean
    summary?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["loa_class_summaries"]>

  export type loa_class_summariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_name?: boolean
    summary?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["loa_class_summaries"]>

  export type loa_class_summariesSelectScalar = {
    class_name?: boolean
    summary?: boolean
    updated_at?: boolean
  }

  export type loa_class_summariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"class_name" | "summary" | "updated_at", ExtArgs["result"]["loa_class_summaries"]>

  export type $loa_class_summariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loa_class_summaries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      class_name: string
      summary: string | null
      updated_at: Date | null
    }, ExtArgs["result"]["loa_class_summaries"]>
    composites: {}
  }

  type loa_class_summariesGetPayload<S extends boolean | null | undefined | loa_class_summariesDefaultArgs> = $Result.GetResult<Prisma.$loa_class_summariesPayload, S>

  type loa_class_summariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loa_class_summariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loa_class_summariesCountAggregateInputType | true
    }

  export interface loa_class_summariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loa_class_summaries'], meta: { name: 'loa_class_summaries' } }
    /**
     * Find zero or one Loa_class_summaries that matches the filter.
     * @param {loa_class_summariesFindUniqueArgs} args - Arguments to find a Loa_class_summaries
     * @example
     * // Get one Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loa_class_summariesFindUniqueArgs>(args: SelectSubset<T, loa_class_summariesFindUniqueArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loa_class_summaries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loa_class_summariesFindUniqueOrThrowArgs} args - Arguments to find a Loa_class_summaries
     * @example
     * // Get one Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loa_class_summariesFindUniqueOrThrowArgs>(args: SelectSubset<T, loa_class_summariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_class_summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_class_summariesFindFirstArgs} args - Arguments to find a Loa_class_summaries
     * @example
     * // Get one Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loa_class_summariesFindFirstArgs>(args?: SelectSubset<T, loa_class_summariesFindFirstArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_class_summaries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_class_summariesFindFirstOrThrowArgs} args - Arguments to find a Loa_class_summaries
     * @example
     * // Get one Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loa_class_summariesFindFirstOrThrowArgs>(args?: SelectSubset<T, loa_class_summariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loa_class_summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_class_summariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.findMany()
     * 
     * // Get first 10 Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.findMany({ take: 10 })
     * 
     * // Only select the `class_name`
     * const loa_class_summariesWithClass_nameOnly = await prisma.loa_class_summaries.findMany({ select: { class_name: true } })
     * 
     */
    findMany<T extends loa_class_summariesFindManyArgs>(args?: SelectSubset<T, loa_class_summariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loa_class_summaries.
     * @param {loa_class_summariesCreateArgs} args - Arguments to create a Loa_class_summaries.
     * @example
     * // Create one Loa_class_summaries
     * const Loa_class_summaries = await prisma.loa_class_summaries.create({
     *   data: {
     *     // ... data to create a Loa_class_summaries
     *   }
     * })
     * 
     */
    create<T extends loa_class_summariesCreateArgs>(args: SelectSubset<T, loa_class_summariesCreateArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loa_class_summaries.
     * @param {loa_class_summariesCreateManyArgs} args - Arguments to create many Loa_class_summaries.
     * @example
     * // Create many Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loa_class_summariesCreateManyArgs>(args?: SelectSubset<T, loa_class_summariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loa_class_summaries and returns the data saved in the database.
     * @param {loa_class_summariesCreateManyAndReturnArgs} args - Arguments to create many Loa_class_summaries.
     * @example
     * // Create many Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loa_class_summaries and only return the `class_name`
     * const loa_class_summariesWithClass_nameOnly = await prisma.loa_class_summaries.createManyAndReturn({
     *   select: { class_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loa_class_summariesCreateManyAndReturnArgs>(args?: SelectSubset<T, loa_class_summariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loa_class_summaries.
     * @param {loa_class_summariesDeleteArgs} args - Arguments to delete one Loa_class_summaries.
     * @example
     * // Delete one Loa_class_summaries
     * const Loa_class_summaries = await prisma.loa_class_summaries.delete({
     *   where: {
     *     // ... filter to delete one Loa_class_summaries
     *   }
     * })
     * 
     */
    delete<T extends loa_class_summariesDeleteArgs>(args: SelectSubset<T, loa_class_summariesDeleteArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loa_class_summaries.
     * @param {loa_class_summariesUpdateArgs} args - Arguments to update one Loa_class_summaries.
     * @example
     * // Update one Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loa_class_summariesUpdateArgs>(args: SelectSubset<T, loa_class_summariesUpdateArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loa_class_summaries.
     * @param {loa_class_summariesDeleteManyArgs} args - Arguments to filter Loa_class_summaries to delete.
     * @example
     * // Delete a few Loa_class_summaries
     * const { count } = await prisma.loa_class_summaries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loa_class_summariesDeleteManyArgs>(args?: SelectSubset<T, loa_class_summariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_class_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_class_summariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loa_class_summariesUpdateManyArgs>(args: SelectSubset<T, loa_class_summariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_class_summaries and returns the data updated in the database.
     * @param {loa_class_summariesUpdateManyAndReturnArgs} args - Arguments to update many Loa_class_summaries.
     * @example
     * // Update many Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loa_class_summaries and only return the `class_name`
     * const loa_class_summariesWithClass_nameOnly = await prisma.loa_class_summaries.updateManyAndReturn({
     *   select: { class_name: true },
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
    updateManyAndReturn<T extends loa_class_summariesUpdateManyAndReturnArgs>(args: SelectSubset<T, loa_class_summariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loa_class_summaries.
     * @param {loa_class_summariesUpsertArgs} args - Arguments to update or create a Loa_class_summaries.
     * @example
     * // Update or create a Loa_class_summaries
     * const loa_class_summaries = await prisma.loa_class_summaries.upsert({
     *   create: {
     *     // ... data to create a Loa_class_summaries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loa_class_summaries we want to update
     *   }
     * })
     */
    upsert<T extends loa_class_summariesUpsertArgs>(args: SelectSubset<T, loa_class_summariesUpsertArgs<ExtArgs>>): Prisma__loa_class_summariesClient<$Result.GetResult<Prisma.$loa_class_summariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loa_class_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_class_summariesCountArgs} args - Arguments to filter Loa_class_summaries to count.
     * @example
     * // Count the number of Loa_class_summaries
     * const count = await prisma.loa_class_summaries.count({
     *   where: {
     *     // ... the filter for the Loa_class_summaries we want to count
     *   }
     * })
    **/
    count<T extends loa_class_summariesCountArgs>(
      args?: Subset<T, loa_class_summariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loa_class_summariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loa_class_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loa_class_summariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Loa_class_summariesAggregateArgs>(args: Subset<T, Loa_class_summariesAggregateArgs>): Prisma.PrismaPromise<GetLoa_class_summariesAggregateType<T>>

    /**
     * Group by Loa_class_summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_class_summariesGroupByArgs} args - Group by arguments.
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
      T extends loa_class_summariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loa_class_summariesGroupByArgs['orderBy'] }
        : { orderBy?: loa_class_summariesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loa_class_summariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoa_class_summariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loa_class_summaries model
   */
  readonly fields: loa_class_summariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loa_class_summaries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loa_class_summariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the loa_class_summaries model
   */
  interface loa_class_summariesFieldRefs {
    readonly class_name: FieldRef<"loa_class_summaries", 'String'>
    readonly summary: FieldRef<"loa_class_summaries", 'String'>
    readonly updated_at: FieldRef<"loa_class_summaries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loa_class_summaries findUnique
   */
  export type loa_class_summariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * Filter, which loa_class_summaries to fetch.
     */
    where: loa_class_summariesWhereUniqueInput
  }

  /**
   * loa_class_summaries findUniqueOrThrow
   */
  export type loa_class_summariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * Filter, which loa_class_summaries to fetch.
     */
    where: loa_class_summariesWhereUniqueInput
  }

  /**
   * loa_class_summaries findFirst
   */
  export type loa_class_summariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * Filter, which loa_class_summaries to fetch.
     */
    where?: loa_class_summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_class_summaries to fetch.
     */
    orderBy?: loa_class_summariesOrderByWithRelationInput | loa_class_summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_class_summaries.
     */
    cursor?: loa_class_summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_class_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_class_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_class_summaries.
     */
    distinct?: Loa_class_summariesScalarFieldEnum | Loa_class_summariesScalarFieldEnum[]
  }

  /**
   * loa_class_summaries findFirstOrThrow
   */
  export type loa_class_summariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * Filter, which loa_class_summaries to fetch.
     */
    where?: loa_class_summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_class_summaries to fetch.
     */
    orderBy?: loa_class_summariesOrderByWithRelationInput | loa_class_summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_class_summaries.
     */
    cursor?: loa_class_summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_class_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_class_summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_class_summaries.
     */
    distinct?: Loa_class_summariesScalarFieldEnum | Loa_class_summariesScalarFieldEnum[]
  }

  /**
   * loa_class_summaries findMany
   */
  export type loa_class_summariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * Filter, which loa_class_summaries to fetch.
     */
    where?: loa_class_summariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_class_summaries to fetch.
     */
    orderBy?: loa_class_summariesOrderByWithRelationInput | loa_class_summariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loa_class_summaries.
     */
    cursor?: loa_class_summariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_class_summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_class_summaries.
     */
    skip?: number
    distinct?: Loa_class_summariesScalarFieldEnum | Loa_class_summariesScalarFieldEnum[]
  }

  /**
   * loa_class_summaries create
   */
  export type loa_class_summariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * The data needed to create a loa_class_summaries.
     */
    data: XOR<loa_class_summariesCreateInput, loa_class_summariesUncheckedCreateInput>
  }

  /**
   * loa_class_summaries createMany
   */
  export type loa_class_summariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loa_class_summaries.
     */
    data: loa_class_summariesCreateManyInput | loa_class_summariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_class_summaries createManyAndReturn
   */
  export type loa_class_summariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * The data used to create many loa_class_summaries.
     */
    data: loa_class_summariesCreateManyInput | loa_class_summariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_class_summaries update
   */
  export type loa_class_summariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * The data needed to update a loa_class_summaries.
     */
    data: XOR<loa_class_summariesUpdateInput, loa_class_summariesUncheckedUpdateInput>
    /**
     * Choose, which loa_class_summaries to update.
     */
    where: loa_class_summariesWhereUniqueInput
  }

  /**
   * loa_class_summaries updateMany
   */
  export type loa_class_summariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loa_class_summaries.
     */
    data: XOR<loa_class_summariesUpdateManyMutationInput, loa_class_summariesUncheckedUpdateManyInput>
    /**
     * Filter which loa_class_summaries to update
     */
    where?: loa_class_summariesWhereInput
    /**
     * Limit how many loa_class_summaries to update.
     */
    limit?: number
  }

  /**
   * loa_class_summaries updateManyAndReturn
   */
  export type loa_class_summariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * The data used to update loa_class_summaries.
     */
    data: XOR<loa_class_summariesUpdateManyMutationInput, loa_class_summariesUncheckedUpdateManyInput>
    /**
     * Filter which loa_class_summaries to update
     */
    where?: loa_class_summariesWhereInput
    /**
     * Limit how many loa_class_summaries to update.
     */
    limit?: number
  }

  /**
   * loa_class_summaries upsert
   */
  export type loa_class_summariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * The filter to search for the loa_class_summaries to update in case it exists.
     */
    where: loa_class_summariesWhereUniqueInput
    /**
     * In case the loa_class_summaries found by the `where` argument doesn't exist, create a new loa_class_summaries with this data.
     */
    create: XOR<loa_class_summariesCreateInput, loa_class_summariesUncheckedCreateInput>
    /**
     * In case the loa_class_summaries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loa_class_summariesUpdateInput, loa_class_summariesUncheckedUpdateInput>
  }

  /**
   * loa_class_summaries delete
   */
  export type loa_class_summariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
    /**
     * Filter which loa_class_summaries to delete.
     */
    where: loa_class_summariesWhereUniqueInput
  }

  /**
   * loa_class_summaries deleteMany
   */
  export type loa_class_summariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_class_summaries to delete
     */
    where?: loa_class_summariesWhereInput
    /**
     * Limit how many loa_class_summaries to delete.
     */
    limit?: number
  }

  /**
   * loa_class_summaries without action
   */
  export type loa_class_summariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class_summaries
     */
    select?: loa_class_summariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class_summaries
     */
    omit?: loa_class_summariesOmit<ExtArgs> | null
  }


  /**
   * Model loa_sites
   */

  export type AggregateLoa_sites = {
    _count: Loa_sitesCountAggregateOutputType | null
    _avg: Loa_sitesAvgAggregateOutputType | null
    _sum: Loa_sitesSumAggregateOutputType | null
    _min: Loa_sitesMinAggregateOutputType | null
    _max: Loa_sitesMaxAggregateOutputType | null
  }

  export type Loa_sitesAvgAggregateOutputType = {
    seq: number | null
    last_status: number | null
  }

  export type Loa_sitesSumAggregateOutputType = {
    seq: bigint | null
    last_status: number | null
  }

  export type Loa_sitesMinAggregateOutputType = {
    seq: bigint | null
    name: string | null
    href: string | null
    category: string | null
    description: string | null
    icon: string | null
    is_active: boolean | null
    last_title: string | null
    last_status: number | null
    checked_at: Date | null
  }

  export type Loa_sitesMaxAggregateOutputType = {
    seq: bigint | null
    name: string | null
    href: string | null
    category: string | null
    description: string | null
    icon: string | null
    is_active: boolean | null
    last_title: string | null
    last_status: number | null
    checked_at: Date | null
  }

  export type Loa_sitesCountAggregateOutputType = {
    seq: number
    name: number
    href: number
    category: number
    description: number
    icon: number
    is_active: number
    last_title: number
    last_status: number
    checked_at: number
    _all: number
  }


  export type Loa_sitesAvgAggregateInputType = {
    seq?: true
    last_status?: true
  }

  export type Loa_sitesSumAggregateInputType = {
    seq?: true
    last_status?: true
  }

  export type Loa_sitesMinAggregateInputType = {
    seq?: true
    name?: true
    href?: true
    category?: true
    description?: true
    icon?: true
    is_active?: true
    last_title?: true
    last_status?: true
    checked_at?: true
  }

  export type Loa_sitesMaxAggregateInputType = {
    seq?: true
    name?: true
    href?: true
    category?: true
    description?: true
    icon?: true
    is_active?: true
    last_title?: true
    last_status?: true
    checked_at?: true
  }

  export type Loa_sitesCountAggregateInputType = {
    seq?: true
    name?: true
    href?: true
    category?: true
    description?: true
    icon?: true
    is_active?: true
    last_title?: true
    last_status?: true
    checked_at?: true
    _all?: true
  }

  export type Loa_sitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_sites to aggregate.
     */
    where?: loa_sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_sites to fetch.
     */
    orderBy?: loa_sitesOrderByWithRelationInput | loa_sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loa_sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loa_sites
    **/
    _count?: true | Loa_sitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loa_sitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loa_sitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loa_sitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loa_sitesMaxAggregateInputType
  }

  export type GetLoa_sitesAggregateType<T extends Loa_sitesAggregateArgs> = {
        [P in keyof T & keyof AggregateLoa_sites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoa_sites[P]>
      : GetScalarType<T[P], AggregateLoa_sites[P]>
  }




  export type loa_sitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_sitesWhereInput
    orderBy?: loa_sitesOrderByWithAggregationInput | loa_sitesOrderByWithAggregationInput[]
    by: Loa_sitesScalarFieldEnum[] | Loa_sitesScalarFieldEnum
    having?: loa_sitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loa_sitesCountAggregateInputType | true
    _avg?: Loa_sitesAvgAggregateInputType
    _sum?: Loa_sitesSumAggregateInputType
    _min?: Loa_sitesMinAggregateInputType
    _max?: Loa_sitesMaxAggregateInputType
  }

  export type Loa_sitesGroupByOutputType = {
    seq: bigint
    name: string
    href: string
    category: string | null
    description: string | null
    icon: string | null
    is_active: boolean | null
    last_title: string | null
    last_status: number | null
    checked_at: Date | null
    _count: Loa_sitesCountAggregateOutputType | null
    _avg: Loa_sitesAvgAggregateOutputType | null
    _sum: Loa_sitesSumAggregateOutputType | null
    _min: Loa_sitesMinAggregateOutputType | null
    _max: Loa_sitesMaxAggregateOutputType | null
  }

  type GetLoa_sitesGroupByPayload<T extends loa_sitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loa_sitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loa_sitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loa_sitesGroupByOutputType[P]>
            : GetScalarType<T[P], Loa_sitesGroupByOutputType[P]>
        }
      >
    >


  export type loa_sitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    name?: boolean
    href?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    is_active?: boolean
    last_title?: boolean
    last_status?: boolean
    checked_at?: boolean
  }, ExtArgs["result"]["loa_sites"]>

  export type loa_sitesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    name?: boolean
    href?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    is_active?: boolean
    last_title?: boolean
    last_status?: boolean
    checked_at?: boolean
  }, ExtArgs["result"]["loa_sites"]>

  export type loa_sitesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    name?: boolean
    href?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    is_active?: boolean
    last_title?: boolean
    last_status?: boolean
    checked_at?: boolean
  }, ExtArgs["result"]["loa_sites"]>

  export type loa_sitesSelectScalar = {
    seq?: boolean
    name?: boolean
    href?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    is_active?: boolean
    last_title?: boolean
    last_status?: boolean
    checked_at?: boolean
  }

  export type loa_sitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seq" | "name" | "href" | "category" | "description" | "icon" | "is_active" | "last_title" | "last_status" | "checked_at", ExtArgs["result"]["loa_sites"]>

  export type $loa_sitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loa_sites"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      seq: bigint
      name: string
      href: string
      category: string | null
      description: string | null
      icon: string | null
      is_active: boolean | null
      last_title: string | null
      last_status: number | null
      checked_at: Date | null
    }, ExtArgs["result"]["loa_sites"]>
    composites: {}
  }

  type loa_sitesGetPayload<S extends boolean | null | undefined | loa_sitesDefaultArgs> = $Result.GetResult<Prisma.$loa_sitesPayload, S>

  type loa_sitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loa_sitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loa_sitesCountAggregateInputType | true
    }

  export interface loa_sitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loa_sites'], meta: { name: 'loa_sites' } }
    /**
     * Find zero or one Loa_sites that matches the filter.
     * @param {loa_sitesFindUniqueArgs} args - Arguments to find a Loa_sites
     * @example
     * // Get one Loa_sites
     * const loa_sites = await prisma.loa_sites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loa_sitesFindUniqueArgs>(args: SelectSubset<T, loa_sitesFindUniqueArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loa_sites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loa_sitesFindUniqueOrThrowArgs} args - Arguments to find a Loa_sites
     * @example
     * // Get one Loa_sites
     * const loa_sites = await prisma.loa_sites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loa_sitesFindUniqueOrThrowArgs>(args: SelectSubset<T, loa_sitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_sitesFindFirstArgs} args - Arguments to find a Loa_sites
     * @example
     * // Get one Loa_sites
     * const loa_sites = await prisma.loa_sites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loa_sitesFindFirstArgs>(args?: SelectSubset<T, loa_sitesFindFirstArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_sites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_sitesFindFirstOrThrowArgs} args - Arguments to find a Loa_sites
     * @example
     * // Get one Loa_sites
     * const loa_sites = await prisma.loa_sites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loa_sitesFindFirstOrThrowArgs>(args?: SelectSubset<T, loa_sitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loa_sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_sitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loa_sites
     * const loa_sites = await prisma.loa_sites.findMany()
     * 
     * // Get first 10 Loa_sites
     * const loa_sites = await prisma.loa_sites.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const loa_sitesWithSeqOnly = await prisma.loa_sites.findMany({ select: { seq: true } })
     * 
     */
    findMany<T extends loa_sitesFindManyArgs>(args?: SelectSubset<T, loa_sitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loa_sites.
     * @param {loa_sitesCreateArgs} args - Arguments to create a Loa_sites.
     * @example
     * // Create one Loa_sites
     * const Loa_sites = await prisma.loa_sites.create({
     *   data: {
     *     // ... data to create a Loa_sites
     *   }
     * })
     * 
     */
    create<T extends loa_sitesCreateArgs>(args: SelectSubset<T, loa_sitesCreateArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loa_sites.
     * @param {loa_sitesCreateManyArgs} args - Arguments to create many Loa_sites.
     * @example
     * // Create many Loa_sites
     * const loa_sites = await prisma.loa_sites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loa_sitesCreateManyArgs>(args?: SelectSubset<T, loa_sitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loa_sites and returns the data saved in the database.
     * @param {loa_sitesCreateManyAndReturnArgs} args - Arguments to create many Loa_sites.
     * @example
     * // Create many Loa_sites
     * const loa_sites = await prisma.loa_sites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loa_sites and only return the `seq`
     * const loa_sitesWithSeqOnly = await prisma.loa_sites.createManyAndReturn({
     *   select: { seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loa_sitesCreateManyAndReturnArgs>(args?: SelectSubset<T, loa_sitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loa_sites.
     * @param {loa_sitesDeleteArgs} args - Arguments to delete one Loa_sites.
     * @example
     * // Delete one Loa_sites
     * const Loa_sites = await prisma.loa_sites.delete({
     *   where: {
     *     // ... filter to delete one Loa_sites
     *   }
     * })
     * 
     */
    delete<T extends loa_sitesDeleteArgs>(args: SelectSubset<T, loa_sitesDeleteArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loa_sites.
     * @param {loa_sitesUpdateArgs} args - Arguments to update one Loa_sites.
     * @example
     * // Update one Loa_sites
     * const loa_sites = await prisma.loa_sites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loa_sitesUpdateArgs>(args: SelectSubset<T, loa_sitesUpdateArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loa_sites.
     * @param {loa_sitesDeleteManyArgs} args - Arguments to filter Loa_sites to delete.
     * @example
     * // Delete a few Loa_sites
     * const { count } = await prisma.loa_sites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loa_sitesDeleteManyArgs>(args?: SelectSubset<T, loa_sitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_sitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loa_sites
     * const loa_sites = await prisma.loa_sites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loa_sitesUpdateManyArgs>(args: SelectSubset<T, loa_sitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_sites and returns the data updated in the database.
     * @param {loa_sitesUpdateManyAndReturnArgs} args - Arguments to update many Loa_sites.
     * @example
     * // Update many Loa_sites
     * const loa_sites = await prisma.loa_sites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loa_sites and only return the `seq`
     * const loa_sitesWithSeqOnly = await prisma.loa_sites.updateManyAndReturn({
     *   select: { seq: true },
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
    updateManyAndReturn<T extends loa_sitesUpdateManyAndReturnArgs>(args: SelectSubset<T, loa_sitesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loa_sites.
     * @param {loa_sitesUpsertArgs} args - Arguments to update or create a Loa_sites.
     * @example
     * // Update or create a Loa_sites
     * const loa_sites = await prisma.loa_sites.upsert({
     *   create: {
     *     // ... data to create a Loa_sites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loa_sites we want to update
     *   }
     * })
     */
    upsert<T extends loa_sitesUpsertArgs>(args: SelectSubset<T, loa_sitesUpsertArgs<ExtArgs>>): Prisma__loa_sitesClient<$Result.GetResult<Prisma.$loa_sitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loa_sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_sitesCountArgs} args - Arguments to filter Loa_sites to count.
     * @example
     * // Count the number of Loa_sites
     * const count = await prisma.loa_sites.count({
     *   where: {
     *     // ... the filter for the Loa_sites we want to count
     *   }
     * })
    **/
    count<T extends loa_sitesCountArgs>(
      args?: Subset<T, loa_sitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loa_sitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loa_sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loa_sitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Loa_sitesAggregateArgs>(args: Subset<T, Loa_sitesAggregateArgs>): Prisma.PrismaPromise<GetLoa_sitesAggregateType<T>>

    /**
     * Group by Loa_sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_sitesGroupByArgs} args - Group by arguments.
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
      T extends loa_sitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loa_sitesGroupByArgs['orderBy'] }
        : { orderBy?: loa_sitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loa_sitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoa_sitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loa_sites model
   */
  readonly fields: loa_sitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loa_sites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loa_sitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the loa_sites model
   */
  interface loa_sitesFieldRefs {
    readonly seq: FieldRef<"loa_sites", 'BigInt'>
    readonly name: FieldRef<"loa_sites", 'String'>
    readonly href: FieldRef<"loa_sites", 'String'>
    readonly category: FieldRef<"loa_sites", 'String'>
    readonly description: FieldRef<"loa_sites", 'String'>
    readonly icon: FieldRef<"loa_sites", 'String'>
    readonly is_active: FieldRef<"loa_sites", 'Boolean'>
    readonly last_title: FieldRef<"loa_sites", 'String'>
    readonly last_status: FieldRef<"loa_sites", 'Int'>
    readonly checked_at: FieldRef<"loa_sites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * loa_sites findUnique
   */
  export type loa_sitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * Filter, which loa_sites to fetch.
     */
    where: loa_sitesWhereUniqueInput
  }

  /**
   * loa_sites findUniqueOrThrow
   */
  export type loa_sitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * Filter, which loa_sites to fetch.
     */
    where: loa_sitesWhereUniqueInput
  }

  /**
   * loa_sites findFirst
   */
  export type loa_sitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * Filter, which loa_sites to fetch.
     */
    where?: loa_sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_sites to fetch.
     */
    orderBy?: loa_sitesOrderByWithRelationInput | loa_sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_sites.
     */
    cursor?: loa_sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_sites.
     */
    distinct?: Loa_sitesScalarFieldEnum | Loa_sitesScalarFieldEnum[]
  }

  /**
   * loa_sites findFirstOrThrow
   */
  export type loa_sitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * Filter, which loa_sites to fetch.
     */
    where?: loa_sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_sites to fetch.
     */
    orderBy?: loa_sitesOrderByWithRelationInput | loa_sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_sites.
     */
    cursor?: loa_sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_sites.
     */
    distinct?: Loa_sitesScalarFieldEnum | Loa_sitesScalarFieldEnum[]
  }

  /**
   * loa_sites findMany
   */
  export type loa_sitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * Filter, which loa_sites to fetch.
     */
    where?: loa_sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_sites to fetch.
     */
    orderBy?: loa_sitesOrderByWithRelationInput | loa_sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loa_sites.
     */
    cursor?: loa_sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_sites.
     */
    skip?: number
    distinct?: Loa_sitesScalarFieldEnum | Loa_sitesScalarFieldEnum[]
  }

  /**
   * loa_sites create
   */
  export type loa_sitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * The data needed to create a loa_sites.
     */
    data: XOR<loa_sitesCreateInput, loa_sitesUncheckedCreateInput>
  }

  /**
   * loa_sites createMany
   */
  export type loa_sitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loa_sites.
     */
    data: loa_sitesCreateManyInput | loa_sitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_sites createManyAndReturn
   */
  export type loa_sitesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * The data used to create many loa_sites.
     */
    data: loa_sitesCreateManyInput | loa_sitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_sites update
   */
  export type loa_sitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * The data needed to update a loa_sites.
     */
    data: XOR<loa_sitesUpdateInput, loa_sitesUncheckedUpdateInput>
    /**
     * Choose, which loa_sites to update.
     */
    where: loa_sitesWhereUniqueInput
  }

  /**
   * loa_sites updateMany
   */
  export type loa_sitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loa_sites.
     */
    data: XOR<loa_sitesUpdateManyMutationInput, loa_sitesUncheckedUpdateManyInput>
    /**
     * Filter which loa_sites to update
     */
    where?: loa_sitesWhereInput
    /**
     * Limit how many loa_sites to update.
     */
    limit?: number
  }

  /**
   * loa_sites updateManyAndReturn
   */
  export type loa_sitesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * The data used to update loa_sites.
     */
    data: XOR<loa_sitesUpdateManyMutationInput, loa_sitesUncheckedUpdateManyInput>
    /**
     * Filter which loa_sites to update
     */
    where?: loa_sitesWhereInput
    /**
     * Limit how many loa_sites to update.
     */
    limit?: number
  }

  /**
   * loa_sites upsert
   */
  export type loa_sitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * The filter to search for the loa_sites to update in case it exists.
     */
    where: loa_sitesWhereUniqueInput
    /**
     * In case the loa_sites found by the `where` argument doesn't exist, create a new loa_sites with this data.
     */
    create: XOR<loa_sitesCreateInput, loa_sitesUncheckedCreateInput>
    /**
     * In case the loa_sites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loa_sitesUpdateInput, loa_sitesUncheckedUpdateInput>
  }

  /**
   * loa_sites delete
   */
  export type loa_sitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
    /**
     * Filter which loa_sites to delete.
     */
    where: loa_sitesWhereUniqueInput
  }

  /**
   * loa_sites deleteMany
   */
  export type loa_sitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_sites to delete
     */
    where?: loa_sitesWhereInput
    /**
     * Limit how many loa_sites to delete.
     */
    limit?: number
  }

  /**
   * loa_sites without action
   */
  export type loa_sitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_sites
     */
    select?: loa_sitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_sites
     */
    omit?: loa_sitesOmit<ExtArgs> | null
  }


  /**
   * Model loa_users
   */

  export type AggregateLoa_users = {
    _count: Loa_usersCountAggregateOutputType | null
    _avg: Loa_usersAvgAggregateOutputType | null
    _sum: Loa_usersSumAggregateOutputType | null
    _min: Loa_usersMinAggregateOutputType | null
    _max: Loa_usersMaxAggregateOutputType | null
  }

  export type Loa_usersAvgAggregateOutputType = {
    seq: number | null
    level: number | null
    combat_power: Decimal | null
    class: number | null
    thesix: number | null
    core_sun: number | null
    core_moon: number | null
    core_star: number | null
    stat_crit: number | null
    stat_spec: number | null
    stat_swift: number | null
  }

  export type Loa_usersSumAggregateOutputType = {
    seq: bigint | null
    level: number | null
    combat_power: Decimal | null
    class: bigint | null
    thesix: number | null
    core_sun: bigint | null
    core_moon: bigint | null
    core_star: bigint | null
    stat_crit: number | null
    stat_spec: number | null
    stat_swift: number | null
  }

  export type Loa_usersMinAggregateOutputType = {
    seq: bigint | null
    server: string | null
    level: number | null
    combat_power: Decimal | null
    class: bigint | null
    thesix: number | null
    name: string | null
    expedition_key: string | null
    core_sun: bigint | null
    core_moon: bigint | null
    core_star: bigint | null
    stat_crit: number | null
    stat_spec: number | null
    stat_swift: number | null
    stat_build: string | null
  }

  export type Loa_usersMaxAggregateOutputType = {
    seq: bigint | null
    server: string | null
    level: number | null
    combat_power: Decimal | null
    class: bigint | null
    thesix: number | null
    name: string | null
    expedition_key: string | null
    core_sun: bigint | null
    core_moon: bigint | null
    core_star: bigint | null
    stat_crit: number | null
    stat_spec: number | null
    stat_swift: number | null
    stat_build: string | null
  }

  export type Loa_usersCountAggregateOutputType = {
    seq: number
    server: number
    level: number
    combat_power: number
    class: number
    thesix: number
    name: number
    expedition_key: number
    core_sun: number
    core_moon: number
    core_star: number
    stat_crit: number
    stat_spec: number
    stat_swift: number
    stat_build: number
    _all: number
  }


  export type Loa_usersAvgAggregateInputType = {
    seq?: true
    level?: true
    combat_power?: true
    class?: true
    thesix?: true
    core_sun?: true
    core_moon?: true
    core_star?: true
    stat_crit?: true
    stat_spec?: true
    stat_swift?: true
  }

  export type Loa_usersSumAggregateInputType = {
    seq?: true
    level?: true
    combat_power?: true
    class?: true
    thesix?: true
    core_sun?: true
    core_moon?: true
    core_star?: true
    stat_crit?: true
    stat_spec?: true
    stat_swift?: true
  }

  export type Loa_usersMinAggregateInputType = {
    seq?: true
    server?: true
    level?: true
    combat_power?: true
    class?: true
    thesix?: true
    name?: true
    expedition_key?: true
    core_sun?: true
    core_moon?: true
    core_star?: true
    stat_crit?: true
    stat_spec?: true
    stat_swift?: true
    stat_build?: true
  }

  export type Loa_usersMaxAggregateInputType = {
    seq?: true
    server?: true
    level?: true
    combat_power?: true
    class?: true
    thesix?: true
    name?: true
    expedition_key?: true
    core_sun?: true
    core_moon?: true
    core_star?: true
    stat_crit?: true
    stat_spec?: true
    stat_swift?: true
    stat_build?: true
  }

  export type Loa_usersCountAggregateInputType = {
    seq?: true
    server?: true
    level?: true
    combat_power?: true
    class?: true
    thesix?: true
    name?: true
    expedition_key?: true
    core_sun?: true
    core_moon?: true
    core_star?: true
    stat_crit?: true
    stat_spec?: true
    stat_swift?: true
    stat_build?: true
    _all?: true
  }

  export type Loa_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_users to aggregate.
     */
    where?: loa_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_users to fetch.
     */
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loa_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned loa_users
    **/
    _count?: true | Loa_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Loa_usersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Loa_usersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Loa_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Loa_usersMaxAggregateInputType
  }

  export type GetLoa_usersAggregateType<T extends Loa_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateLoa_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoa_users[P]>
      : GetScalarType<T[P], AggregateLoa_users[P]>
  }




  export type loa_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loa_usersWhereInput
    orderBy?: loa_usersOrderByWithAggregationInput | loa_usersOrderByWithAggregationInput[]
    by: Loa_usersScalarFieldEnum[] | Loa_usersScalarFieldEnum
    having?: loa_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Loa_usersCountAggregateInputType | true
    _avg?: Loa_usersAvgAggregateInputType
    _sum?: Loa_usersSumAggregateInputType
    _min?: Loa_usersMinAggregateInputType
    _max?: Loa_usersMaxAggregateInputType
  }

  export type Loa_usersGroupByOutputType = {
    seq: bigint
    server: string | null
    level: number | null
    combat_power: Decimal | null
    class: bigint | null
    thesix: number | null
    name: string | null
    expedition_key: string | null
    core_sun: bigint | null
    core_moon: bigint | null
    core_star: bigint | null
    stat_crit: number
    stat_spec: number
    stat_swift: number
    stat_build: string | null
    _count: Loa_usersCountAggregateOutputType | null
    _avg: Loa_usersAvgAggregateOutputType | null
    _sum: Loa_usersSumAggregateOutputType | null
    _min: Loa_usersMinAggregateOutputType | null
    _max: Loa_usersMaxAggregateOutputType | null
  }

  type GetLoa_usersGroupByPayload<T extends loa_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loa_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Loa_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Loa_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Loa_usersGroupByOutputType[P]>
        }
      >
    >


  export type loa_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    server?: boolean
    level?: boolean
    combat_power?: boolean
    class?: boolean
    thesix?: boolean
    name?: boolean
    expedition_key?: boolean
    core_sun?: boolean
    core_moon?: boolean
    core_star?: boolean
    stat_crit?: boolean
    stat_spec?: boolean
    stat_swift?: boolean
    stat_build?: boolean
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    loa_class?: boolean | loa_users$loa_classArgs<ExtArgs>
  }, ExtArgs["result"]["loa_users"]>

  export type loa_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    server?: boolean
    level?: boolean
    combat_power?: boolean
    class?: boolean
    thesix?: boolean
    name?: boolean
    expedition_key?: boolean
    core_sun?: boolean
    core_moon?: boolean
    core_star?: boolean
    stat_crit?: boolean
    stat_spec?: boolean
    stat_swift?: boolean
    stat_build?: boolean
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    loa_class?: boolean | loa_users$loa_classArgs<ExtArgs>
  }, ExtArgs["result"]["loa_users"]>

  export type loa_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    server?: boolean
    level?: boolean
    combat_power?: boolean
    class?: boolean
    thesix?: boolean
    name?: boolean
    expedition_key?: boolean
    core_sun?: boolean
    core_moon?: boolean
    core_star?: boolean
    stat_crit?: boolean
    stat_spec?: boolean
    stat_swift?: boolean
    stat_build?: boolean
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    loa_class?: boolean | loa_users$loa_classArgs<ExtArgs>
  }, ExtArgs["result"]["loa_users"]>

  export type loa_usersSelectScalar = {
    seq?: boolean
    server?: boolean
    level?: boolean
    combat_power?: boolean
    class?: boolean
    thesix?: boolean
    name?: boolean
    expedition_key?: boolean
    core_sun?: boolean
    core_moon?: boolean
    core_star?: boolean
    stat_crit?: boolean
    stat_spec?: boolean
    stat_swift?: boolean
    stat_build?: boolean
  }

  export type loa_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seq" | "server" | "level" | "combat_power" | "class" | "thesix" | "name" | "expedition_key" | "core_sun" | "core_moon" | "core_star" | "stat_crit" | "stat_spec" | "stat_swift" | "stat_build", ExtArgs["result"]["loa_users"]>
  export type loa_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    loa_class?: boolean | loa_users$loa_classArgs<ExtArgs>
  }
  export type loa_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    loa_class?: boolean | loa_users$loa_classArgs<ExtArgs>
  }
  export type loa_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: boolean | loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>
    loa_class?: boolean | loa_users$loa_classArgs<ExtArgs>
  }

  export type $loa_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "loa_users"
    objects: {
      loa_ark_grid_loa_users_core_moonToloa_ark_grid: Prisma.$loa_ark_gridPayload<ExtArgs> | null
      loa_ark_grid_loa_users_core_starToloa_ark_grid: Prisma.$loa_ark_gridPayload<ExtArgs> | null
      loa_ark_grid_loa_users_core_sunToloa_ark_grid: Prisma.$loa_ark_gridPayload<ExtArgs> | null
      loa_class: Prisma.$loa_classPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      seq: bigint
      server: string | null
      level: number | null
      combat_power: Prisma.Decimal | null
      class: bigint | null
      thesix: number | null
      name: string | null
      expedition_key: string | null
      core_sun: bigint | null
      core_moon: bigint | null
      core_star: bigint | null
      stat_crit: number
      stat_spec: number
      stat_swift: number
      stat_build: string | null
    }, ExtArgs["result"]["loa_users"]>
    composites: {}
  }

  type loa_usersGetPayload<S extends boolean | null | undefined | loa_usersDefaultArgs> = $Result.GetResult<Prisma.$loa_usersPayload, S>

  type loa_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loa_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Loa_usersCountAggregateInputType | true
    }

  export interface loa_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loa_users'], meta: { name: 'loa_users' } }
    /**
     * Find zero or one Loa_users that matches the filter.
     * @param {loa_usersFindUniqueArgs} args - Arguments to find a Loa_users
     * @example
     * // Get one Loa_users
     * const loa_users = await prisma.loa_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loa_usersFindUniqueArgs>(args: SelectSubset<T, loa_usersFindUniqueArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Loa_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loa_usersFindUniqueOrThrowArgs} args - Arguments to find a Loa_users
     * @example
     * // Get one Loa_users
     * const loa_users = await prisma.loa_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loa_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, loa_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_usersFindFirstArgs} args - Arguments to find a Loa_users
     * @example
     * // Get one Loa_users
     * const loa_users = await prisma.loa_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loa_usersFindFirstArgs>(args?: SelectSubset<T, loa_usersFindFirstArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Loa_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_usersFindFirstOrThrowArgs} args - Arguments to find a Loa_users
     * @example
     * // Get one Loa_users
     * const loa_users = await prisma.loa_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loa_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, loa_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loa_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loa_users
     * const loa_users = await prisma.loa_users.findMany()
     * 
     * // Get first 10 Loa_users
     * const loa_users = await prisma.loa_users.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const loa_usersWithSeqOnly = await prisma.loa_users.findMany({ select: { seq: true } })
     * 
     */
    findMany<T extends loa_usersFindManyArgs>(args?: SelectSubset<T, loa_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Loa_users.
     * @param {loa_usersCreateArgs} args - Arguments to create a Loa_users.
     * @example
     * // Create one Loa_users
     * const Loa_users = await prisma.loa_users.create({
     *   data: {
     *     // ... data to create a Loa_users
     *   }
     * })
     * 
     */
    create<T extends loa_usersCreateArgs>(args: SelectSubset<T, loa_usersCreateArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loa_users.
     * @param {loa_usersCreateManyArgs} args - Arguments to create many Loa_users.
     * @example
     * // Create many Loa_users
     * const loa_users = await prisma.loa_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loa_usersCreateManyArgs>(args?: SelectSubset<T, loa_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loa_users and returns the data saved in the database.
     * @param {loa_usersCreateManyAndReturnArgs} args - Arguments to create many Loa_users.
     * @example
     * // Create many Loa_users
     * const loa_users = await prisma.loa_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loa_users and only return the `seq`
     * const loa_usersWithSeqOnly = await prisma.loa_users.createManyAndReturn({
     *   select: { seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends loa_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, loa_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Loa_users.
     * @param {loa_usersDeleteArgs} args - Arguments to delete one Loa_users.
     * @example
     * // Delete one Loa_users
     * const Loa_users = await prisma.loa_users.delete({
     *   where: {
     *     // ... filter to delete one Loa_users
     *   }
     * })
     * 
     */
    delete<T extends loa_usersDeleteArgs>(args: SelectSubset<T, loa_usersDeleteArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Loa_users.
     * @param {loa_usersUpdateArgs} args - Arguments to update one Loa_users.
     * @example
     * // Update one Loa_users
     * const loa_users = await prisma.loa_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loa_usersUpdateArgs>(args: SelectSubset<T, loa_usersUpdateArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loa_users.
     * @param {loa_usersDeleteManyArgs} args - Arguments to filter Loa_users to delete.
     * @example
     * // Delete a few Loa_users
     * const { count } = await prisma.loa_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loa_usersDeleteManyArgs>(args?: SelectSubset<T, loa_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loa_users
     * const loa_users = await prisma.loa_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loa_usersUpdateManyArgs>(args: SelectSubset<T, loa_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loa_users and returns the data updated in the database.
     * @param {loa_usersUpdateManyAndReturnArgs} args - Arguments to update many Loa_users.
     * @example
     * // Update many Loa_users
     * const loa_users = await prisma.loa_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loa_users and only return the `seq`
     * const loa_usersWithSeqOnly = await prisma.loa_users.updateManyAndReturn({
     *   select: { seq: true },
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
    updateManyAndReturn<T extends loa_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, loa_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Loa_users.
     * @param {loa_usersUpsertArgs} args - Arguments to update or create a Loa_users.
     * @example
     * // Update or create a Loa_users
     * const loa_users = await prisma.loa_users.upsert({
     *   create: {
     *     // ... data to create a Loa_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loa_users we want to update
     *   }
     * })
     */
    upsert<T extends loa_usersUpsertArgs>(args: SelectSubset<T, loa_usersUpsertArgs<ExtArgs>>): Prisma__loa_usersClient<$Result.GetResult<Prisma.$loa_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loa_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_usersCountArgs} args - Arguments to filter Loa_users to count.
     * @example
     * // Count the number of Loa_users
     * const count = await prisma.loa_users.count({
     *   where: {
     *     // ... the filter for the Loa_users we want to count
     *   }
     * })
    **/
    count<T extends loa_usersCountArgs>(
      args?: Subset<T, loa_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loa_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loa_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loa_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Loa_usersAggregateArgs>(args: Subset<T, Loa_usersAggregateArgs>): Prisma.PrismaPromise<GetLoa_usersAggregateType<T>>

    /**
     * Group by Loa_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loa_usersGroupByArgs} args - Group by arguments.
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
      T extends loa_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loa_usersGroupByArgs['orderBy'] }
        : { orderBy?: loa_usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loa_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoa_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the loa_users model
   */
  readonly fields: loa_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loa_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loa_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loa_ark_grid_loa_users_core_moonToloa_ark_grid<T extends loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loa_ark_grid_loa_users_core_starToloa_ark_grid<T extends loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loa_ark_grid_loa_users_core_sunToloa_ark_grid<T extends loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs> = {}>(args?: Subset<T, loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs>>): Prisma__loa_ark_gridClient<$Result.GetResult<Prisma.$loa_ark_gridPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loa_class<T extends loa_users$loa_classArgs<ExtArgs> = {}>(args?: Subset<T, loa_users$loa_classArgs<ExtArgs>>): Prisma__loa_classClient<$Result.GetResult<Prisma.$loa_classPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the loa_users model
   */
  interface loa_usersFieldRefs {
    readonly seq: FieldRef<"loa_users", 'BigInt'>
    readonly server: FieldRef<"loa_users", 'String'>
    readonly level: FieldRef<"loa_users", 'Float'>
    readonly combat_power: FieldRef<"loa_users", 'Decimal'>
    readonly class: FieldRef<"loa_users", 'BigInt'>
    readonly thesix: FieldRef<"loa_users", 'Int'>
    readonly name: FieldRef<"loa_users", 'String'>
    readonly expedition_key: FieldRef<"loa_users", 'String'>
    readonly core_sun: FieldRef<"loa_users", 'BigInt'>
    readonly core_moon: FieldRef<"loa_users", 'BigInt'>
    readonly core_star: FieldRef<"loa_users", 'BigInt'>
    readonly stat_crit: FieldRef<"loa_users", 'Int'>
    readonly stat_spec: FieldRef<"loa_users", 'Int'>
    readonly stat_swift: FieldRef<"loa_users", 'Int'>
    readonly stat_build: FieldRef<"loa_users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * loa_users findUnique
   */
  export type loa_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * Filter, which loa_users to fetch.
     */
    where: loa_usersWhereUniqueInput
  }

  /**
   * loa_users findUniqueOrThrow
   */
  export type loa_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * Filter, which loa_users to fetch.
     */
    where: loa_usersWhereUniqueInput
  }

  /**
   * loa_users findFirst
   */
  export type loa_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * Filter, which loa_users to fetch.
     */
    where?: loa_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_users to fetch.
     */
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_users.
     */
    cursor?: loa_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_users.
     */
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_users findFirstOrThrow
   */
  export type loa_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * Filter, which loa_users to fetch.
     */
    where?: loa_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_users to fetch.
     */
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for loa_users.
     */
    cursor?: loa_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of loa_users.
     */
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_users findMany
   */
  export type loa_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * Filter, which loa_users to fetch.
     */
    where?: loa_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of loa_users to fetch.
     */
    orderBy?: loa_usersOrderByWithRelationInput | loa_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing loa_users.
     */
    cursor?: loa_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` loa_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` loa_users.
     */
    skip?: number
    distinct?: Loa_usersScalarFieldEnum | Loa_usersScalarFieldEnum[]
  }

  /**
   * loa_users create
   */
  export type loa_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a loa_users.
     */
    data?: XOR<loa_usersCreateInput, loa_usersUncheckedCreateInput>
  }

  /**
   * loa_users createMany
   */
  export type loa_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loa_users.
     */
    data: loa_usersCreateManyInput | loa_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * loa_users createManyAndReturn
   */
  export type loa_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * The data used to create many loa_users.
     */
    data: loa_usersCreateManyInput | loa_usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * loa_users update
   */
  export type loa_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a loa_users.
     */
    data: XOR<loa_usersUpdateInput, loa_usersUncheckedUpdateInput>
    /**
     * Choose, which loa_users to update.
     */
    where: loa_usersWhereUniqueInput
  }

  /**
   * loa_users updateMany
   */
  export type loa_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loa_users.
     */
    data: XOR<loa_usersUpdateManyMutationInput, loa_usersUncheckedUpdateManyInput>
    /**
     * Filter which loa_users to update
     */
    where?: loa_usersWhereInput
    /**
     * Limit how many loa_users to update.
     */
    limit?: number
  }

  /**
   * loa_users updateManyAndReturn
   */
  export type loa_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * The data used to update loa_users.
     */
    data: XOR<loa_usersUpdateManyMutationInput, loa_usersUncheckedUpdateManyInput>
    /**
     * Filter which loa_users to update
     */
    where?: loa_usersWhereInput
    /**
     * Limit how many loa_users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * loa_users upsert
   */
  export type loa_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the loa_users to update in case it exists.
     */
    where: loa_usersWhereUniqueInput
    /**
     * In case the loa_users found by the `where` argument doesn't exist, create a new loa_users with this data.
     */
    create: XOR<loa_usersCreateInput, loa_usersUncheckedCreateInput>
    /**
     * In case the loa_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loa_usersUpdateInput, loa_usersUncheckedUpdateInput>
  }

  /**
   * loa_users delete
   */
  export type loa_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
    /**
     * Filter which loa_users to delete.
     */
    where: loa_usersWhereUniqueInput
  }

  /**
   * loa_users deleteMany
   */
  export type loa_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loa_users to delete
     */
    where?: loa_usersWhereInput
    /**
     * Limit how many loa_users to delete.
     */
    limit?: number
  }

  /**
   * loa_users.loa_ark_grid_loa_users_core_moonToloa_ark_grid
   */
  export type loa_users$loa_ark_grid_loa_users_core_moonToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    where?: loa_ark_gridWhereInput
  }

  /**
   * loa_users.loa_ark_grid_loa_users_core_starToloa_ark_grid
   */
  export type loa_users$loa_ark_grid_loa_users_core_starToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    where?: loa_ark_gridWhereInput
  }

  /**
   * loa_users.loa_ark_grid_loa_users_core_sunToloa_ark_grid
   */
  export type loa_users$loa_ark_grid_loa_users_core_sunToloa_ark_gridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_ark_grid
     */
    select?: loa_ark_gridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_ark_grid
     */
    omit?: loa_ark_gridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_ark_gridInclude<ExtArgs> | null
    where?: loa_ark_gridWhereInput
  }

  /**
   * loa_users.loa_class
   */
  export type loa_users$loa_classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_class
     */
    select?: loa_classSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_class
     */
    omit?: loa_classOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_classInclude<ExtArgs> | null
    where?: loa_classWhereInput
  }

  /**
   * loa_users without action
   */
  export type loa_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loa_users
     */
    select?: loa_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the loa_users
     */
    omit?: loa_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: loa_usersInclude<ExtArgs> | null
  }


  /**
   * Model monitoring_api_probes
   */

  export type AggregateMonitoring_api_probes = {
    _count: Monitoring_api_probesCountAggregateOutputType | null
    _avg: Monitoring_api_probesAvgAggregateOutputType | null
    _sum: Monitoring_api_probesSumAggregateOutputType | null
    _min: Monitoring_api_probesMinAggregateOutputType | null
    _max: Monitoring_api_probesMaxAggregateOutputType | null
  }

  export type Monitoring_api_probesAvgAggregateOutputType = {
    id: number | null
    status_code: number | null
    duration_ms: number | null
  }

  export type Monitoring_api_probesSumAggregateOutputType = {
    id: bigint | null
    status_code: number | null
    duration_ms: number | null
  }

  export type Monitoring_api_probesMinAggregateOutputType = {
    id: bigint | null
    api_key: string | null
    path: string | null
    method: string | null
    cache_type: string | null
    status_code: number | null
    duration_ms: number | null
    is_success: boolean | null
    created_at: Date | null
  }

  export type Monitoring_api_probesMaxAggregateOutputType = {
    id: bigint | null
    api_key: string | null
    path: string | null
    method: string | null
    cache_type: string | null
    status_code: number | null
    duration_ms: number | null
    is_success: boolean | null
    created_at: Date | null
  }

  export type Monitoring_api_probesCountAggregateOutputType = {
    id: number
    api_key: number
    path: number
    method: number
    cache_type: number
    status_code: number
    duration_ms: number
    is_success: number
    created_at: number
    _all: number
  }


  export type Monitoring_api_probesAvgAggregateInputType = {
    id?: true
    status_code?: true
    duration_ms?: true
  }

  export type Monitoring_api_probesSumAggregateInputType = {
    id?: true
    status_code?: true
    duration_ms?: true
  }

  export type Monitoring_api_probesMinAggregateInputType = {
    id?: true
    api_key?: true
    path?: true
    method?: true
    cache_type?: true
    status_code?: true
    duration_ms?: true
    is_success?: true
    created_at?: true
  }

  export type Monitoring_api_probesMaxAggregateInputType = {
    id?: true
    api_key?: true
    path?: true
    method?: true
    cache_type?: true
    status_code?: true
    duration_ms?: true
    is_success?: true
    created_at?: true
  }

  export type Monitoring_api_probesCountAggregateInputType = {
    id?: true
    api_key?: true
    path?: true
    method?: true
    cache_type?: true
    status_code?: true
    duration_ms?: true
    is_success?: true
    created_at?: true
    _all?: true
  }

  export type Monitoring_api_probesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monitoring_api_probes to aggregate.
     */
    where?: monitoring_api_probesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_api_probes to fetch.
     */
    orderBy?: monitoring_api_probesOrderByWithRelationInput | monitoring_api_probesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monitoring_api_probesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_api_probes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_api_probes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monitoring_api_probes
    **/
    _count?: true | Monitoring_api_probesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Monitoring_api_probesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Monitoring_api_probesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Monitoring_api_probesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Monitoring_api_probesMaxAggregateInputType
  }

  export type GetMonitoring_api_probesAggregateType<T extends Monitoring_api_probesAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoring_api_probes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoring_api_probes[P]>
      : GetScalarType<T[P], AggregateMonitoring_api_probes[P]>
  }




  export type monitoring_api_probesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monitoring_api_probesWhereInput
    orderBy?: monitoring_api_probesOrderByWithAggregationInput | monitoring_api_probesOrderByWithAggregationInput[]
    by: Monitoring_api_probesScalarFieldEnum[] | Monitoring_api_probesScalarFieldEnum
    having?: monitoring_api_probesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Monitoring_api_probesCountAggregateInputType | true
    _avg?: Monitoring_api_probesAvgAggregateInputType
    _sum?: Monitoring_api_probesSumAggregateInputType
    _min?: Monitoring_api_probesMinAggregateInputType
    _max?: Monitoring_api_probesMaxAggregateInputType
  }

  export type Monitoring_api_probesGroupByOutputType = {
    id: bigint
    api_key: string
    path: string
    method: string
    cache_type: string
    status_code: number
    duration_ms: number
    is_success: boolean
    created_at: Date
    _count: Monitoring_api_probesCountAggregateOutputType | null
    _avg: Monitoring_api_probesAvgAggregateOutputType | null
    _sum: Monitoring_api_probesSumAggregateOutputType | null
    _min: Monitoring_api_probesMinAggregateOutputType | null
    _max: Monitoring_api_probesMaxAggregateOutputType | null
  }

  type GetMonitoring_api_probesGroupByPayload<T extends monitoring_api_probesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Monitoring_api_probesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Monitoring_api_probesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Monitoring_api_probesGroupByOutputType[P]>
            : GetScalarType<T[P], Monitoring_api_probesGroupByOutputType[P]>
        }
      >
    >


  export type monitoring_api_probesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key?: boolean
    path?: boolean
    method?: boolean
    cache_type?: boolean
    status_code?: boolean
    duration_ms?: boolean
    is_success?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["monitoring_api_probes"]>

  export type monitoring_api_probesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key?: boolean
    path?: boolean
    method?: boolean
    cache_type?: boolean
    status_code?: boolean
    duration_ms?: boolean
    is_success?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["monitoring_api_probes"]>

  export type monitoring_api_probesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api_key?: boolean
    path?: boolean
    method?: boolean
    cache_type?: boolean
    status_code?: boolean
    duration_ms?: boolean
    is_success?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["monitoring_api_probes"]>

  export type monitoring_api_probesSelectScalar = {
    id?: boolean
    api_key?: boolean
    path?: boolean
    method?: boolean
    cache_type?: boolean
    status_code?: boolean
    duration_ms?: boolean
    is_success?: boolean
    created_at?: boolean
  }

  export type monitoring_api_probesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "api_key" | "path" | "method" | "cache_type" | "status_code" | "duration_ms" | "is_success" | "created_at", ExtArgs["result"]["monitoring_api_probes"]>

  export type $monitoring_api_probesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monitoring_api_probes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      api_key: string
      path: string
      method: string
      cache_type: string
      status_code: number
      duration_ms: number
      is_success: boolean
      created_at: Date
    }, ExtArgs["result"]["monitoring_api_probes"]>
    composites: {}
  }

  type monitoring_api_probesGetPayload<S extends boolean | null | undefined | monitoring_api_probesDefaultArgs> = $Result.GetResult<Prisma.$monitoring_api_probesPayload, S>

  type monitoring_api_probesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<monitoring_api_probesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Monitoring_api_probesCountAggregateInputType | true
    }

  export interface monitoring_api_probesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monitoring_api_probes'], meta: { name: 'monitoring_api_probes' } }
    /**
     * Find zero or one Monitoring_api_probes that matches the filter.
     * @param {monitoring_api_probesFindUniqueArgs} args - Arguments to find a Monitoring_api_probes
     * @example
     * // Get one Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monitoring_api_probesFindUniqueArgs>(args: SelectSubset<T, monitoring_api_probesFindUniqueArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monitoring_api_probes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {monitoring_api_probesFindUniqueOrThrowArgs} args - Arguments to find a Monitoring_api_probes
     * @example
     * // Get one Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monitoring_api_probesFindUniqueOrThrowArgs>(args: SelectSubset<T, monitoring_api_probesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitoring_api_probes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_api_probesFindFirstArgs} args - Arguments to find a Monitoring_api_probes
     * @example
     * // Get one Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monitoring_api_probesFindFirstArgs>(args?: SelectSubset<T, monitoring_api_probesFindFirstArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitoring_api_probes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_api_probesFindFirstOrThrowArgs} args - Arguments to find a Monitoring_api_probes
     * @example
     * // Get one Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monitoring_api_probesFindFirstOrThrowArgs>(args?: SelectSubset<T, monitoring_api_probesFindFirstOrThrowArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monitoring_api_probes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_api_probesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.findMany()
     * 
     * // Get first 10 Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoring_api_probesWithIdOnly = await prisma.monitoring_api_probes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends monitoring_api_probesFindManyArgs>(args?: SelectSubset<T, monitoring_api_probesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monitoring_api_probes.
     * @param {monitoring_api_probesCreateArgs} args - Arguments to create a Monitoring_api_probes.
     * @example
     * // Create one Monitoring_api_probes
     * const Monitoring_api_probes = await prisma.monitoring_api_probes.create({
     *   data: {
     *     // ... data to create a Monitoring_api_probes
     *   }
     * })
     * 
     */
    create<T extends monitoring_api_probesCreateArgs>(args: SelectSubset<T, monitoring_api_probesCreateArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monitoring_api_probes.
     * @param {monitoring_api_probesCreateManyArgs} args - Arguments to create many Monitoring_api_probes.
     * @example
     * // Create many Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monitoring_api_probesCreateManyArgs>(args?: SelectSubset<T, monitoring_api_probesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monitoring_api_probes and returns the data saved in the database.
     * @param {monitoring_api_probesCreateManyAndReturnArgs} args - Arguments to create many Monitoring_api_probes.
     * @example
     * // Create many Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monitoring_api_probes and only return the `id`
     * const monitoring_api_probesWithIdOnly = await prisma.monitoring_api_probes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends monitoring_api_probesCreateManyAndReturnArgs>(args?: SelectSubset<T, monitoring_api_probesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monitoring_api_probes.
     * @param {monitoring_api_probesDeleteArgs} args - Arguments to delete one Monitoring_api_probes.
     * @example
     * // Delete one Monitoring_api_probes
     * const Monitoring_api_probes = await prisma.monitoring_api_probes.delete({
     *   where: {
     *     // ... filter to delete one Monitoring_api_probes
     *   }
     * })
     * 
     */
    delete<T extends monitoring_api_probesDeleteArgs>(args: SelectSubset<T, monitoring_api_probesDeleteArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monitoring_api_probes.
     * @param {monitoring_api_probesUpdateArgs} args - Arguments to update one Monitoring_api_probes.
     * @example
     * // Update one Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monitoring_api_probesUpdateArgs>(args: SelectSubset<T, monitoring_api_probesUpdateArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monitoring_api_probes.
     * @param {monitoring_api_probesDeleteManyArgs} args - Arguments to filter Monitoring_api_probes to delete.
     * @example
     * // Delete a few Monitoring_api_probes
     * const { count } = await prisma.monitoring_api_probes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monitoring_api_probesDeleteManyArgs>(args?: SelectSubset<T, monitoring_api_probesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitoring_api_probes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_api_probesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monitoring_api_probesUpdateManyArgs>(args: SelectSubset<T, monitoring_api_probesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitoring_api_probes and returns the data updated in the database.
     * @param {monitoring_api_probesUpdateManyAndReturnArgs} args - Arguments to update many Monitoring_api_probes.
     * @example
     * // Update many Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monitoring_api_probes and only return the `id`
     * const monitoring_api_probesWithIdOnly = await prisma.monitoring_api_probes.updateManyAndReturn({
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
    updateManyAndReturn<T extends monitoring_api_probesUpdateManyAndReturnArgs>(args: SelectSubset<T, monitoring_api_probesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monitoring_api_probes.
     * @param {monitoring_api_probesUpsertArgs} args - Arguments to update or create a Monitoring_api_probes.
     * @example
     * // Update or create a Monitoring_api_probes
     * const monitoring_api_probes = await prisma.monitoring_api_probes.upsert({
     *   create: {
     *     // ... data to create a Monitoring_api_probes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitoring_api_probes we want to update
     *   }
     * })
     */
    upsert<T extends monitoring_api_probesUpsertArgs>(args: SelectSubset<T, monitoring_api_probesUpsertArgs<ExtArgs>>): Prisma__monitoring_api_probesClient<$Result.GetResult<Prisma.$monitoring_api_probesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monitoring_api_probes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_api_probesCountArgs} args - Arguments to filter Monitoring_api_probes to count.
     * @example
     * // Count the number of Monitoring_api_probes
     * const count = await prisma.monitoring_api_probes.count({
     *   where: {
     *     // ... the filter for the Monitoring_api_probes we want to count
     *   }
     * })
    **/
    count<T extends monitoring_api_probesCountArgs>(
      args?: Subset<T, monitoring_api_probesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Monitoring_api_probesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitoring_api_probes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Monitoring_api_probesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Monitoring_api_probesAggregateArgs>(args: Subset<T, Monitoring_api_probesAggregateArgs>): Prisma.PrismaPromise<GetMonitoring_api_probesAggregateType<T>>

    /**
     * Group by Monitoring_api_probes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_api_probesGroupByArgs} args - Group by arguments.
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
      T extends monitoring_api_probesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monitoring_api_probesGroupByArgs['orderBy'] }
        : { orderBy?: monitoring_api_probesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, monitoring_api_probesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoring_api_probesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monitoring_api_probes model
   */
  readonly fields: monitoring_api_probesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monitoring_api_probes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monitoring_api_probesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the monitoring_api_probes model
   */
  interface monitoring_api_probesFieldRefs {
    readonly id: FieldRef<"monitoring_api_probes", 'BigInt'>
    readonly api_key: FieldRef<"monitoring_api_probes", 'String'>
    readonly path: FieldRef<"monitoring_api_probes", 'String'>
    readonly method: FieldRef<"monitoring_api_probes", 'String'>
    readonly cache_type: FieldRef<"monitoring_api_probes", 'String'>
    readonly status_code: FieldRef<"monitoring_api_probes", 'Int'>
    readonly duration_ms: FieldRef<"monitoring_api_probes", 'Int'>
    readonly is_success: FieldRef<"monitoring_api_probes", 'Boolean'>
    readonly created_at: FieldRef<"monitoring_api_probes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * monitoring_api_probes findUnique
   */
  export type monitoring_api_probesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * Filter, which monitoring_api_probes to fetch.
     */
    where: monitoring_api_probesWhereUniqueInput
  }

  /**
   * monitoring_api_probes findUniqueOrThrow
   */
  export type monitoring_api_probesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * Filter, which monitoring_api_probes to fetch.
     */
    where: monitoring_api_probesWhereUniqueInput
  }

  /**
   * monitoring_api_probes findFirst
   */
  export type monitoring_api_probesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * Filter, which monitoring_api_probes to fetch.
     */
    where?: monitoring_api_probesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_api_probes to fetch.
     */
    orderBy?: monitoring_api_probesOrderByWithRelationInput | monitoring_api_probesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monitoring_api_probes.
     */
    cursor?: monitoring_api_probesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_api_probes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_api_probes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monitoring_api_probes.
     */
    distinct?: Monitoring_api_probesScalarFieldEnum | Monitoring_api_probesScalarFieldEnum[]
  }

  /**
   * monitoring_api_probes findFirstOrThrow
   */
  export type monitoring_api_probesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * Filter, which monitoring_api_probes to fetch.
     */
    where?: monitoring_api_probesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_api_probes to fetch.
     */
    orderBy?: monitoring_api_probesOrderByWithRelationInput | monitoring_api_probesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monitoring_api_probes.
     */
    cursor?: monitoring_api_probesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_api_probes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_api_probes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monitoring_api_probes.
     */
    distinct?: Monitoring_api_probesScalarFieldEnum | Monitoring_api_probesScalarFieldEnum[]
  }

  /**
   * monitoring_api_probes findMany
   */
  export type monitoring_api_probesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * Filter, which monitoring_api_probes to fetch.
     */
    where?: monitoring_api_probesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_api_probes to fetch.
     */
    orderBy?: monitoring_api_probesOrderByWithRelationInput | monitoring_api_probesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monitoring_api_probes.
     */
    cursor?: monitoring_api_probesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_api_probes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_api_probes.
     */
    skip?: number
    distinct?: Monitoring_api_probesScalarFieldEnum | Monitoring_api_probesScalarFieldEnum[]
  }

  /**
   * monitoring_api_probes create
   */
  export type monitoring_api_probesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * The data needed to create a monitoring_api_probes.
     */
    data: XOR<monitoring_api_probesCreateInput, monitoring_api_probesUncheckedCreateInput>
  }

  /**
   * monitoring_api_probes createMany
   */
  export type monitoring_api_probesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monitoring_api_probes.
     */
    data: monitoring_api_probesCreateManyInput | monitoring_api_probesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monitoring_api_probes createManyAndReturn
   */
  export type monitoring_api_probesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * The data used to create many monitoring_api_probes.
     */
    data: monitoring_api_probesCreateManyInput | monitoring_api_probesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monitoring_api_probes update
   */
  export type monitoring_api_probesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * The data needed to update a monitoring_api_probes.
     */
    data: XOR<monitoring_api_probesUpdateInput, monitoring_api_probesUncheckedUpdateInput>
    /**
     * Choose, which monitoring_api_probes to update.
     */
    where: monitoring_api_probesWhereUniqueInput
  }

  /**
   * monitoring_api_probes updateMany
   */
  export type monitoring_api_probesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monitoring_api_probes.
     */
    data: XOR<monitoring_api_probesUpdateManyMutationInput, monitoring_api_probesUncheckedUpdateManyInput>
    /**
     * Filter which monitoring_api_probes to update
     */
    where?: monitoring_api_probesWhereInput
    /**
     * Limit how many monitoring_api_probes to update.
     */
    limit?: number
  }

  /**
   * monitoring_api_probes updateManyAndReturn
   */
  export type monitoring_api_probesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * The data used to update monitoring_api_probes.
     */
    data: XOR<monitoring_api_probesUpdateManyMutationInput, monitoring_api_probesUncheckedUpdateManyInput>
    /**
     * Filter which monitoring_api_probes to update
     */
    where?: monitoring_api_probesWhereInput
    /**
     * Limit how many monitoring_api_probes to update.
     */
    limit?: number
  }

  /**
   * monitoring_api_probes upsert
   */
  export type monitoring_api_probesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * The filter to search for the monitoring_api_probes to update in case it exists.
     */
    where: monitoring_api_probesWhereUniqueInput
    /**
     * In case the monitoring_api_probes found by the `where` argument doesn't exist, create a new monitoring_api_probes with this data.
     */
    create: XOR<monitoring_api_probesCreateInput, monitoring_api_probesUncheckedCreateInput>
    /**
     * In case the monitoring_api_probes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monitoring_api_probesUpdateInput, monitoring_api_probesUncheckedUpdateInput>
  }

  /**
   * monitoring_api_probes delete
   */
  export type monitoring_api_probesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
    /**
     * Filter which monitoring_api_probes to delete.
     */
    where: monitoring_api_probesWhereUniqueInput
  }

  /**
   * monitoring_api_probes deleteMany
   */
  export type monitoring_api_probesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monitoring_api_probes to delete
     */
    where?: monitoring_api_probesWhereInput
    /**
     * Limit how many monitoring_api_probes to delete.
     */
    limit?: number
  }

  /**
   * monitoring_api_probes without action
   */
  export type monitoring_api_probesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_api_probes
     */
    select?: monitoring_api_probesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monitoring_api_probes
     */
    omit?: monitoring_api_probesOmit<ExtArgs> | null
  }


  /**
   * Model youtube_view_snapshots
   */

  export type AggregateYoutube_view_snapshots = {
    _count: Youtube_view_snapshotsCountAggregateOutputType | null
    _avg: Youtube_view_snapshotsAvgAggregateOutputType | null
    _sum: Youtube_view_snapshotsSumAggregateOutputType | null
    _min: Youtube_view_snapshotsMinAggregateOutputType | null
    _max: Youtube_view_snapshotsMaxAggregateOutputType | null
  }

  export type Youtube_view_snapshotsAvgAggregateOutputType = {
    id: number | null
    view_count: number | null
  }

  export type Youtube_view_snapshotsSumAggregateOutputType = {
    id: bigint | null
    view_count: bigint | null
  }

  export type Youtube_view_snapshotsMinAggregateOutputType = {
    id: bigint | null
    video_id: string | null
    title: string | null
    channel_title: string | null
    thumbnail_url: string | null
    published_at: Date | null
    duration: string | null
    view_count: bigint | null
    recorded_date: Date | null
  }

  export type Youtube_view_snapshotsMaxAggregateOutputType = {
    id: bigint | null
    video_id: string | null
    title: string | null
    channel_title: string | null
    thumbnail_url: string | null
    published_at: Date | null
    duration: string | null
    view_count: bigint | null
    recorded_date: Date | null
  }

  export type Youtube_view_snapshotsCountAggregateOutputType = {
    id: number
    video_id: number
    title: number
    channel_title: number
    thumbnail_url: number
    published_at: number
    duration: number
    view_count: number
    recorded_date: number
    _all: number
  }


  export type Youtube_view_snapshotsAvgAggregateInputType = {
    id?: true
    view_count?: true
  }

  export type Youtube_view_snapshotsSumAggregateInputType = {
    id?: true
    view_count?: true
  }

  export type Youtube_view_snapshotsMinAggregateInputType = {
    id?: true
    video_id?: true
    title?: true
    channel_title?: true
    thumbnail_url?: true
    published_at?: true
    duration?: true
    view_count?: true
    recorded_date?: true
  }

  export type Youtube_view_snapshotsMaxAggregateInputType = {
    id?: true
    video_id?: true
    title?: true
    channel_title?: true
    thumbnail_url?: true
    published_at?: true
    duration?: true
    view_count?: true
    recorded_date?: true
  }

  export type Youtube_view_snapshotsCountAggregateInputType = {
    id?: true
    video_id?: true
    title?: true
    channel_title?: true
    thumbnail_url?: true
    published_at?: true
    duration?: true
    view_count?: true
    recorded_date?: true
    _all?: true
  }

  export type Youtube_view_snapshotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which youtube_view_snapshots to aggregate.
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_view_snapshots to fetch.
     */
    orderBy?: youtube_view_snapshotsOrderByWithRelationInput | youtube_view_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: youtube_view_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_view_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_view_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned youtube_view_snapshots
    **/
    _count?: true | Youtube_view_snapshotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Youtube_view_snapshotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Youtube_view_snapshotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Youtube_view_snapshotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Youtube_view_snapshotsMaxAggregateInputType
  }

  export type GetYoutube_view_snapshotsAggregateType<T extends Youtube_view_snapshotsAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutube_view_snapshots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutube_view_snapshots[P]>
      : GetScalarType<T[P], AggregateYoutube_view_snapshots[P]>
  }




  export type youtube_view_snapshotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: youtube_view_snapshotsWhereInput
    orderBy?: youtube_view_snapshotsOrderByWithAggregationInput | youtube_view_snapshotsOrderByWithAggregationInput[]
    by: Youtube_view_snapshotsScalarFieldEnum[] | Youtube_view_snapshotsScalarFieldEnum
    having?: youtube_view_snapshotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Youtube_view_snapshotsCountAggregateInputType | true
    _avg?: Youtube_view_snapshotsAvgAggregateInputType
    _sum?: Youtube_view_snapshotsSumAggregateInputType
    _min?: Youtube_view_snapshotsMinAggregateInputType
    _max?: Youtube_view_snapshotsMaxAggregateInputType
  }

  export type Youtube_view_snapshotsGroupByOutputType = {
    id: bigint
    video_id: string
    title: string
    channel_title: string
    thumbnail_url: string
    published_at: Date
    duration: string
    view_count: bigint
    recorded_date: Date
    _count: Youtube_view_snapshotsCountAggregateOutputType | null
    _avg: Youtube_view_snapshotsAvgAggregateOutputType | null
    _sum: Youtube_view_snapshotsSumAggregateOutputType | null
    _min: Youtube_view_snapshotsMinAggregateOutputType | null
    _max: Youtube_view_snapshotsMaxAggregateOutputType | null
  }

  type GetYoutube_view_snapshotsGroupByPayload<T extends youtube_view_snapshotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Youtube_view_snapshotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Youtube_view_snapshotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Youtube_view_snapshotsGroupByOutputType[P]>
            : GetScalarType<T[P], Youtube_view_snapshotsGroupByOutputType[P]>
        }
      >
    >


  export type youtube_view_snapshotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    title?: boolean
    channel_title?: boolean
    thumbnail_url?: boolean
    published_at?: boolean
    duration?: boolean
    view_count?: boolean
    recorded_date?: boolean
  }, ExtArgs["result"]["youtube_view_snapshots"]>

  export type youtube_view_snapshotsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    title?: boolean
    channel_title?: boolean
    thumbnail_url?: boolean
    published_at?: boolean
    duration?: boolean
    view_count?: boolean
    recorded_date?: boolean
  }, ExtArgs["result"]["youtube_view_snapshots"]>

  export type youtube_view_snapshotsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_id?: boolean
    title?: boolean
    channel_title?: boolean
    thumbnail_url?: boolean
    published_at?: boolean
    duration?: boolean
    view_count?: boolean
    recorded_date?: boolean
  }, ExtArgs["result"]["youtube_view_snapshots"]>

  export type youtube_view_snapshotsSelectScalar = {
    id?: boolean
    video_id?: boolean
    title?: boolean
    channel_title?: boolean
    thumbnail_url?: boolean
    published_at?: boolean
    duration?: boolean
    view_count?: boolean
    recorded_date?: boolean
  }

  export type youtube_view_snapshotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "video_id" | "title" | "channel_title" | "thumbnail_url" | "published_at" | "duration" | "view_count" | "recorded_date", ExtArgs["result"]["youtube_view_snapshots"]>

  export type $youtube_view_snapshotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "youtube_view_snapshots"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      video_id: string
      title: string
      channel_title: string
      thumbnail_url: string
      published_at: Date
      duration: string
      view_count: bigint
      recorded_date: Date
    }, ExtArgs["result"]["youtube_view_snapshots"]>
    composites: {}
  }

  type youtube_view_snapshotsGetPayload<S extends boolean | null | undefined | youtube_view_snapshotsDefaultArgs> = $Result.GetResult<Prisma.$youtube_view_snapshotsPayload, S>

  type youtube_view_snapshotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<youtube_view_snapshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Youtube_view_snapshotsCountAggregateInputType | true
    }

  export interface youtube_view_snapshotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['youtube_view_snapshots'], meta: { name: 'youtube_view_snapshots' } }
    /**
     * Find zero or one Youtube_view_snapshots that matches the filter.
     * @param {youtube_view_snapshotsFindUniqueArgs} args - Arguments to find a Youtube_view_snapshots
     * @example
     * // Get one Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends youtube_view_snapshotsFindUniqueArgs>(args: SelectSubset<T, youtube_view_snapshotsFindUniqueArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Youtube_view_snapshots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {youtube_view_snapshotsFindUniqueOrThrowArgs} args - Arguments to find a Youtube_view_snapshots
     * @example
     * // Get one Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends youtube_view_snapshotsFindUniqueOrThrowArgs>(args: SelectSubset<T, youtube_view_snapshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Youtube_view_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_view_snapshotsFindFirstArgs} args - Arguments to find a Youtube_view_snapshots
     * @example
     * // Get one Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends youtube_view_snapshotsFindFirstArgs>(args?: SelectSubset<T, youtube_view_snapshotsFindFirstArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Youtube_view_snapshots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_view_snapshotsFindFirstOrThrowArgs} args - Arguments to find a Youtube_view_snapshots
     * @example
     * // Get one Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends youtube_view_snapshotsFindFirstOrThrowArgs>(args?: SelectSubset<T, youtube_view_snapshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Youtube_view_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_view_snapshotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findMany()
     * 
     * // Get first 10 Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtube_view_snapshotsWithIdOnly = await prisma.youtube_view_snapshots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends youtube_view_snapshotsFindManyArgs>(args?: SelectSubset<T, youtube_view_snapshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Youtube_view_snapshots.
     * @param {youtube_view_snapshotsCreateArgs} args - Arguments to create a Youtube_view_snapshots.
     * @example
     * // Create one Youtube_view_snapshots
     * const Youtube_view_snapshots = await prisma.youtube_view_snapshots.create({
     *   data: {
     *     // ... data to create a Youtube_view_snapshots
     *   }
     * })
     * 
     */
    create<T extends youtube_view_snapshotsCreateArgs>(args: SelectSubset<T, youtube_view_snapshotsCreateArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Youtube_view_snapshots.
     * @param {youtube_view_snapshotsCreateManyArgs} args - Arguments to create many Youtube_view_snapshots.
     * @example
     * // Create many Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends youtube_view_snapshotsCreateManyArgs>(args?: SelectSubset<T, youtube_view_snapshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Youtube_view_snapshots and returns the data saved in the database.
     * @param {youtube_view_snapshotsCreateManyAndReturnArgs} args - Arguments to create many Youtube_view_snapshots.
     * @example
     * // Create many Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Youtube_view_snapshots and only return the `id`
     * const youtube_view_snapshotsWithIdOnly = await prisma.youtube_view_snapshots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends youtube_view_snapshotsCreateManyAndReturnArgs>(args?: SelectSubset<T, youtube_view_snapshotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Youtube_view_snapshots.
     * @param {youtube_view_snapshotsDeleteArgs} args - Arguments to delete one Youtube_view_snapshots.
     * @example
     * // Delete one Youtube_view_snapshots
     * const Youtube_view_snapshots = await prisma.youtube_view_snapshots.delete({
     *   where: {
     *     // ... filter to delete one Youtube_view_snapshots
     *   }
     * })
     * 
     */
    delete<T extends youtube_view_snapshotsDeleteArgs>(args: SelectSubset<T, youtube_view_snapshotsDeleteArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Youtube_view_snapshots.
     * @param {youtube_view_snapshotsUpdateArgs} args - Arguments to update one Youtube_view_snapshots.
     * @example
     * // Update one Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends youtube_view_snapshotsUpdateArgs>(args: SelectSubset<T, youtube_view_snapshotsUpdateArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Youtube_view_snapshots.
     * @param {youtube_view_snapshotsDeleteManyArgs} args - Arguments to filter Youtube_view_snapshots to delete.
     * @example
     * // Delete a few Youtube_view_snapshots
     * const { count } = await prisma.youtube_view_snapshots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends youtube_view_snapshotsDeleteManyArgs>(args?: SelectSubset<T, youtube_view_snapshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_view_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_view_snapshotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends youtube_view_snapshotsUpdateManyArgs>(args: SelectSubset<T, youtube_view_snapshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_view_snapshots and returns the data updated in the database.
     * @param {youtube_view_snapshotsUpdateManyAndReturnArgs} args - Arguments to update many Youtube_view_snapshots.
     * @example
     * // Update many Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Youtube_view_snapshots and only return the `id`
     * const youtube_view_snapshotsWithIdOnly = await prisma.youtube_view_snapshots.updateManyAndReturn({
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
    updateManyAndReturn<T extends youtube_view_snapshotsUpdateManyAndReturnArgs>(args: SelectSubset<T, youtube_view_snapshotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Youtube_view_snapshots.
     * @param {youtube_view_snapshotsUpsertArgs} args - Arguments to update or create a Youtube_view_snapshots.
     * @example
     * // Update or create a Youtube_view_snapshots
     * const youtube_view_snapshots = await prisma.youtube_view_snapshots.upsert({
     *   create: {
     *     // ... data to create a Youtube_view_snapshots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Youtube_view_snapshots we want to update
     *   }
     * })
     */
    upsert<T extends youtube_view_snapshotsUpsertArgs>(args: SelectSubset<T, youtube_view_snapshotsUpsertArgs<ExtArgs>>): Prisma__youtube_view_snapshotsClient<$Result.GetResult<Prisma.$youtube_view_snapshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Youtube_view_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_view_snapshotsCountArgs} args - Arguments to filter Youtube_view_snapshots to count.
     * @example
     * // Count the number of Youtube_view_snapshots
     * const count = await prisma.youtube_view_snapshots.count({
     *   where: {
     *     // ... the filter for the Youtube_view_snapshots we want to count
     *   }
     * })
    **/
    count<T extends youtube_view_snapshotsCountArgs>(
      args?: Subset<T, youtube_view_snapshotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Youtube_view_snapshotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Youtube_view_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_view_snapshotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Youtube_view_snapshotsAggregateArgs>(args: Subset<T, Youtube_view_snapshotsAggregateArgs>): Prisma.PrismaPromise<GetYoutube_view_snapshotsAggregateType<T>>

    /**
     * Group by Youtube_view_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_view_snapshotsGroupByArgs} args - Group by arguments.
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
      T extends youtube_view_snapshotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: youtube_view_snapshotsGroupByArgs['orderBy'] }
        : { orderBy?: youtube_view_snapshotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, youtube_view_snapshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutube_view_snapshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the youtube_view_snapshots model
   */
  readonly fields: youtube_view_snapshotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for youtube_view_snapshots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__youtube_view_snapshotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the youtube_view_snapshots model
   */
  interface youtube_view_snapshotsFieldRefs {
    readonly id: FieldRef<"youtube_view_snapshots", 'BigInt'>
    readonly video_id: FieldRef<"youtube_view_snapshots", 'String'>
    readonly title: FieldRef<"youtube_view_snapshots", 'String'>
    readonly channel_title: FieldRef<"youtube_view_snapshots", 'String'>
    readonly thumbnail_url: FieldRef<"youtube_view_snapshots", 'String'>
    readonly published_at: FieldRef<"youtube_view_snapshots", 'DateTime'>
    readonly duration: FieldRef<"youtube_view_snapshots", 'String'>
    readonly view_count: FieldRef<"youtube_view_snapshots", 'BigInt'>
    readonly recorded_date: FieldRef<"youtube_view_snapshots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * youtube_view_snapshots findUnique
   */
  export type youtube_view_snapshotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * Filter, which youtube_view_snapshots to fetch.
     */
    where: youtube_view_snapshotsWhereUniqueInput
  }

  /**
   * youtube_view_snapshots findUniqueOrThrow
   */
  export type youtube_view_snapshotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * Filter, which youtube_view_snapshots to fetch.
     */
    where: youtube_view_snapshotsWhereUniqueInput
  }

  /**
   * youtube_view_snapshots findFirst
   */
  export type youtube_view_snapshotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * Filter, which youtube_view_snapshots to fetch.
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_view_snapshots to fetch.
     */
    orderBy?: youtube_view_snapshotsOrderByWithRelationInput | youtube_view_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for youtube_view_snapshots.
     */
    cursor?: youtube_view_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_view_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_view_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of youtube_view_snapshots.
     */
    distinct?: Youtube_view_snapshotsScalarFieldEnum | Youtube_view_snapshotsScalarFieldEnum[]
  }

  /**
   * youtube_view_snapshots findFirstOrThrow
   */
  export type youtube_view_snapshotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * Filter, which youtube_view_snapshots to fetch.
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_view_snapshots to fetch.
     */
    orderBy?: youtube_view_snapshotsOrderByWithRelationInput | youtube_view_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for youtube_view_snapshots.
     */
    cursor?: youtube_view_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_view_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_view_snapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of youtube_view_snapshots.
     */
    distinct?: Youtube_view_snapshotsScalarFieldEnum | Youtube_view_snapshotsScalarFieldEnum[]
  }

  /**
   * youtube_view_snapshots findMany
   */
  export type youtube_view_snapshotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * Filter, which youtube_view_snapshots to fetch.
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_view_snapshots to fetch.
     */
    orderBy?: youtube_view_snapshotsOrderByWithRelationInput | youtube_view_snapshotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing youtube_view_snapshots.
     */
    cursor?: youtube_view_snapshotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_view_snapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_view_snapshots.
     */
    skip?: number
    distinct?: Youtube_view_snapshotsScalarFieldEnum | Youtube_view_snapshotsScalarFieldEnum[]
  }

  /**
   * youtube_view_snapshots create
   */
  export type youtube_view_snapshotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * The data needed to create a youtube_view_snapshots.
     */
    data: XOR<youtube_view_snapshotsCreateInput, youtube_view_snapshotsUncheckedCreateInput>
  }

  /**
   * youtube_view_snapshots createMany
   */
  export type youtube_view_snapshotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many youtube_view_snapshots.
     */
    data: youtube_view_snapshotsCreateManyInput | youtube_view_snapshotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * youtube_view_snapshots createManyAndReturn
   */
  export type youtube_view_snapshotsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * The data used to create many youtube_view_snapshots.
     */
    data: youtube_view_snapshotsCreateManyInput | youtube_view_snapshotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * youtube_view_snapshots update
   */
  export type youtube_view_snapshotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * The data needed to update a youtube_view_snapshots.
     */
    data: XOR<youtube_view_snapshotsUpdateInput, youtube_view_snapshotsUncheckedUpdateInput>
    /**
     * Choose, which youtube_view_snapshots to update.
     */
    where: youtube_view_snapshotsWhereUniqueInput
  }

  /**
   * youtube_view_snapshots updateMany
   */
  export type youtube_view_snapshotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update youtube_view_snapshots.
     */
    data: XOR<youtube_view_snapshotsUpdateManyMutationInput, youtube_view_snapshotsUncheckedUpdateManyInput>
    /**
     * Filter which youtube_view_snapshots to update
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * Limit how many youtube_view_snapshots to update.
     */
    limit?: number
  }

  /**
   * youtube_view_snapshots updateManyAndReturn
   */
  export type youtube_view_snapshotsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * The data used to update youtube_view_snapshots.
     */
    data: XOR<youtube_view_snapshotsUpdateManyMutationInput, youtube_view_snapshotsUncheckedUpdateManyInput>
    /**
     * Filter which youtube_view_snapshots to update
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * Limit how many youtube_view_snapshots to update.
     */
    limit?: number
  }

  /**
   * youtube_view_snapshots upsert
   */
  export type youtube_view_snapshotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * The filter to search for the youtube_view_snapshots to update in case it exists.
     */
    where: youtube_view_snapshotsWhereUniqueInput
    /**
     * In case the youtube_view_snapshots found by the `where` argument doesn't exist, create a new youtube_view_snapshots with this data.
     */
    create: XOR<youtube_view_snapshotsCreateInput, youtube_view_snapshotsUncheckedCreateInput>
    /**
     * In case the youtube_view_snapshots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<youtube_view_snapshotsUpdateInput, youtube_view_snapshotsUncheckedUpdateInput>
  }

  /**
   * youtube_view_snapshots delete
   */
  export type youtube_view_snapshotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
    /**
     * Filter which youtube_view_snapshots to delete.
     */
    where: youtube_view_snapshotsWhereUniqueInput
  }

  /**
   * youtube_view_snapshots deleteMany
   */
  export type youtube_view_snapshotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which youtube_view_snapshots to delete
     */
    where?: youtube_view_snapshotsWhereInput
    /**
     * Limit how many youtube_view_snapshots to delete.
     */
    limit?: number
  }

  /**
   * youtube_view_snapshots without action
   */
  export type youtube_view_snapshotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_view_snapshots
     */
    select?: youtube_view_snapshotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_view_snapshots
     */
    omit?: youtube_view_snapshotsOmit<ExtArgs> | null
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


  export const Admin_usersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at'
  };

  export type Admin_usersScalarFieldEnum = (typeof Admin_usersScalarFieldEnum)[keyof typeof Admin_usersScalarFieldEnum]


  export const Apm_page_visitsScalarFieldEnum: {
    id: 'id',
    path: 'path',
    device_type: 'device_type',
    user_agent: 'user_agent',
    referrer: 'referrer',
    visits: 'visits',
    last_seen_at: 'last_seen_at',
    created_at: 'created_at',
    country_code: 'country_code',
    os_name: 'os_name',
    browser_name: 'browser_name'
  };

  export type Apm_page_visitsScalarFieldEnum = (typeof Apm_page_visitsScalarFieldEnum)[keyof typeof Apm_page_visitsScalarFieldEnum]


  export const Apm_request_timingsScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    name: 'name',
    path: 'path',
    method: 'method',
    status_code: 'status_code',
    duration_ms: 'duration_ms',
    created_at: 'created_at'
  };

  export type Apm_request_timingsScalarFieldEnum = (typeof Apm_request_timingsScalarFieldEnum)[keyof typeof Apm_request_timingsScalarFieldEnum]


  export const Apm_site_clicksScalarFieldEnum: {
    id: 'id',
    site_name: 'site_name',
    site_href: 'site_href',
    site_category: 'site_category',
    device_type: 'device_type',
    created_at: 'created_at'
  };

  export type Apm_site_clicksScalarFieldEnum = (typeof Apm_site_clicksScalarFieldEnum)[keyof typeof Apm_site_clicksScalarFieldEnum]


  export const Apm_system_metricsScalarFieldEnum: {
    id: 'id',
    cpu_percent: 'cpu_percent',
    memory_percent: 'memory_percent',
    rss_mb: 'rss_mb',
    heap_used_mb: 'heap_used_mb',
    total_mem_mb: 'total_mem_mb',
    load_avg_1m: 'load_avg_1m',
    created_at: 'created_at'
  };

  export type Apm_system_metricsScalarFieldEnum = (typeof Apm_system_metricsScalarFieldEnum)[keyof typeof Apm_system_metricsScalarFieldEnum]


  export const Apm_youtube_clicksScalarFieldEnum: {
    id: 'id',
    video_id: 'video_id',
    video_title: 'video_title',
    channel_title: 'channel_title',
    device_type: 'device_type',
    created_at: 'created_at'
  };

  export type Apm_youtube_clicksScalarFieldEnum = (typeof Apm_youtube_clicksScalarFieldEnum)[keyof typeof Apm_youtube_clicksScalarFieldEnum]


  export const Loa_ark_gridScalarFieldEnum: {
    seq: 'seq',
    core: 'core',
    star: 'star',
    class: 'class',
    order: 'order'
  };

  export type Loa_ark_gridScalarFieldEnum = (typeof Loa_ark_gridScalarFieldEnum)[keyof typeof Loa_ark_gridScalarFieldEnum]


  export const Loa_classScalarFieldEnum: {
    idx: 'idx',
    class_engraving: 'class_engraving',
    class_root: 'class_root',
    gender: 'gender',
    class_detail: 'class_detail'
  };

  export type Loa_classScalarFieldEnum = (typeof Loa_classScalarFieldEnum)[keyof typeof Loa_classScalarFieldEnum]


  export const Loa_class_summariesScalarFieldEnum: {
    class_name: 'class_name',
    summary: 'summary',
    updated_at: 'updated_at'
  };

  export type Loa_class_summariesScalarFieldEnum = (typeof Loa_class_summariesScalarFieldEnum)[keyof typeof Loa_class_summariesScalarFieldEnum]


  export const Loa_sitesScalarFieldEnum: {
    seq: 'seq',
    name: 'name',
    href: 'href',
    category: 'category',
    description: 'description',
    icon: 'icon',
    is_active: 'is_active',
    last_title: 'last_title',
    last_status: 'last_status',
    checked_at: 'checked_at'
  };

  export type Loa_sitesScalarFieldEnum = (typeof Loa_sitesScalarFieldEnum)[keyof typeof Loa_sitesScalarFieldEnum]


  export const Loa_usersScalarFieldEnum: {
    seq: 'seq',
    server: 'server',
    level: 'level',
    combat_power: 'combat_power',
    class: 'class',
    thesix: 'thesix',
    name: 'name',
    expedition_key: 'expedition_key',
    core_sun: 'core_sun',
    core_moon: 'core_moon',
    core_star: 'core_star',
    stat_crit: 'stat_crit',
    stat_spec: 'stat_spec',
    stat_swift: 'stat_swift',
    stat_build: 'stat_build'
  };

  export type Loa_usersScalarFieldEnum = (typeof Loa_usersScalarFieldEnum)[keyof typeof Loa_usersScalarFieldEnum]


  export const Monitoring_api_probesScalarFieldEnum: {
    id: 'id',
    api_key: 'api_key',
    path: 'path',
    method: 'method',
    cache_type: 'cache_type',
    status_code: 'status_code',
    duration_ms: 'duration_ms',
    is_success: 'is_success',
    created_at: 'created_at'
  };

  export type Monitoring_api_probesScalarFieldEnum = (typeof Monitoring_api_probesScalarFieldEnum)[keyof typeof Monitoring_api_probesScalarFieldEnum]


  export const Youtube_view_snapshotsScalarFieldEnum: {
    id: 'id',
    video_id: 'video_id',
    title: 'title',
    channel_title: 'channel_title',
    thumbnail_url: 'thumbnail_url',
    published_at: 'published_at',
    duration: 'duration',
    view_count: 'view_count',
    recorded_date: 'recorded_date'
  };

  export type Youtube_view_snapshotsScalarFieldEnum = (typeof Youtube_view_snapshotsScalarFieldEnum)[keyof typeof Youtube_view_snapshotsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type admin_usersWhereInput = {
    AND?: admin_usersWhereInput | admin_usersWhereInput[]
    OR?: admin_usersWhereInput[]
    NOT?: admin_usersWhereInput | admin_usersWhereInput[]
    id?: BigIntFilter<"admin_users"> | bigint | number
    username?: StringFilter<"admin_users"> | string
    password_hash?: StringFilter<"admin_users"> | string
    role?: StringFilter<"admin_users"> | string
    created_at?: DateTimeFilter<"admin_users"> | Date | string
  }

  export type admin_usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type admin_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    username?: string
    AND?: admin_usersWhereInput | admin_usersWhereInput[]
    OR?: admin_usersWhereInput[]
    NOT?: admin_usersWhereInput | admin_usersWhereInput[]
    password_hash?: StringFilter<"admin_users"> | string
    role?: StringFilter<"admin_users"> | string
    created_at?: DateTimeFilter<"admin_users"> | Date | string
  }, "id" | "username">

  export type admin_usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: admin_usersCountOrderByAggregateInput
    _avg?: admin_usersAvgOrderByAggregateInput
    _max?: admin_usersMaxOrderByAggregateInput
    _min?: admin_usersMinOrderByAggregateInput
    _sum?: admin_usersSumOrderByAggregateInput
  }

  export type admin_usersScalarWhereWithAggregatesInput = {
    AND?: admin_usersScalarWhereWithAggregatesInput | admin_usersScalarWhereWithAggregatesInput[]
    OR?: admin_usersScalarWhereWithAggregatesInput[]
    NOT?: admin_usersScalarWhereWithAggregatesInput | admin_usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"admin_users"> | bigint | number
    username?: StringWithAggregatesFilter<"admin_users"> | string
    password_hash?: StringWithAggregatesFilter<"admin_users"> | string
    role?: StringWithAggregatesFilter<"admin_users"> | string
    created_at?: DateTimeWithAggregatesFilter<"admin_users"> | Date | string
  }

  export type apm_page_visitsWhereInput = {
    AND?: apm_page_visitsWhereInput | apm_page_visitsWhereInput[]
    OR?: apm_page_visitsWhereInput[]
    NOT?: apm_page_visitsWhereInput | apm_page_visitsWhereInput[]
    id?: BigIntFilter<"apm_page_visits"> | bigint | number
    path?: StringFilter<"apm_page_visits"> | string
    device_type?: StringFilter<"apm_page_visits"> | string
    user_agent?: StringFilter<"apm_page_visits"> | string
    referrer?: StringNullableFilter<"apm_page_visits"> | string | null
    visits?: IntFilter<"apm_page_visits"> | number
    last_seen_at?: DateTimeFilter<"apm_page_visits"> | Date | string
    created_at?: DateTimeFilter<"apm_page_visits"> | Date | string
    country_code?: StringFilter<"apm_page_visits"> | string
    os_name?: StringFilter<"apm_page_visits"> | string
    browser_name?: StringFilter<"apm_page_visits"> | string
  }

  export type apm_page_visitsOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    device_type?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    visits?: SortOrder
    last_seen_at?: SortOrder
    created_at?: SortOrder
    country_code?: SortOrder
    os_name?: SortOrder
    browser_name?: SortOrder
  }

  export type apm_page_visitsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    path_device_type_country_code_os_name_browser_name?: apm_page_visitsPathDevice_typeCountry_codeOs_nameBrowser_nameCompoundUniqueInput
    AND?: apm_page_visitsWhereInput | apm_page_visitsWhereInput[]
    OR?: apm_page_visitsWhereInput[]
    NOT?: apm_page_visitsWhereInput | apm_page_visitsWhereInput[]
    path?: StringFilter<"apm_page_visits"> | string
    device_type?: StringFilter<"apm_page_visits"> | string
    user_agent?: StringFilter<"apm_page_visits"> | string
    referrer?: StringNullableFilter<"apm_page_visits"> | string | null
    visits?: IntFilter<"apm_page_visits"> | number
    last_seen_at?: DateTimeFilter<"apm_page_visits"> | Date | string
    created_at?: DateTimeFilter<"apm_page_visits"> | Date | string
    country_code?: StringFilter<"apm_page_visits"> | string
    os_name?: StringFilter<"apm_page_visits"> | string
    browser_name?: StringFilter<"apm_page_visits"> | string
  }, "id" | "path_device_type_country_code_os_name_browser_name">

  export type apm_page_visitsOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    device_type?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    visits?: SortOrder
    last_seen_at?: SortOrder
    created_at?: SortOrder
    country_code?: SortOrder
    os_name?: SortOrder
    browser_name?: SortOrder
    _count?: apm_page_visitsCountOrderByAggregateInput
    _avg?: apm_page_visitsAvgOrderByAggregateInput
    _max?: apm_page_visitsMaxOrderByAggregateInput
    _min?: apm_page_visitsMinOrderByAggregateInput
    _sum?: apm_page_visitsSumOrderByAggregateInput
  }

  export type apm_page_visitsScalarWhereWithAggregatesInput = {
    AND?: apm_page_visitsScalarWhereWithAggregatesInput | apm_page_visitsScalarWhereWithAggregatesInput[]
    OR?: apm_page_visitsScalarWhereWithAggregatesInput[]
    NOT?: apm_page_visitsScalarWhereWithAggregatesInput | apm_page_visitsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"apm_page_visits"> | bigint | number
    path?: StringWithAggregatesFilter<"apm_page_visits"> | string
    device_type?: StringWithAggregatesFilter<"apm_page_visits"> | string
    user_agent?: StringWithAggregatesFilter<"apm_page_visits"> | string
    referrer?: StringNullableWithAggregatesFilter<"apm_page_visits"> | string | null
    visits?: IntWithAggregatesFilter<"apm_page_visits"> | number
    last_seen_at?: DateTimeWithAggregatesFilter<"apm_page_visits"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"apm_page_visits"> | Date | string
    country_code?: StringWithAggregatesFilter<"apm_page_visits"> | string
    os_name?: StringWithAggregatesFilter<"apm_page_visits"> | string
    browser_name?: StringWithAggregatesFilter<"apm_page_visits"> | string
  }

  export type apm_request_timingsWhereInput = {
    AND?: apm_request_timingsWhereInput | apm_request_timingsWhereInput[]
    OR?: apm_request_timingsWhereInput[]
    NOT?: apm_request_timingsWhereInput | apm_request_timingsWhereInput[]
    id?: BigIntFilter<"apm_request_timings"> | bigint | number
    scope?: StringFilter<"apm_request_timings"> | string
    name?: StringFilter<"apm_request_timings"> | string
    path?: StringNullableFilter<"apm_request_timings"> | string | null
    method?: StringNullableFilter<"apm_request_timings"> | string | null
    status_code?: IntNullableFilter<"apm_request_timings"> | number | null
    duration_ms?: IntFilter<"apm_request_timings"> | number
    created_at?: DateTimeFilter<"apm_request_timings"> | Date | string
  }

  export type apm_request_timingsOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    name?: SortOrder
    path?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    status_code?: SortOrderInput | SortOrder
    duration_ms?: SortOrder
    created_at?: SortOrder
  }

  export type apm_request_timingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: apm_request_timingsWhereInput | apm_request_timingsWhereInput[]
    OR?: apm_request_timingsWhereInput[]
    NOT?: apm_request_timingsWhereInput | apm_request_timingsWhereInput[]
    scope?: StringFilter<"apm_request_timings"> | string
    name?: StringFilter<"apm_request_timings"> | string
    path?: StringNullableFilter<"apm_request_timings"> | string | null
    method?: StringNullableFilter<"apm_request_timings"> | string | null
    status_code?: IntNullableFilter<"apm_request_timings"> | number | null
    duration_ms?: IntFilter<"apm_request_timings"> | number
    created_at?: DateTimeFilter<"apm_request_timings"> | Date | string
  }, "id">

  export type apm_request_timingsOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    name?: SortOrder
    path?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    status_code?: SortOrderInput | SortOrder
    duration_ms?: SortOrder
    created_at?: SortOrder
    _count?: apm_request_timingsCountOrderByAggregateInput
    _avg?: apm_request_timingsAvgOrderByAggregateInput
    _max?: apm_request_timingsMaxOrderByAggregateInput
    _min?: apm_request_timingsMinOrderByAggregateInput
    _sum?: apm_request_timingsSumOrderByAggregateInput
  }

  export type apm_request_timingsScalarWhereWithAggregatesInput = {
    AND?: apm_request_timingsScalarWhereWithAggregatesInput | apm_request_timingsScalarWhereWithAggregatesInput[]
    OR?: apm_request_timingsScalarWhereWithAggregatesInput[]
    NOT?: apm_request_timingsScalarWhereWithAggregatesInput | apm_request_timingsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"apm_request_timings"> | bigint | number
    scope?: StringWithAggregatesFilter<"apm_request_timings"> | string
    name?: StringWithAggregatesFilter<"apm_request_timings"> | string
    path?: StringNullableWithAggregatesFilter<"apm_request_timings"> | string | null
    method?: StringNullableWithAggregatesFilter<"apm_request_timings"> | string | null
    status_code?: IntNullableWithAggregatesFilter<"apm_request_timings"> | number | null
    duration_ms?: IntWithAggregatesFilter<"apm_request_timings"> | number
    created_at?: DateTimeWithAggregatesFilter<"apm_request_timings"> | Date | string
  }

  export type apm_site_clicksWhereInput = {
    AND?: apm_site_clicksWhereInput | apm_site_clicksWhereInput[]
    OR?: apm_site_clicksWhereInput[]
    NOT?: apm_site_clicksWhereInput | apm_site_clicksWhereInput[]
    id?: BigIntFilter<"apm_site_clicks"> | bigint | number
    site_name?: StringFilter<"apm_site_clicks"> | string
    site_href?: StringFilter<"apm_site_clicks"> | string
    site_category?: StringFilter<"apm_site_clicks"> | string
    device_type?: StringFilter<"apm_site_clicks"> | string
    created_at?: DateTimeFilter<"apm_site_clicks"> | Date | string
  }

  export type apm_site_clicksOrderByWithRelationInput = {
    id?: SortOrder
    site_name?: SortOrder
    site_href?: SortOrder
    site_category?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_site_clicksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: apm_site_clicksWhereInput | apm_site_clicksWhereInput[]
    OR?: apm_site_clicksWhereInput[]
    NOT?: apm_site_clicksWhereInput | apm_site_clicksWhereInput[]
    site_name?: StringFilter<"apm_site_clicks"> | string
    site_href?: StringFilter<"apm_site_clicks"> | string
    site_category?: StringFilter<"apm_site_clicks"> | string
    device_type?: StringFilter<"apm_site_clicks"> | string
    created_at?: DateTimeFilter<"apm_site_clicks"> | Date | string
  }, "id">

  export type apm_site_clicksOrderByWithAggregationInput = {
    id?: SortOrder
    site_name?: SortOrder
    site_href?: SortOrder
    site_category?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
    _count?: apm_site_clicksCountOrderByAggregateInput
    _avg?: apm_site_clicksAvgOrderByAggregateInput
    _max?: apm_site_clicksMaxOrderByAggregateInput
    _min?: apm_site_clicksMinOrderByAggregateInput
    _sum?: apm_site_clicksSumOrderByAggregateInput
  }

  export type apm_site_clicksScalarWhereWithAggregatesInput = {
    AND?: apm_site_clicksScalarWhereWithAggregatesInput | apm_site_clicksScalarWhereWithAggregatesInput[]
    OR?: apm_site_clicksScalarWhereWithAggregatesInput[]
    NOT?: apm_site_clicksScalarWhereWithAggregatesInput | apm_site_clicksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"apm_site_clicks"> | bigint | number
    site_name?: StringWithAggregatesFilter<"apm_site_clicks"> | string
    site_href?: StringWithAggregatesFilter<"apm_site_clicks"> | string
    site_category?: StringWithAggregatesFilter<"apm_site_clicks"> | string
    device_type?: StringWithAggregatesFilter<"apm_site_clicks"> | string
    created_at?: DateTimeWithAggregatesFilter<"apm_site_clicks"> | Date | string
  }

  export type apm_system_metricsWhereInput = {
    AND?: apm_system_metricsWhereInput | apm_system_metricsWhereInput[]
    OR?: apm_system_metricsWhereInput[]
    NOT?: apm_system_metricsWhereInput | apm_system_metricsWhereInput[]
    id?: BigIntFilter<"apm_system_metrics"> | bigint | number
    cpu_percent?: DecimalFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    rss_mb?: IntFilter<"apm_system_metrics"> | number
    heap_used_mb?: IntFilter<"apm_system_metrics"> | number
    total_mem_mb?: IntFilter<"apm_system_metrics"> | number
    load_avg_1m?: DecimalFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"apm_system_metrics"> | Date | string
  }

  export type apm_system_metricsOrderByWithRelationInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
    created_at?: SortOrder
  }

  export type apm_system_metricsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: apm_system_metricsWhereInput | apm_system_metricsWhereInput[]
    OR?: apm_system_metricsWhereInput[]
    NOT?: apm_system_metricsWhereInput | apm_system_metricsWhereInput[]
    cpu_percent?: DecimalFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    rss_mb?: IntFilter<"apm_system_metrics"> | number
    heap_used_mb?: IntFilter<"apm_system_metrics"> | number
    total_mem_mb?: IntFilter<"apm_system_metrics"> | number
    load_avg_1m?: DecimalFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"apm_system_metrics"> | Date | string
  }, "id">

  export type apm_system_metricsOrderByWithAggregationInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
    created_at?: SortOrder
    _count?: apm_system_metricsCountOrderByAggregateInput
    _avg?: apm_system_metricsAvgOrderByAggregateInput
    _max?: apm_system_metricsMaxOrderByAggregateInput
    _min?: apm_system_metricsMinOrderByAggregateInput
    _sum?: apm_system_metricsSumOrderByAggregateInput
  }

  export type apm_system_metricsScalarWhereWithAggregatesInput = {
    AND?: apm_system_metricsScalarWhereWithAggregatesInput | apm_system_metricsScalarWhereWithAggregatesInput[]
    OR?: apm_system_metricsScalarWhereWithAggregatesInput[]
    NOT?: apm_system_metricsScalarWhereWithAggregatesInput | apm_system_metricsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"apm_system_metrics"> | bigint | number
    cpu_percent?: DecimalWithAggregatesFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalWithAggregatesFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    rss_mb?: IntWithAggregatesFilter<"apm_system_metrics"> | number
    heap_used_mb?: IntWithAggregatesFilter<"apm_system_metrics"> | number
    total_mem_mb?: IntWithAggregatesFilter<"apm_system_metrics"> | number
    load_avg_1m?: DecimalWithAggregatesFilter<"apm_system_metrics"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"apm_system_metrics"> | Date | string
  }

  export type apm_youtube_clicksWhereInput = {
    AND?: apm_youtube_clicksWhereInput | apm_youtube_clicksWhereInput[]
    OR?: apm_youtube_clicksWhereInput[]
    NOT?: apm_youtube_clicksWhereInput | apm_youtube_clicksWhereInput[]
    id?: BigIntFilter<"apm_youtube_clicks"> | bigint | number
    video_id?: StringFilter<"apm_youtube_clicks"> | string
    video_title?: StringFilter<"apm_youtube_clicks"> | string
    channel_title?: StringFilter<"apm_youtube_clicks"> | string
    device_type?: StringFilter<"apm_youtube_clicks"> | string
    created_at?: DateTimeFilter<"apm_youtube_clicks"> | Date | string
  }

  export type apm_youtube_clicksOrderByWithRelationInput = {
    id?: SortOrder
    video_id?: SortOrder
    video_title?: SortOrder
    channel_title?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_youtube_clicksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: apm_youtube_clicksWhereInput | apm_youtube_clicksWhereInput[]
    OR?: apm_youtube_clicksWhereInput[]
    NOT?: apm_youtube_clicksWhereInput | apm_youtube_clicksWhereInput[]
    video_id?: StringFilter<"apm_youtube_clicks"> | string
    video_title?: StringFilter<"apm_youtube_clicks"> | string
    channel_title?: StringFilter<"apm_youtube_clicks"> | string
    device_type?: StringFilter<"apm_youtube_clicks"> | string
    created_at?: DateTimeFilter<"apm_youtube_clicks"> | Date | string
  }, "id">

  export type apm_youtube_clicksOrderByWithAggregationInput = {
    id?: SortOrder
    video_id?: SortOrder
    video_title?: SortOrder
    channel_title?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
    _count?: apm_youtube_clicksCountOrderByAggregateInput
    _avg?: apm_youtube_clicksAvgOrderByAggregateInput
    _max?: apm_youtube_clicksMaxOrderByAggregateInput
    _min?: apm_youtube_clicksMinOrderByAggregateInput
    _sum?: apm_youtube_clicksSumOrderByAggregateInput
  }

  export type apm_youtube_clicksScalarWhereWithAggregatesInput = {
    AND?: apm_youtube_clicksScalarWhereWithAggregatesInput | apm_youtube_clicksScalarWhereWithAggregatesInput[]
    OR?: apm_youtube_clicksScalarWhereWithAggregatesInput[]
    NOT?: apm_youtube_clicksScalarWhereWithAggregatesInput | apm_youtube_clicksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"apm_youtube_clicks"> | bigint | number
    video_id?: StringWithAggregatesFilter<"apm_youtube_clicks"> | string
    video_title?: StringWithAggregatesFilter<"apm_youtube_clicks"> | string
    channel_title?: StringWithAggregatesFilter<"apm_youtube_clicks"> | string
    device_type?: StringWithAggregatesFilter<"apm_youtube_clicks"> | string
    created_at?: DateTimeWithAggregatesFilter<"apm_youtube_clicks"> | Date | string
  }

  export type loa_ark_gridWhereInput = {
    AND?: loa_ark_gridWhereInput | loa_ark_gridWhereInput[]
    OR?: loa_ark_gridWhereInput[]
    NOT?: loa_ark_gridWhereInput | loa_ark_gridWhereInput[]
    seq?: BigIntFilter<"loa_ark_grid"> | bigint | number
    core?: StringNullableFilter<"loa_ark_grid"> | string | null
    star?: StringNullableFilter<"loa_ark_grid"> | string | null
    class?: BigIntNullableFilter<"loa_ark_grid"> | bigint | number | null
    order?: IntNullableFilter<"loa_ark_grid"> | number | null
    loa_class?: XOR<Loa_classNullableScalarRelationFilter, loa_classWhereInput> | null
    loa_users_loa_users_core_moonToloa_ark_grid?: Loa_usersListRelationFilter
    loa_users_loa_users_core_starToloa_ark_grid?: Loa_usersListRelationFilter
    loa_users_loa_users_core_sunToloa_ark_grid?: Loa_usersListRelationFilter
  }

  export type loa_ark_gridOrderByWithRelationInput = {
    seq?: SortOrder
    core?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    loa_class?: loa_classOrderByWithRelationInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersOrderByRelationAggregateInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersOrderByRelationAggregateInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersOrderByRelationAggregateInput
  }

  export type loa_ark_gridWhereUniqueInput = Prisma.AtLeast<{
    seq?: bigint | number
    AND?: loa_ark_gridWhereInput | loa_ark_gridWhereInput[]
    OR?: loa_ark_gridWhereInput[]
    NOT?: loa_ark_gridWhereInput | loa_ark_gridWhereInput[]
    core?: StringNullableFilter<"loa_ark_grid"> | string | null
    star?: StringNullableFilter<"loa_ark_grid"> | string | null
    class?: BigIntNullableFilter<"loa_ark_grid"> | bigint | number | null
    order?: IntNullableFilter<"loa_ark_grid"> | number | null
    loa_class?: XOR<Loa_classNullableScalarRelationFilter, loa_classWhereInput> | null
    loa_users_loa_users_core_moonToloa_ark_grid?: Loa_usersListRelationFilter
    loa_users_loa_users_core_starToloa_ark_grid?: Loa_usersListRelationFilter
    loa_users_loa_users_core_sunToloa_ark_grid?: Loa_usersListRelationFilter
  }, "seq">

  export type loa_ark_gridOrderByWithAggregationInput = {
    seq?: SortOrder
    core?: SortOrderInput | SortOrder
    star?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    _count?: loa_ark_gridCountOrderByAggregateInput
    _avg?: loa_ark_gridAvgOrderByAggregateInput
    _max?: loa_ark_gridMaxOrderByAggregateInput
    _min?: loa_ark_gridMinOrderByAggregateInput
    _sum?: loa_ark_gridSumOrderByAggregateInput
  }

  export type loa_ark_gridScalarWhereWithAggregatesInput = {
    AND?: loa_ark_gridScalarWhereWithAggregatesInput | loa_ark_gridScalarWhereWithAggregatesInput[]
    OR?: loa_ark_gridScalarWhereWithAggregatesInput[]
    NOT?: loa_ark_gridScalarWhereWithAggregatesInput | loa_ark_gridScalarWhereWithAggregatesInput[]
    seq?: BigIntWithAggregatesFilter<"loa_ark_grid"> | bigint | number
    core?: StringNullableWithAggregatesFilter<"loa_ark_grid"> | string | null
    star?: StringNullableWithAggregatesFilter<"loa_ark_grid"> | string | null
    class?: BigIntNullableWithAggregatesFilter<"loa_ark_grid"> | bigint | number | null
    order?: IntNullableWithAggregatesFilter<"loa_ark_grid"> | number | null
  }

  export type loa_classWhereInput = {
    AND?: loa_classWhereInput | loa_classWhereInput[]
    OR?: loa_classWhereInput[]
    NOT?: loa_classWhereInput | loa_classWhereInput[]
    idx?: BigIntFilter<"loa_class"> | bigint | number
    class_engraving?: StringNullableFilter<"loa_class"> | string | null
    class_root?: StringNullableFilter<"loa_class"> | string | null
    gender?: StringNullableFilter<"loa_class"> | string | null
    class_detail?: StringNullableFilter<"loa_class"> | string | null
    loa_ark_grid?: Loa_ark_gridListRelationFilter
    loa_users?: Loa_usersListRelationFilter
  }

  export type loa_classOrderByWithRelationInput = {
    idx?: SortOrder
    class_engraving?: SortOrderInput | SortOrder
    class_root?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    class_detail?: SortOrderInput | SortOrder
    loa_ark_grid?: loa_ark_gridOrderByRelationAggregateInput
    loa_users?: loa_usersOrderByRelationAggregateInput
  }

  export type loa_classWhereUniqueInput = Prisma.AtLeast<{
    idx?: bigint | number
    AND?: loa_classWhereInput | loa_classWhereInput[]
    OR?: loa_classWhereInput[]
    NOT?: loa_classWhereInput | loa_classWhereInput[]
    class_engraving?: StringNullableFilter<"loa_class"> | string | null
    class_root?: StringNullableFilter<"loa_class"> | string | null
    gender?: StringNullableFilter<"loa_class"> | string | null
    class_detail?: StringNullableFilter<"loa_class"> | string | null
    loa_ark_grid?: Loa_ark_gridListRelationFilter
    loa_users?: Loa_usersListRelationFilter
  }, "idx">

  export type loa_classOrderByWithAggregationInput = {
    idx?: SortOrder
    class_engraving?: SortOrderInput | SortOrder
    class_root?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    class_detail?: SortOrderInput | SortOrder
    _count?: loa_classCountOrderByAggregateInput
    _avg?: loa_classAvgOrderByAggregateInput
    _max?: loa_classMaxOrderByAggregateInput
    _min?: loa_classMinOrderByAggregateInput
    _sum?: loa_classSumOrderByAggregateInput
  }

  export type loa_classScalarWhereWithAggregatesInput = {
    AND?: loa_classScalarWhereWithAggregatesInput | loa_classScalarWhereWithAggregatesInput[]
    OR?: loa_classScalarWhereWithAggregatesInput[]
    NOT?: loa_classScalarWhereWithAggregatesInput | loa_classScalarWhereWithAggregatesInput[]
    idx?: BigIntWithAggregatesFilter<"loa_class"> | bigint | number
    class_engraving?: StringNullableWithAggregatesFilter<"loa_class"> | string | null
    class_root?: StringNullableWithAggregatesFilter<"loa_class"> | string | null
    gender?: StringNullableWithAggregatesFilter<"loa_class"> | string | null
    class_detail?: StringNullableWithAggregatesFilter<"loa_class"> | string | null
  }

  export type loa_class_summariesWhereInput = {
    AND?: loa_class_summariesWhereInput | loa_class_summariesWhereInput[]
    OR?: loa_class_summariesWhereInput[]
    NOT?: loa_class_summariesWhereInput | loa_class_summariesWhereInput[]
    class_name?: StringFilter<"loa_class_summaries"> | string
    summary?: StringNullableFilter<"loa_class_summaries"> | string | null
    updated_at?: DateTimeNullableFilter<"loa_class_summaries"> | Date | string | null
  }

  export type loa_class_summariesOrderByWithRelationInput = {
    class_name?: SortOrder
    summary?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type loa_class_summariesWhereUniqueInput = Prisma.AtLeast<{
    class_name?: string
    AND?: loa_class_summariesWhereInput | loa_class_summariesWhereInput[]
    OR?: loa_class_summariesWhereInput[]
    NOT?: loa_class_summariesWhereInput | loa_class_summariesWhereInput[]
    summary?: StringNullableFilter<"loa_class_summaries"> | string | null
    updated_at?: DateTimeNullableFilter<"loa_class_summaries"> | Date | string | null
  }, "class_name">

  export type loa_class_summariesOrderByWithAggregationInput = {
    class_name?: SortOrder
    summary?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: loa_class_summariesCountOrderByAggregateInput
    _max?: loa_class_summariesMaxOrderByAggregateInput
    _min?: loa_class_summariesMinOrderByAggregateInput
  }

  export type loa_class_summariesScalarWhereWithAggregatesInput = {
    AND?: loa_class_summariesScalarWhereWithAggregatesInput | loa_class_summariesScalarWhereWithAggregatesInput[]
    OR?: loa_class_summariesScalarWhereWithAggregatesInput[]
    NOT?: loa_class_summariesScalarWhereWithAggregatesInput | loa_class_summariesScalarWhereWithAggregatesInput[]
    class_name?: StringWithAggregatesFilter<"loa_class_summaries"> | string
    summary?: StringNullableWithAggregatesFilter<"loa_class_summaries"> | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"loa_class_summaries"> | Date | string | null
  }

  export type loa_sitesWhereInput = {
    AND?: loa_sitesWhereInput | loa_sitesWhereInput[]
    OR?: loa_sitesWhereInput[]
    NOT?: loa_sitesWhereInput | loa_sitesWhereInput[]
    seq?: BigIntFilter<"loa_sites"> | bigint | number
    name?: StringFilter<"loa_sites"> | string
    href?: StringFilter<"loa_sites"> | string
    category?: StringNullableFilter<"loa_sites"> | string | null
    description?: StringNullableFilter<"loa_sites"> | string | null
    icon?: StringNullableFilter<"loa_sites"> | string | null
    is_active?: BoolNullableFilter<"loa_sites"> | boolean | null
    last_title?: StringNullableFilter<"loa_sites"> | string | null
    last_status?: IntNullableFilter<"loa_sites"> | number | null
    checked_at?: DateTimeNullableFilter<"loa_sites"> | Date | string | null
  }

  export type loa_sitesOrderByWithRelationInput = {
    seq?: SortOrder
    name?: SortOrder
    href?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    last_title?: SortOrderInput | SortOrder
    last_status?: SortOrderInput | SortOrder
    checked_at?: SortOrderInput | SortOrder
  }

  export type loa_sitesWhereUniqueInput = Prisma.AtLeast<{
    seq?: bigint | number
    href?: string
    AND?: loa_sitesWhereInput | loa_sitesWhereInput[]
    OR?: loa_sitesWhereInput[]
    NOT?: loa_sitesWhereInput | loa_sitesWhereInput[]
    name?: StringFilter<"loa_sites"> | string
    category?: StringNullableFilter<"loa_sites"> | string | null
    description?: StringNullableFilter<"loa_sites"> | string | null
    icon?: StringNullableFilter<"loa_sites"> | string | null
    is_active?: BoolNullableFilter<"loa_sites"> | boolean | null
    last_title?: StringNullableFilter<"loa_sites"> | string | null
    last_status?: IntNullableFilter<"loa_sites"> | number | null
    checked_at?: DateTimeNullableFilter<"loa_sites"> | Date | string | null
  }, "seq" | "href">

  export type loa_sitesOrderByWithAggregationInput = {
    seq?: SortOrder
    name?: SortOrder
    href?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    last_title?: SortOrderInput | SortOrder
    last_status?: SortOrderInput | SortOrder
    checked_at?: SortOrderInput | SortOrder
    _count?: loa_sitesCountOrderByAggregateInput
    _avg?: loa_sitesAvgOrderByAggregateInput
    _max?: loa_sitesMaxOrderByAggregateInput
    _min?: loa_sitesMinOrderByAggregateInput
    _sum?: loa_sitesSumOrderByAggregateInput
  }

  export type loa_sitesScalarWhereWithAggregatesInput = {
    AND?: loa_sitesScalarWhereWithAggregatesInput | loa_sitesScalarWhereWithAggregatesInput[]
    OR?: loa_sitesScalarWhereWithAggregatesInput[]
    NOT?: loa_sitesScalarWhereWithAggregatesInput | loa_sitesScalarWhereWithAggregatesInput[]
    seq?: BigIntWithAggregatesFilter<"loa_sites"> | bigint | number
    name?: StringWithAggregatesFilter<"loa_sites"> | string
    href?: StringWithAggregatesFilter<"loa_sites"> | string
    category?: StringNullableWithAggregatesFilter<"loa_sites"> | string | null
    description?: StringNullableWithAggregatesFilter<"loa_sites"> | string | null
    icon?: StringNullableWithAggregatesFilter<"loa_sites"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"loa_sites"> | boolean | null
    last_title?: StringNullableWithAggregatesFilter<"loa_sites"> | string | null
    last_status?: IntNullableWithAggregatesFilter<"loa_sites"> | number | null
    checked_at?: DateTimeNullableWithAggregatesFilter<"loa_sites"> | Date | string | null
  }

  export type loa_usersWhereInput = {
    AND?: loa_usersWhereInput | loa_usersWhereInput[]
    OR?: loa_usersWhereInput[]
    NOT?: loa_usersWhereInput | loa_usersWhereInput[]
    seq?: BigIntFilter<"loa_users"> | bigint | number
    server?: StringNullableFilter<"loa_users"> | string | null
    level?: FloatNullableFilter<"loa_users"> | number | null
    combat_power?: DecimalNullableFilter<"loa_users"> | Decimal | DecimalJsLike | number | string | null
    class?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    thesix?: IntNullableFilter<"loa_users"> | number | null
    name?: StringNullableFilter<"loa_users"> | string | null
    expedition_key?: StringNullableFilter<"loa_users"> | string | null
    core_sun?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    core_moon?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    core_star?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    stat_crit?: IntFilter<"loa_users"> | number
    stat_spec?: IntFilter<"loa_users"> | number
    stat_swift?: IntFilter<"loa_users"> | number
    stat_build?: StringNullableFilter<"loa_users"> | string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: XOR<Loa_ark_gridNullableScalarRelationFilter, loa_ark_gridWhereInput> | null
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: XOR<Loa_ark_gridNullableScalarRelationFilter, loa_ark_gridWhereInput> | null
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: XOR<Loa_ark_gridNullableScalarRelationFilter, loa_ark_gridWhereInput> | null
    loa_class?: XOR<Loa_classNullableScalarRelationFilter, loa_classWhereInput> | null
  }

  export type loa_usersOrderByWithRelationInput = {
    seq?: SortOrder
    server?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    combat_power?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    thesix?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    expedition_key?: SortOrderInput | SortOrder
    core_sun?: SortOrderInput | SortOrder
    core_moon?: SortOrderInput | SortOrder
    core_star?: SortOrderInput | SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
    stat_build?: SortOrderInput | SortOrder
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridOrderByWithRelationInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridOrderByWithRelationInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridOrderByWithRelationInput
    loa_class?: loa_classOrderByWithRelationInput
  }

  export type loa_usersWhereUniqueInput = Prisma.AtLeast<{
    seq?: bigint | number
    name?: string
    AND?: loa_usersWhereInput | loa_usersWhereInput[]
    OR?: loa_usersWhereInput[]
    NOT?: loa_usersWhereInput | loa_usersWhereInput[]
    server?: StringNullableFilter<"loa_users"> | string | null
    level?: FloatNullableFilter<"loa_users"> | number | null
    combat_power?: DecimalNullableFilter<"loa_users"> | Decimal | DecimalJsLike | number | string | null
    class?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    thesix?: IntNullableFilter<"loa_users"> | number | null
    expedition_key?: StringNullableFilter<"loa_users"> | string | null
    core_sun?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    core_moon?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    core_star?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    stat_crit?: IntFilter<"loa_users"> | number
    stat_spec?: IntFilter<"loa_users"> | number
    stat_swift?: IntFilter<"loa_users"> | number
    stat_build?: StringNullableFilter<"loa_users"> | string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: XOR<Loa_ark_gridNullableScalarRelationFilter, loa_ark_gridWhereInput> | null
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: XOR<Loa_ark_gridNullableScalarRelationFilter, loa_ark_gridWhereInput> | null
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: XOR<Loa_ark_gridNullableScalarRelationFilter, loa_ark_gridWhereInput> | null
    loa_class?: XOR<Loa_classNullableScalarRelationFilter, loa_classWhereInput> | null
  }, "seq" | "name">

  export type loa_usersOrderByWithAggregationInput = {
    seq?: SortOrder
    server?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    combat_power?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    thesix?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    expedition_key?: SortOrderInput | SortOrder
    core_sun?: SortOrderInput | SortOrder
    core_moon?: SortOrderInput | SortOrder
    core_star?: SortOrderInput | SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
    stat_build?: SortOrderInput | SortOrder
    _count?: loa_usersCountOrderByAggregateInput
    _avg?: loa_usersAvgOrderByAggregateInput
    _max?: loa_usersMaxOrderByAggregateInput
    _min?: loa_usersMinOrderByAggregateInput
    _sum?: loa_usersSumOrderByAggregateInput
  }

  export type loa_usersScalarWhereWithAggregatesInput = {
    AND?: loa_usersScalarWhereWithAggregatesInput | loa_usersScalarWhereWithAggregatesInput[]
    OR?: loa_usersScalarWhereWithAggregatesInput[]
    NOT?: loa_usersScalarWhereWithAggregatesInput | loa_usersScalarWhereWithAggregatesInput[]
    seq?: BigIntWithAggregatesFilter<"loa_users"> | bigint | number
    server?: StringNullableWithAggregatesFilter<"loa_users"> | string | null
    level?: FloatNullableWithAggregatesFilter<"loa_users"> | number | null
    combat_power?: DecimalNullableWithAggregatesFilter<"loa_users"> | Decimal | DecimalJsLike | number | string | null
    class?: BigIntNullableWithAggregatesFilter<"loa_users"> | bigint | number | null
    thesix?: IntNullableWithAggregatesFilter<"loa_users"> | number | null
    name?: StringNullableWithAggregatesFilter<"loa_users"> | string | null
    expedition_key?: StringNullableWithAggregatesFilter<"loa_users"> | string | null
    core_sun?: BigIntNullableWithAggregatesFilter<"loa_users"> | bigint | number | null
    core_moon?: BigIntNullableWithAggregatesFilter<"loa_users"> | bigint | number | null
    core_star?: BigIntNullableWithAggregatesFilter<"loa_users"> | bigint | number | null
    stat_crit?: IntWithAggregatesFilter<"loa_users"> | number
    stat_spec?: IntWithAggregatesFilter<"loa_users"> | number
    stat_swift?: IntWithAggregatesFilter<"loa_users"> | number
    stat_build?: StringNullableWithAggregatesFilter<"loa_users"> | string | null
  }

  export type monitoring_api_probesWhereInput = {
    AND?: monitoring_api_probesWhereInput | monitoring_api_probesWhereInput[]
    OR?: monitoring_api_probesWhereInput[]
    NOT?: monitoring_api_probesWhereInput | monitoring_api_probesWhereInput[]
    id?: BigIntFilter<"monitoring_api_probes"> | bigint | number
    api_key?: StringFilter<"monitoring_api_probes"> | string
    path?: StringFilter<"monitoring_api_probes"> | string
    method?: StringFilter<"monitoring_api_probes"> | string
    cache_type?: StringFilter<"monitoring_api_probes"> | string
    status_code?: IntFilter<"monitoring_api_probes"> | number
    duration_ms?: IntFilter<"monitoring_api_probes"> | number
    is_success?: BoolFilter<"monitoring_api_probes"> | boolean
    created_at?: DateTimeFilter<"monitoring_api_probes"> | Date | string
  }

  export type monitoring_api_probesOrderByWithRelationInput = {
    id?: SortOrder
    api_key?: SortOrder
    path?: SortOrder
    method?: SortOrder
    cache_type?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    is_success?: SortOrder
    created_at?: SortOrder
  }

  export type monitoring_api_probesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: monitoring_api_probesWhereInput | monitoring_api_probesWhereInput[]
    OR?: monitoring_api_probesWhereInput[]
    NOT?: monitoring_api_probesWhereInput | monitoring_api_probesWhereInput[]
    api_key?: StringFilter<"monitoring_api_probes"> | string
    path?: StringFilter<"monitoring_api_probes"> | string
    method?: StringFilter<"monitoring_api_probes"> | string
    cache_type?: StringFilter<"monitoring_api_probes"> | string
    status_code?: IntFilter<"monitoring_api_probes"> | number
    duration_ms?: IntFilter<"monitoring_api_probes"> | number
    is_success?: BoolFilter<"monitoring_api_probes"> | boolean
    created_at?: DateTimeFilter<"monitoring_api_probes"> | Date | string
  }, "id">

  export type monitoring_api_probesOrderByWithAggregationInput = {
    id?: SortOrder
    api_key?: SortOrder
    path?: SortOrder
    method?: SortOrder
    cache_type?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    is_success?: SortOrder
    created_at?: SortOrder
    _count?: monitoring_api_probesCountOrderByAggregateInput
    _avg?: monitoring_api_probesAvgOrderByAggregateInput
    _max?: monitoring_api_probesMaxOrderByAggregateInput
    _min?: monitoring_api_probesMinOrderByAggregateInput
    _sum?: monitoring_api_probesSumOrderByAggregateInput
  }

  export type monitoring_api_probesScalarWhereWithAggregatesInput = {
    AND?: monitoring_api_probesScalarWhereWithAggregatesInput | monitoring_api_probesScalarWhereWithAggregatesInput[]
    OR?: monitoring_api_probesScalarWhereWithAggregatesInput[]
    NOT?: monitoring_api_probesScalarWhereWithAggregatesInput | monitoring_api_probesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"monitoring_api_probes"> | bigint | number
    api_key?: StringWithAggregatesFilter<"monitoring_api_probes"> | string
    path?: StringWithAggregatesFilter<"monitoring_api_probes"> | string
    method?: StringWithAggregatesFilter<"monitoring_api_probes"> | string
    cache_type?: StringWithAggregatesFilter<"monitoring_api_probes"> | string
    status_code?: IntWithAggregatesFilter<"monitoring_api_probes"> | number
    duration_ms?: IntWithAggregatesFilter<"monitoring_api_probes"> | number
    is_success?: BoolWithAggregatesFilter<"monitoring_api_probes"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"monitoring_api_probes"> | Date | string
  }

  export type youtube_view_snapshotsWhereInput = {
    AND?: youtube_view_snapshotsWhereInput | youtube_view_snapshotsWhereInput[]
    OR?: youtube_view_snapshotsWhereInput[]
    NOT?: youtube_view_snapshotsWhereInput | youtube_view_snapshotsWhereInput[]
    id?: BigIntFilter<"youtube_view_snapshots"> | bigint | number
    video_id?: StringFilter<"youtube_view_snapshots"> | string
    title?: StringFilter<"youtube_view_snapshots"> | string
    channel_title?: StringFilter<"youtube_view_snapshots"> | string
    thumbnail_url?: StringFilter<"youtube_view_snapshots"> | string
    published_at?: DateTimeFilter<"youtube_view_snapshots"> | Date | string
    duration?: StringFilter<"youtube_view_snapshots"> | string
    view_count?: BigIntFilter<"youtube_view_snapshots"> | bigint | number
    recorded_date?: DateTimeFilter<"youtube_view_snapshots"> | Date | string
  }

  export type youtube_view_snapshotsOrderByWithRelationInput = {
    id?: SortOrder
    video_id?: SortOrder
    title?: SortOrder
    channel_title?: SortOrder
    thumbnail_url?: SortOrder
    published_at?: SortOrder
    duration?: SortOrder
    view_count?: SortOrder
    recorded_date?: SortOrder
  }

  export type youtube_view_snapshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    video_id_recorded_date?: youtube_view_snapshotsVideo_idRecorded_dateCompoundUniqueInput
    AND?: youtube_view_snapshotsWhereInput | youtube_view_snapshotsWhereInput[]
    OR?: youtube_view_snapshotsWhereInput[]
    NOT?: youtube_view_snapshotsWhereInput | youtube_view_snapshotsWhereInput[]
    video_id?: StringFilter<"youtube_view_snapshots"> | string
    title?: StringFilter<"youtube_view_snapshots"> | string
    channel_title?: StringFilter<"youtube_view_snapshots"> | string
    thumbnail_url?: StringFilter<"youtube_view_snapshots"> | string
    published_at?: DateTimeFilter<"youtube_view_snapshots"> | Date | string
    duration?: StringFilter<"youtube_view_snapshots"> | string
    view_count?: BigIntFilter<"youtube_view_snapshots"> | bigint | number
    recorded_date?: DateTimeFilter<"youtube_view_snapshots"> | Date | string
  }, "id" | "video_id_recorded_date">

  export type youtube_view_snapshotsOrderByWithAggregationInput = {
    id?: SortOrder
    video_id?: SortOrder
    title?: SortOrder
    channel_title?: SortOrder
    thumbnail_url?: SortOrder
    published_at?: SortOrder
    duration?: SortOrder
    view_count?: SortOrder
    recorded_date?: SortOrder
    _count?: youtube_view_snapshotsCountOrderByAggregateInput
    _avg?: youtube_view_snapshotsAvgOrderByAggregateInput
    _max?: youtube_view_snapshotsMaxOrderByAggregateInput
    _min?: youtube_view_snapshotsMinOrderByAggregateInput
    _sum?: youtube_view_snapshotsSumOrderByAggregateInput
  }

  export type youtube_view_snapshotsScalarWhereWithAggregatesInput = {
    AND?: youtube_view_snapshotsScalarWhereWithAggregatesInput | youtube_view_snapshotsScalarWhereWithAggregatesInput[]
    OR?: youtube_view_snapshotsScalarWhereWithAggregatesInput[]
    NOT?: youtube_view_snapshotsScalarWhereWithAggregatesInput | youtube_view_snapshotsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"youtube_view_snapshots"> | bigint | number
    video_id?: StringWithAggregatesFilter<"youtube_view_snapshots"> | string
    title?: StringWithAggregatesFilter<"youtube_view_snapshots"> | string
    channel_title?: StringWithAggregatesFilter<"youtube_view_snapshots"> | string
    thumbnail_url?: StringWithAggregatesFilter<"youtube_view_snapshots"> | string
    published_at?: DateTimeWithAggregatesFilter<"youtube_view_snapshots"> | Date | string
    duration?: StringWithAggregatesFilter<"youtube_view_snapshots"> | string
    view_count?: BigIntWithAggregatesFilter<"youtube_view_snapshots"> | bigint | number
    recorded_date?: DateTimeWithAggregatesFilter<"youtube_view_snapshots"> | Date | string
  }

  export type admin_usersCreateInput = {
    id?: bigint | number
    username: string
    password_hash: string
    role?: string
    created_at?: Date | string
  }

  export type admin_usersUncheckedCreateInput = {
    id?: bigint | number
    username: string
    password_hash: string
    role?: string
    created_at?: Date | string
  }

  export type admin_usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_usersCreateManyInput = {
    id?: bigint | number
    username: string
    password_hash: string
    role?: string
    created_at?: Date | string
  }

  export type admin_usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type admin_usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_page_visitsCreateInput = {
    id?: bigint | number
    path: string
    device_type?: string
    user_agent: string
    referrer?: string | null
    visits?: number
    last_seen_at?: Date | string
    created_at?: Date | string
    country_code?: string
    os_name?: string
    browser_name?: string
  }

  export type apm_page_visitsUncheckedCreateInput = {
    id?: bigint | number
    path: string
    device_type?: string
    user_agent: string
    referrer?: string | null
    visits?: number
    last_seen_at?: Date | string
    created_at?: Date | string
    country_code?: string
    os_name?: string
    browser_name?: string
  }

  export type apm_page_visitsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    visits?: IntFieldUpdateOperationsInput | number
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country_code?: StringFieldUpdateOperationsInput | string
    os_name?: StringFieldUpdateOperationsInput | string
    browser_name?: StringFieldUpdateOperationsInput | string
  }

  export type apm_page_visitsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    visits?: IntFieldUpdateOperationsInput | number
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country_code?: StringFieldUpdateOperationsInput | string
    os_name?: StringFieldUpdateOperationsInput | string
    browser_name?: StringFieldUpdateOperationsInput | string
  }

  export type apm_page_visitsCreateManyInput = {
    id?: bigint | number
    path: string
    device_type?: string
    user_agent: string
    referrer?: string | null
    visits?: number
    last_seen_at?: Date | string
    created_at?: Date | string
    country_code?: string
    os_name?: string
    browser_name?: string
  }

  export type apm_page_visitsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    visits?: IntFieldUpdateOperationsInput | number
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country_code?: StringFieldUpdateOperationsInput | string
    os_name?: StringFieldUpdateOperationsInput | string
    browser_name?: StringFieldUpdateOperationsInput | string
  }

  export type apm_page_visitsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    path?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    visits?: IntFieldUpdateOperationsInput | number
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country_code?: StringFieldUpdateOperationsInput | string
    os_name?: StringFieldUpdateOperationsInput | string
    browser_name?: StringFieldUpdateOperationsInput | string
  }

  export type apm_request_timingsCreateInput = {
    id?: bigint | number
    scope: string
    name: string
    path?: string | null
    method?: string | null
    status_code?: number | null
    duration_ms: number
    created_at?: Date | string
  }

  export type apm_request_timingsUncheckedCreateInput = {
    id?: bigint | number
    scope: string
    name: string
    path?: string | null
    method?: string | null
    status_code?: number | null
    duration_ms: number
    created_at?: Date | string
  }

  export type apm_request_timingsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    scope?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    duration_ms?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_request_timingsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    scope?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    duration_ms?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_request_timingsCreateManyInput = {
    id?: bigint | number
    scope: string
    name: string
    path?: string | null
    method?: string | null
    status_code?: number | null
    duration_ms: number
    created_at?: Date | string
  }

  export type apm_request_timingsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    scope?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    duration_ms?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_request_timingsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    scope?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableIntFieldUpdateOperationsInput | number | null
    duration_ms?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_site_clicksCreateInput = {
    id?: bigint | number
    site_name: string
    site_href: string
    site_category?: string
    device_type?: string
    created_at?: Date | string
  }

  export type apm_site_clicksUncheckedCreateInput = {
    id?: bigint | number
    site_name: string
    site_href: string
    site_category?: string
    device_type?: string
    created_at?: Date | string
  }

  export type apm_site_clicksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    site_name?: StringFieldUpdateOperationsInput | string
    site_href?: StringFieldUpdateOperationsInput | string
    site_category?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_site_clicksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    site_name?: StringFieldUpdateOperationsInput | string
    site_href?: StringFieldUpdateOperationsInput | string
    site_category?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_site_clicksCreateManyInput = {
    id?: bigint | number
    site_name: string
    site_href: string
    site_category?: string
    device_type?: string
    created_at?: Date | string
  }

  export type apm_site_clicksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    site_name?: StringFieldUpdateOperationsInput | string
    site_href?: StringFieldUpdateOperationsInput | string
    site_category?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_site_clicksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    site_name?: StringFieldUpdateOperationsInput | string
    site_href?: StringFieldUpdateOperationsInput | string
    site_category?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_system_metricsCreateInput = {
    id?: bigint | number
    cpu_percent: Decimal | DecimalJsLike | number | string
    memory_percent: Decimal | DecimalJsLike | number | string
    rss_mb: number
    heap_used_mb: number
    total_mem_mb: number
    load_avg_1m: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type apm_system_metricsUncheckedCreateInput = {
    id?: bigint | number
    cpu_percent: Decimal | DecimalJsLike | number | string
    memory_percent: Decimal | DecimalJsLike | number | string
    rss_mb: number
    heap_used_mb: number
    total_mem_mb: number
    load_avg_1m: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type apm_system_metricsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cpu_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rss_mb?: IntFieldUpdateOperationsInput | number
    heap_used_mb?: IntFieldUpdateOperationsInput | number
    total_mem_mb?: IntFieldUpdateOperationsInput | number
    load_avg_1m?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_system_metricsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cpu_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rss_mb?: IntFieldUpdateOperationsInput | number
    heap_used_mb?: IntFieldUpdateOperationsInput | number
    total_mem_mb?: IntFieldUpdateOperationsInput | number
    load_avg_1m?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_system_metricsCreateManyInput = {
    id?: bigint | number
    cpu_percent: Decimal | DecimalJsLike | number | string
    memory_percent: Decimal | DecimalJsLike | number | string
    rss_mb: number
    heap_used_mb: number
    total_mem_mb: number
    load_avg_1m: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type apm_system_metricsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cpu_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rss_mb?: IntFieldUpdateOperationsInput | number
    heap_used_mb?: IntFieldUpdateOperationsInput | number
    total_mem_mb?: IntFieldUpdateOperationsInput | number
    load_avg_1m?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_system_metricsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cpu_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    memory_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rss_mb?: IntFieldUpdateOperationsInput | number
    heap_used_mb?: IntFieldUpdateOperationsInput | number
    total_mem_mb?: IntFieldUpdateOperationsInput | number
    load_avg_1m?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_youtube_clicksCreateInput = {
    id?: bigint | number
    video_id: string
    video_title?: string
    channel_title?: string
    device_type?: string
    created_at?: Date | string
  }

  export type apm_youtube_clicksUncheckedCreateInput = {
    id?: bigint | number
    video_id: string
    video_title?: string
    channel_title?: string
    device_type?: string
    created_at?: Date | string
  }

  export type apm_youtube_clicksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_youtube_clicksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_youtube_clicksCreateManyInput = {
    id?: bigint | number
    video_id: string
    video_title?: string
    channel_title?: string
    device_type?: string
    created_at?: Date | string
  }

  export type apm_youtube_clicksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type apm_youtube_clicksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    video_title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loa_ark_gridCreateInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
    loa_class?: loa_classCreateNestedOneWithoutLoa_ark_gridInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridUncheckedCreateInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    class?: bigint | number | null
    order?: number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridUpdateInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_class?: loa_classUpdateOneWithoutLoa_ark_gridNestedInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUncheckedUpdateInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridCreateManyInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    class?: bigint | number | null
    order?: number | null
  }

  export type loa_ark_gridUpdateManyMutationInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type loa_ark_gridUncheckedUpdateManyInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type loa_classCreateInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
    loa_ark_grid?: loa_ark_gridCreateNestedManyWithoutLoa_classInput
    loa_users?: loa_usersCreateNestedManyWithoutLoa_classInput
  }

  export type loa_classUncheckedCreateInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
    loa_ark_grid?: loa_ark_gridUncheckedCreateNestedManyWithoutLoa_classInput
    loa_users?: loa_usersUncheckedCreateNestedManyWithoutLoa_classInput
  }

  export type loa_classUpdateInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid?: loa_ark_gridUpdateManyWithoutLoa_classNestedInput
    loa_users?: loa_usersUpdateManyWithoutLoa_classNestedInput
  }

  export type loa_classUncheckedUpdateInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid?: loa_ark_gridUncheckedUpdateManyWithoutLoa_classNestedInput
    loa_users?: loa_usersUncheckedUpdateManyWithoutLoa_classNestedInput
  }

  export type loa_classCreateManyInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
  }

  export type loa_classUpdateManyMutationInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_classUncheckedUpdateManyInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_class_summariesCreateInput = {
    class_name: string
    summary?: string | null
    updated_at?: Date | string | null
  }

  export type loa_class_summariesUncheckedCreateInput = {
    class_name: string
    summary?: string | null
    updated_at?: Date | string | null
  }

  export type loa_class_summariesUpdateInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_class_summariesUncheckedUpdateInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_class_summariesCreateManyInput = {
    class_name: string
    summary?: string | null
    updated_at?: Date | string | null
  }

  export type loa_class_summariesUpdateManyMutationInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_class_summariesUncheckedUpdateManyInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_sitesCreateInput = {
    seq?: bigint | number
    name: string
    href: string
    category?: string | null
    description?: string | null
    icon?: string | null
    is_active?: boolean | null
    last_title?: string | null
    last_status?: number | null
    checked_at?: Date | string | null
  }

  export type loa_sitesUncheckedCreateInput = {
    seq?: bigint | number
    name: string
    href: string
    category?: string | null
    description?: string | null
    icon?: string | null
    is_active?: boolean | null
    last_title?: string | null
    last_status?: number | null
    checked_at?: Date | string | null
  }

  export type loa_sitesUpdateInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_title?: NullableStringFieldUpdateOperationsInput | string | null
    last_status?: NullableIntFieldUpdateOperationsInput | number | null
    checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_sitesUncheckedUpdateInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_title?: NullableStringFieldUpdateOperationsInput | string | null
    last_status?: NullableIntFieldUpdateOperationsInput | number | null
    checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_sitesCreateManyInput = {
    seq?: bigint | number
    name: string
    href: string
    category?: string | null
    description?: string | null
    icon?: string | null
    is_active?: boolean | null
    last_title?: string | null
    last_status?: number | null
    checked_at?: Date | string | null
  }

  export type loa_sitesUpdateManyMutationInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_title?: NullableStringFieldUpdateOperationsInput | string | null
    last_status?: NullableIntFieldUpdateOperationsInput | number | null
    checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_sitesUncheckedUpdateManyInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_title?: NullableStringFieldUpdateOperationsInput | string | null
    last_status?: NullableIntFieldUpdateOperationsInput | number | null
    checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loa_usersCreateInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
    loa_class?: loa_classCreateNestedOneWithoutLoa_usersInput
  }

  export type loa_usersUncheckedCreateInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_moon?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersUpdateInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_starToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridNestedInput
    loa_class?: loa_classUpdateOneWithoutLoa_usersNestedInput
  }

  export type loa_usersUncheckedUpdateInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersCreateManyInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_moon?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersUpdateManyMutationInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUncheckedUpdateManyInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type monitoring_api_probesCreateInput = {
    id?: bigint | number
    api_key: string
    path: string
    method: string
    cache_type?: string
    status_code: number
    duration_ms: number
    is_success?: boolean
    created_at?: Date | string
  }

  export type monitoring_api_probesUncheckedCreateInput = {
    id?: bigint | number
    api_key: string
    path: string
    method: string
    cache_type?: string
    status_code: number
    duration_ms: number
    is_success?: boolean
    created_at?: Date | string
  }

  export type monitoring_api_probesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_key?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    cache_type?: StringFieldUpdateOperationsInput | string
    status_code?: IntFieldUpdateOperationsInput | number
    duration_ms?: IntFieldUpdateOperationsInput | number
    is_success?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type monitoring_api_probesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_key?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    cache_type?: StringFieldUpdateOperationsInput | string
    status_code?: IntFieldUpdateOperationsInput | number
    duration_ms?: IntFieldUpdateOperationsInput | number
    is_success?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type monitoring_api_probesCreateManyInput = {
    id?: bigint | number
    api_key: string
    path: string
    method: string
    cache_type?: string
    status_code: number
    duration_ms: number
    is_success?: boolean
    created_at?: Date | string
  }

  export type monitoring_api_probesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_key?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    cache_type?: StringFieldUpdateOperationsInput | string
    status_code?: IntFieldUpdateOperationsInput | number
    duration_ms?: IntFieldUpdateOperationsInput | number
    is_success?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type monitoring_api_probesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    api_key?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    cache_type?: StringFieldUpdateOperationsInput | string
    status_code?: IntFieldUpdateOperationsInput | number
    duration_ms?: IntFieldUpdateOperationsInput | number
    is_success?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type youtube_view_snapshotsCreateInput = {
    id?: bigint | number
    video_id: string
    title?: string
    channel_title?: string
    thumbnail_url?: string
    published_at: Date | string
    duration?: string
    view_count?: bigint | number
    recorded_date: Date | string
  }

  export type youtube_view_snapshotsUncheckedCreateInput = {
    id?: bigint | number
    video_id: string
    title?: string
    channel_title?: string
    thumbnail_url?: string
    published_at: Date | string
    duration?: string
    view_count?: bigint | number
    recorded_date: Date | string
  }

  export type youtube_view_snapshotsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    view_count?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type youtube_view_snapshotsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    view_count?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type youtube_view_snapshotsCreateManyInput = {
    id?: bigint | number
    video_id: string
    title?: string
    channel_title?: string
    thumbnail_url?: string
    published_at: Date | string
    duration?: string
    view_count?: bigint | number
    recorded_date: Date | string
  }

  export type youtube_view_snapshotsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    view_count?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type youtube_view_snapshotsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    video_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    channel_title?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    view_count?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type admin_usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type admin_usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type admin_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type admin_usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type admin_usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type apm_page_visitsPathDevice_typeCountry_codeOs_nameBrowser_nameCompoundUniqueInput = {
    path: string
    device_type: string
    country_code: string
    os_name: string
    browser_name: string
  }

  export type apm_page_visitsCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    device_type?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    visits?: SortOrder
    last_seen_at?: SortOrder
    created_at?: SortOrder
    country_code?: SortOrder
    os_name?: SortOrder
    browser_name?: SortOrder
  }

  export type apm_page_visitsAvgOrderByAggregateInput = {
    id?: SortOrder
    visits?: SortOrder
  }

  export type apm_page_visitsMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    device_type?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    visits?: SortOrder
    last_seen_at?: SortOrder
    created_at?: SortOrder
    country_code?: SortOrder
    os_name?: SortOrder
    browser_name?: SortOrder
  }

  export type apm_page_visitsMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    device_type?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    visits?: SortOrder
    last_seen_at?: SortOrder
    created_at?: SortOrder
    country_code?: SortOrder
    os_name?: SortOrder
    browser_name?: SortOrder
  }

  export type apm_page_visitsSumOrderByAggregateInput = {
    id?: SortOrder
    visits?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type apm_request_timingsCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    name?: SortOrder
    path?: SortOrder
    method?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    created_at?: SortOrder
  }

  export type apm_request_timingsAvgOrderByAggregateInput = {
    id?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
  }

  export type apm_request_timingsMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    name?: SortOrder
    path?: SortOrder
    method?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    created_at?: SortOrder
  }

  export type apm_request_timingsMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    name?: SortOrder
    path?: SortOrder
    method?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    created_at?: SortOrder
  }

  export type apm_request_timingsSumOrderByAggregateInput = {
    id?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type apm_site_clicksCountOrderByAggregateInput = {
    id?: SortOrder
    site_name?: SortOrder
    site_href?: SortOrder
    site_category?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_site_clicksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type apm_site_clicksMaxOrderByAggregateInput = {
    id?: SortOrder
    site_name?: SortOrder
    site_href?: SortOrder
    site_category?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_site_clicksMinOrderByAggregateInput = {
    id?: SortOrder
    site_name?: SortOrder
    site_href?: SortOrder
    site_category?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_site_clicksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type apm_system_metricsCountOrderByAggregateInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
    created_at?: SortOrder
  }

  export type apm_system_metricsAvgOrderByAggregateInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
  }

  export type apm_system_metricsMaxOrderByAggregateInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
    created_at?: SortOrder
  }

  export type apm_system_metricsMinOrderByAggregateInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
    created_at?: SortOrder
  }

  export type apm_system_metricsSumOrderByAggregateInput = {
    id?: SortOrder
    cpu_percent?: SortOrder
    memory_percent?: SortOrder
    rss_mb?: SortOrder
    heap_used_mb?: SortOrder
    total_mem_mb?: SortOrder
    load_avg_1m?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type apm_youtube_clicksCountOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    video_title?: SortOrder
    channel_title?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_youtube_clicksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type apm_youtube_clicksMaxOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    video_title?: SortOrder
    channel_title?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_youtube_clicksMinOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    video_title?: SortOrder
    channel_title?: SortOrder
    device_type?: SortOrder
    created_at?: SortOrder
  }

  export type apm_youtube_clicksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Loa_classNullableScalarRelationFilter = {
    is?: loa_classWhereInput | null
    isNot?: loa_classWhereInput | null
  }

  export type Loa_usersListRelationFilter = {
    every?: loa_usersWhereInput
    some?: loa_usersWhereInput
    none?: loa_usersWhereInput
  }

  export type loa_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loa_ark_gridCountOrderByAggregateInput = {
    seq?: SortOrder
    core?: SortOrder
    star?: SortOrder
    class?: SortOrder
    order?: SortOrder
  }

  export type loa_ark_gridAvgOrderByAggregateInput = {
    seq?: SortOrder
    class?: SortOrder
    order?: SortOrder
  }

  export type loa_ark_gridMaxOrderByAggregateInput = {
    seq?: SortOrder
    core?: SortOrder
    star?: SortOrder
    class?: SortOrder
    order?: SortOrder
  }

  export type loa_ark_gridMinOrderByAggregateInput = {
    seq?: SortOrder
    core?: SortOrder
    star?: SortOrder
    class?: SortOrder
    order?: SortOrder
  }

  export type loa_ark_gridSumOrderByAggregateInput = {
    seq?: SortOrder
    class?: SortOrder
    order?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type Loa_ark_gridListRelationFilter = {
    every?: loa_ark_gridWhereInput
    some?: loa_ark_gridWhereInput
    none?: loa_ark_gridWhereInput
  }

  export type loa_ark_gridOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type loa_classCountOrderByAggregateInput = {
    idx?: SortOrder
    class_engraving?: SortOrder
    class_root?: SortOrder
    gender?: SortOrder
    class_detail?: SortOrder
  }

  export type loa_classAvgOrderByAggregateInput = {
    idx?: SortOrder
  }

  export type loa_classMaxOrderByAggregateInput = {
    idx?: SortOrder
    class_engraving?: SortOrder
    class_root?: SortOrder
    gender?: SortOrder
    class_detail?: SortOrder
  }

  export type loa_classMinOrderByAggregateInput = {
    idx?: SortOrder
    class_engraving?: SortOrder
    class_root?: SortOrder
    gender?: SortOrder
    class_detail?: SortOrder
  }

  export type loa_classSumOrderByAggregateInput = {
    idx?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type loa_class_summariesCountOrderByAggregateInput = {
    class_name?: SortOrder
    summary?: SortOrder
    updated_at?: SortOrder
  }

  export type loa_class_summariesMaxOrderByAggregateInput = {
    class_name?: SortOrder
    summary?: SortOrder
    updated_at?: SortOrder
  }

  export type loa_class_summariesMinOrderByAggregateInput = {
    class_name?: SortOrder
    summary?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type loa_sitesCountOrderByAggregateInput = {
    seq?: SortOrder
    name?: SortOrder
    href?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    is_active?: SortOrder
    last_title?: SortOrder
    last_status?: SortOrder
    checked_at?: SortOrder
  }

  export type loa_sitesAvgOrderByAggregateInput = {
    seq?: SortOrder
    last_status?: SortOrder
  }

  export type loa_sitesMaxOrderByAggregateInput = {
    seq?: SortOrder
    name?: SortOrder
    href?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    is_active?: SortOrder
    last_title?: SortOrder
    last_status?: SortOrder
    checked_at?: SortOrder
  }

  export type loa_sitesMinOrderByAggregateInput = {
    seq?: SortOrder
    name?: SortOrder
    href?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    is_active?: SortOrder
    last_title?: SortOrder
    last_status?: SortOrder
    checked_at?: SortOrder
  }

  export type loa_sitesSumOrderByAggregateInput = {
    seq?: SortOrder
    last_status?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Loa_ark_gridNullableScalarRelationFilter = {
    is?: loa_ark_gridWhereInput | null
    isNot?: loa_ark_gridWhereInput | null
  }

  export type loa_usersCountOrderByAggregateInput = {
    seq?: SortOrder
    server?: SortOrder
    level?: SortOrder
    combat_power?: SortOrder
    class?: SortOrder
    thesix?: SortOrder
    name?: SortOrder
    expedition_key?: SortOrder
    core_sun?: SortOrder
    core_moon?: SortOrder
    core_star?: SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
    stat_build?: SortOrder
  }

  export type loa_usersAvgOrderByAggregateInput = {
    seq?: SortOrder
    level?: SortOrder
    combat_power?: SortOrder
    class?: SortOrder
    thesix?: SortOrder
    core_sun?: SortOrder
    core_moon?: SortOrder
    core_star?: SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
  }

  export type loa_usersMaxOrderByAggregateInput = {
    seq?: SortOrder
    server?: SortOrder
    level?: SortOrder
    combat_power?: SortOrder
    class?: SortOrder
    thesix?: SortOrder
    name?: SortOrder
    expedition_key?: SortOrder
    core_sun?: SortOrder
    core_moon?: SortOrder
    core_star?: SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
    stat_build?: SortOrder
  }

  export type loa_usersMinOrderByAggregateInput = {
    seq?: SortOrder
    server?: SortOrder
    level?: SortOrder
    combat_power?: SortOrder
    class?: SortOrder
    thesix?: SortOrder
    name?: SortOrder
    expedition_key?: SortOrder
    core_sun?: SortOrder
    core_moon?: SortOrder
    core_star?: SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
    stat_build?: SortOrder
  }

  export type loa_usersSumOrderByAggregateInput = {
    seq?: SortOrder
    level?: SortOrder
    combat_power?: SortOrder
    class?: SortOrder
    thesix?: SortOrder
    core_sun?: SortOrder
    core_moon?: SortOrder
    core_star?: SortOrder
    stat_crit?: SortOrder
    stat_spec?: SortOrder
    stat_swift?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type monitoring_api_probesCountOrderByAggregateInput = {
    id?: SortOrder
    api_key?: SortOrder
    path?: SortOrder
    method?: SortOrder
    cache_type?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    is_success?: SortOrder
    created_at?: SortOrder
  }

  export type monitoring_api_probesAvgOrderByAggregateInput = {
    id?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
  }

  export type monitoring_api_probesMaxOrderByAggregateInput = {
    id?: SortOrder
    api_key?: SortOrder
    path?: SortOrder
    method?: SortOrder
    cache_type?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    is_success?: SortOrder
    created_at?: SortOrder
  }

  export type monitoring_api_probesMinOrderByAggregateInput = {
    id?: SortOrder
    api_key?: SortOrder
    path?: SortOrder
    method?: SortOrder
    cache_type?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
    is_success?: SortOrder
    created_at?: SortOrder
  }

  export type monitoring_api_probesSumOrderByAggregateInput = {
    id?: SortOrder
    status_code?: SortOrder
    duration_ms?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type youtube_view_snapshotsVideo_idRecorded_dateCompoundUniqueInput = {
    video_id: string
    recorded_date: Date | string
  }

  export type youtube_view_snapshotsCountOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    title?: SortOrder
    channel_title?: SortOrder
    thumbnail_url?: SortOrder
    published_at?: SortOrder
    duration?: SortOrder
    view_count?: SortOrder
    recorded_date?: SortOrder
  }

  export type youtube_view_snapshotsAvgOrderByAggregateInput = {
    id?: SortOrder
    view_count?: SortOrder
  }

  export type youtube_view_snapshotsMaxOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    title?: SortOrder
    channel_title?: SortOrder
    thumbnail_url?: SortOrder
    published_at?: SortOrder
    duration?: SortOrder
    view_count?: SortOrder
    recorded_date?: SortOrder
  }

  export type youtube_view_snapshotsMinOrderByAggregateInput = {
    id?: SortOrder
    video_id?: SortOrder
    title?: SortOrder
    channel_title?: SortOrder
    thumbnail_url?: SortOrder
    published_at?: SortOrder
    duration?: SortOrder
    view_count?: SortOrder
    recorded_date?: SortOrder
  }

  export type youtube_view_snapshotsSumOrderByAggregateInput = {
    id?: SortOrder
    view_count?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type loa_classCreateNestedOneWithoutLoa_ark_gridInput = {
    create?: XOR<loa_classCreateWithoutLoa_ark_gridInput, loa_classUncheckedCreateWithoutLoa_ark_gridInput>
    connectOrCreate?: loa_classCreateOrConnectWithoutLoa_ark_gridInput
    connect?: loa_classWhereUniqueInput
  }

  export type loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_classUpdateOneWithoutLoa_ark_gridNestedInput = {
    create?: XOR<loa_classCreateWithoutLoa_ark_gridInput, loa_classUncheckedCreateWithoutLoa_ark_gridInput>
    connectOrCreate?: loa_classCreateOrConnectWithoutLoa_ark_gridInput
    upsert?: loa_classUpsertWithoutLoa_ark_gridInput
    disconnect?: loa_classWhereInput | boolean
    delete?: loa_classWhereInput | boolean
    connect?: loa_classWhereUniqueInput
    update?: XOR<XOR<loa_classUpdateToOneWithWhereWithoutLoa_ark_gridInput, loa_classUpdateWithoutLoa_ark_gridInput>, loa_classUncheckedUpdateWithoutLoa_ark_gridInput>
  }

  export type loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput> | loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[] | loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    createMany?: loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type loa_ark_gridCreateNestedManyWithoutLoa_classInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_classInput, loa_ark_gridUncheckedCreateWithoutLoa_classInput> | loa_ark_gridCreateWithoutLoa_classInput[] | loa_ark_gridUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_classInput | loa_ark_gridCreateOrConnectWithoutLoa_classInput[]
    createMany?: loa_ark_gridCreateManyLoa_classInputEnvelope
    connect?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
  }

  export type loa_usersCreateNestedManyWithoutLoa_classInput = {
    create?: XOR<loa_usersCreateWithoutLoa_classInput, loa_usersUncheckedCreateWithoutLoa_classInput> | loa_usersCreateWithoutLoa_classInput[] | loa_usersUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_classInput | loa_usersCreateOrConnectWithoutLoa_classInput[]
    createMany?: loa_usersCreateManyLoa_classInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_ark_gridUncheckedCreateNestedManyWithoutLoa_classInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_classInput, loa_ark_gridUncheckedCreateWithoutLoa_classInput> | loa_ark_gridCreateWithoutLoa_classInput[] | loa_ark_gridUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_classInput | loa_ark_gridCreateOrConnectWithoutLoa_classInput[]
    createMany?: loa_ark_gridCreateManyLoa_classInputEnvelope
    connect?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
  }

  export type loa_usersUncheckedCreateNestedManyWithoutLoa_classInput = {
    create?: XOR<loa_usersCreateWithoutLoa_classInput, loa_usersUncheckedCreateWithoutLoa_classInput> | loa_usersCreateWithoutLoa_classInput[] | loa_usersUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_classInput | loa_usersCreateOrConnectWithoutLoa_classInput[]
    createMany?: loa_usersCreateManyLoa_classInputEnvelope
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
  }

  export type loa_ark_gridUpdateManyWithoutLoa_classNestedInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_classInput, loa_ark_gridUncheckedCreateWithoutLoa_classInput> | loa_ark_gridCreateWithoutLoa_classInput[] | loa_ark_gridUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_classInput | loa_ark_gridCreateOrConnectWithoutLoa_classInput[]
    upsert?: loa_ark_gridUpsertWithWhereUniqueWithoutLoa_classInput | loa_ark_gridUpsertWithWhereUniqueWithoutLoa_classInput[]
    createMany?: loa_ark_gridCreateManyLoa_classInputEnvelope
    set?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    disconnect?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    delete?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    connect?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    update?: loa_ark_gridUpdateWithWhereUniqueWithoutLoa_classInput | loa_ark_gridUpdateWithWhereUniqueWithoutLoa_classInput[]
    updateMany?: loa_ark_gridUpdateManyWithWhereWithoutLoa_classInput | loa_ark_gridUpdateManyWithWhereWithoutLoa_classInput[]
    deleteMany?: loa_ark_gridScalarWhereInput | loa_ark_gridScalarWhereInput[]
  }

  export type loa_usersUpdateManyWithoutLoa_classNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_classInput, loa_usersUncheckedCreateWithoutLoa_classInput> | loa_usersCreateWithoutLoa_classInput[] | loa_usersUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_classInput | loa_usersCreateOrConnectWithoutLoa_classInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_classInput | loa_usersUpsertWithWhereUniqueWithoutLoa_classInput[]
    createMany?: loa_usersCreateManyLoa_classInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_classInput | loa_usersUpdateWithWhereUniqueWithoutLoa_classInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_classInput | loa_usersUpdateManyWithWhereWithoutLoa_classInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type loa_ark_gridUncheckedUpdateManyWithoutLoa_classNestedInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_classInput, loa_ark_gridUncheckedCreateWithoutLoa_classInput> | loa_ark_gridCreateWithoutLoa_classInput[] | loa_ark_gridUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_classInput | loa_ark_gridCreateOrConnectWithoutLoa_classInput[]
    upsert?: loa_ark_gridUpsertWithWhereUniqueWithoutLoa_classInput | loa_ark_gridUpsertWithWhereUniqueWithoutLoa_classInput[]
    createMany?: loa_ark_gridCreateManyLoa_classInputEnvelope
    set?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    disconnect?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    delete?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    connect?: loa_ark_gridWhereUniqueInput | loa_ark_gridWhereUniqueInput[]
    update?: loa_ark_gridUpdateWithWhereUniqueWithoutLoa_classInput | loa_ark_gridUpdateWithWhereUniqueWithoutLoa_classInput[]
    updateMany?: loa_ark_gridUpdateManyWithWhereWithoutLoa_classInput | loa_ark_gridUpdateManyWithWhereWithoutLoa_classInput[]
    deleteMany?: loa_ark_gridScalarWhereInput | loa_ark_gridScalarWhereInput[]
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_classNestedInput = {
    create?: XOR<loa_usersCreateWithoutLoa_classInput, loa_usersUncheckedCreateWithoutLoa_classInput> | loa_usersCreateWithoutLoa_classInput[] | loa_usersUncheckedCreateWithoutLoa_classInput[]
    connectOrCreate?: loa_usersCreateOrConnectWithoutLoa_classInput | loa_usersCreateOrConnectWithoutLoa_classInput[]
    upsert?: loa_usersUpsertWithWhereUniqueWithoutLoa_classInput | loa_usersUpsertWithWhereUniqueWithoutLoa_classInput[]
    createMany?: loa_usersCreateManyLoa_classInputEnvelope
    set?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    disconnect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    delete?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    connect?: loa_usersWhereUniqueInput | loa_usersWhereUniqueInput[]
    update?: loa_usersUpdateWithWhereUniqueWithoutLoa_classInput | loa_usersUpdateWithWhereUniqueWithoutLoa_classInput[]
    updateMany?: loa_usersUpdateManyWithWhereWithoutLoa_classInput | loa_usersUpdateManyWithWhereWithoutLoa_classInput[]
    deleteMany?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    connect?: loa_ark_gridWhereUniqueInput
  }

  export type loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    connect?: loa_ark_gridWhereUniqueInput
  }

  export type loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
    connect?: loa_ark_gridWhereUniqueInput
  }

  export type loa_classCreateNestedOneWithoutLoa_usersInput = {
    create?: XOR<loa_classCreateWithoutLoa_usersInput, loa_classUncheckedCreateWithoutLoa_usersInput>
    connectOrCreate?: loa_classCreateOrConnectWithoutLoa_usersInput
    connect?: loa_classWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridNestedInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    upsert?: loa_ark_gridUpsertWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    disconnect?: loa_ark_gridWhereInput | boolean
    delete?: loa_ark_gridWhereInput | boolean
    connect?: loa_ark_gridWhereUniqueInput
    update?: XOR<XOR<loa_ark_gridUpdateToOneWithWhereWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_starToloa_ark_gridNestedInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    upsert?: loa_ark_gridUpsertWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    disconnect?: loa_ark_gridWhereInput | boolean
    delete?: loa_ark_gridWhereInput | boolean
    connect?: loa_ark_gridWhereUniqueInput
    update?: XOR<XOR<loa_ark_gridUpdateToOneWithWhereWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridNestedInput = {
    create?: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
    connectOrCreate?: loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
    upsert?: loa_ark_gridUpsertWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
    disconnect?: loa_ark_gridWhereInput | boolean
    delete?: loa_ark_gridWhereInput | boolean
    connect?: loa_ark_gridWhereUniqueInput
    update?: XOR<XOR<loa_ark_gridUpdateToOneWithWhereWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_classUpdateOneWithoutLoa_usersNestedInput = {
    create?: XOR<loa_classCreateWithoutLoa_usersInput, loa_classUncheckedCreateWithoutLoa_usersInput>
    connectOrCreate?: loa_classCreateOrConnectWithoutLoa_usersInput
    upsert?: loa_classUpsertWithoutLoa_usersInput
    disconnect?: loa_classWhereInput | boolean
    delete?: loa_classWhereInput | boolean
    connect?: loa_classWhereUniqueInput
    update?: XOR<XOR<loa_classUpdateToOneWithWhereWithoutLoa_usersInput, loa_classUpdateWithoutLoa_usersInput>, loa_classUncheckedUpdateWithoutLoa_usersInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type loa_classCreateWithoutLoa_ark_gridInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
    loa_users?: loa_usersCreateNestedManyWithoutLoa_classInput
  }

  export type loa_classUncheckedCreateWithoutLoa_ark_gridInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
    loa_users?: loa_usersUncheckedCreateNestedManyWithoutLoa_classInput
  }

  export type loa_classCreateOrConnectWithoutLoa_ark_gridInput = {
    where: loa_classWhereUniqueInput
    create: XOR<loa_classCreateWithoutLoa_ark_gridInput, loa_classUncheckedCreateWithoutLoa_ark_gridInput>
  }

  export type loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
    loa_class?: loa_classCreateNestedOneWithoutLoa_usersInput
  }

  export type loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    create: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInputEnvelope = {
    data: loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput | loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput[]
    skipDuplicates?: boolean
  }

  export type loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
    loa_class?: loa_classCreateNestedOneWithoutLoa_usersInput
  }

  export type loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_moon?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    create: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInputEnvelope = {
    data: loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInput | loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInput[]
    skipDuplicates?: boolean
  }

  export type loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    loa_class?: loa_classCreateNestedOneWithoutLoa_usersInput
  }

  export type loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_moon?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersCreateOrConnectWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    create: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInputEnvelope = {
    data: loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput | loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput[]
    skipDuplicates?: boolean
  }

  export type loa_classUpsertWithoutLoa_ark_gridInput = {
    update: XOR<loa_classUpdateWithoutLoa_ark_gridInput, loa_classUncheckedUpdateWithoutLoa_ark_gridInput>
    create: XOR<loa_classCreateWithoutLoa_ark_gridInput, loa_classUncheckedCreateWithoutLoa_ark_gridInput>
    where?: loa_classWhereInput
  }

  export type loa_classUpdateToOneWithWhereWithoutLoa_ark_gridInput = {
    where?: loa_classWhereInput
    data: XOR<loa_classUpdateWithoutLoa_ark_gridInput, loa_classUncheckedUpdateWithoutLoa_ark_gridInput>
  }

  export type loa_classUpdateWithoutLoa_ark_gridInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
    loa_users?: loa_usersUpdateManyWithoutLoa_classNestedInput
  }

  export type loa_classUncheckedUpdateWithoutLoa_ark_gridInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
    loa_users?: loa_usersUncheckedUpdateManyWithoutLoa_classNestedInput
  }

  export type loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    update: XOR<loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput>
    create: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    data: XOR<loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput, loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    where: loa_usersScalarWhereInput
    data: XOR<loa_usersUpdateManyMutationInput, loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_usersScalarWhereInput = {
    AND?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
    OR?: loa_usersScalarWhereInput[]
    NOT?: loa_usersScalarWhereInput | loa_usersScalarWhereInput[]
    seq?: BigIntFilter<"loa_users"> | bigint | number
    server?: StringNullableFilter<"loa_users"> | string | null
    level?: FloatNullableFilter<"loa_users"> | number | null
    combat_power?: DecimalNullableFilter<"loa_users"> | Decimal | DecimalJsLike | number | string | null
    class?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    thesix?: IntNullableFilter<"loa_users"> | number | null
    name?: StringNullableFilter<"loa_users"> | string | null
    expedition_key?: StringNullableFilter<"loa_users"> | string | null
    core_sun?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    core_moon?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    core_star?: BigIntNullableFilter<"loa_users"> | bigint | number | null
    stat_crit?: IntFilter<"loa_users"> | number
    stat_spec?: IntFilter<"loa_users"> | number
    stat_swift?: IntFilter<"loa_users"> | number
    stat_build?: StringNullableFilter<"loa_users"> | string | null
  }

  export type loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    update: XOR<loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput>
    create: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    data: XOR<loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput, loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    where: loa_usersScalarWhereInput
    data: XOR<loa_usersUpdateManyMutationInput, loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_usersUpsertWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    update: XOR<loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput>
    create: XOR<loa_usersCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedCreateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_usersUpdateWithWhereUniqueWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    where: loa_usersWhereUniqueInput
    data: XOR<loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput, loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_usersUpdateManyWithWhereWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    where: loa_usersScalarWhereInput
    data: XOR<loa_usersUpdateManyMutationInput, loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_ark_gridCreateWithoutLoa_classInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridUncheckedCreateWithoutLoa_classInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridCreateOrConnectWithoutLoa_classInput = {
    where: loa_ark_gridWhereUniqueInput
    create: XOR<loa_ark_gridCreateWithoutLoa_classInput, loa_ark_gridUncheckedCreateWithoutLoa_classInput>
  }

  export type loa_ark_gridCreateManyLoa_classInputEnvelope = {
    data: loa_ark_gridCreateManyLoa_classInput | loa_ark_gridCreateManyLoa_classInput[]
    skipDuplicates?: boolean
  }

  export type loa_usersCreateWithoutLoa_classInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_starToloa_ark_gridInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridCreateNestedOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_usersUncheckedCreateWithoutLoa_classInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_moon?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersCreateOrConnectWithoutLoa_classInput = {
    where: loa_usersWhereUniqueInput
    create: XOR<loa_usersCreateWithoutLoa_classInput, loa_usersUncheckedCreateWithoutLoa_classInput>
  }

  export type loa_usersCreateManyLoa_classInputEnvelope = {
    data: loa_usersCreateManyLoa_classInput | loa_usersCreateManyLoa_classInput[]
    skipDuplicates?: boolean
  }

  export type loa_ark_gridUpsertWithWhereUniqueWithoutLoa_classInput = {
    where: loa_ark_gridWhereUniqueInput
    update: XOR<loa_ark_gridUpdateWithoutLoa_classInput, loa_ark_gridUncheckedUpdateWithoutLoa_classInput>
    create: XOR<loa_ark_gridCreateWithoutLoa_classInput, loa_ark_gridUncheckedCreateWithoutLoa_classInput>
  }

  export type loa_ark_gridUpdateWithWhereUniqueWithoutLoa_classInput = {
    where: loa_ark_gridWhereUniqueInput
    data: XOR<loa_ark_gridUpdateWithoutLoa_classInput, loa_ark_gridUncheckedUpdateWithoutLoa_classInput>
  }

  export type loa_ark_gridUpdateManyWithWhereWithoutLoa_classInput = {
    where: loa_ark_gridScalarWhereInput
    data: XOR<loa_ark_gridUpdateManyMutationInput, loa_ark_gridUncheckedUpdateManyWithoutLoa_classInput>
  }

  export type loa_ark_gridScalarWhereInput = {
    AND?: loa_ark_gridScalarWhereInput | loa_ark_gridScalarWhereInput[]
    OR?: loa_ark_gridScalarWhereInput[]
    NOT?: loa_ark_gridScalarWhereInput | loa_ark_gridScalarWhereInput[]
    seq?: BigIntFilter<"loa_ark_grid"> | bigint | number
    core?: StringNullableFilter<"loa_ark_grid"> | string | null
    star?: StringNullableFilter<"loa_ark_grid"> | string | null
    class?: BigIntNullableFilter<"loa_ark_grid"> | bigint | number | null
    order?: IntNullableFilter<"loa_ark_grid"> | number | null
  }

  export type loa_usersUpsertWithWhereUniqueWithoutLoa_classInput = {
    where: loa_usersWhereUniqueInput
    update: XOR<loa_usersUpdateWithoutLoa_classInput, loa_usersUncheckedUpdateWithoutLoa_classInput>
    create: XOR<loa_usersCreateWithoutLoa_classInput, loa_usersUncheckedCreateWithoutLoa_classInput>
  }

  export type loa_usersUpdateWithWhereUniqueWithoutLoa_classInput = {
    where: loa_usersWhereUniqueInput
    data: XOR<loa_usersUpdateWithoutLoa_classInput, loa_usersUncheckedUpdateWithoutLoa_classInput>
  }

  export type loa_usersUpdateManyWithWhereWithoutLoa_classInput = {
    where: loa_usersScalarWhereInput
    data: XOR<loa_usersUpdateManyMutationInput, loa_usersUncheckedUpdateManyWithoutLoa_classInput>
  }

  export type loa_ark_gridCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
    loa_class?: loa_classCreateNestedOneWithoutLoa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    class?: bigint | number | null
    order?: number | null
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    where: loa_ark_gridWhereUniqueInput
    create: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_ark_gridCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
    loa_class?: loa_classCreateNestedOneWithoutLoa_ark_gridInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    class?: bigint | number | null
    order?: number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput
  }

  export type loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    where: loa_ark_gridWhereUniqueInput
    create: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_ark_gridCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
    loa_class?: loa_classCreateNestedOneWithoutLoa_ark_gridInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
  }

  export type loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    class?: bigint | number | null
    order?: number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedCreateNestedManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput
  }

  export type loa_ark_gridCreateOrConnectWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    where: loa_ark_gridWhereUniqueInput
    create: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_classCreateWithoutLoa_usersInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
    loa_ark_grid?: loa_ark_gridCreateNestedManyWithoutLoa_classInput
  }

  export type loa_classUncheckedCreateWithoutLoa_usersInput = {
    idx?: bigint | number
    class_engraving?: string | null
    class_root?: string | null
    gender?: string | null
    class_detail?: string | null
    loa_ark_grid?: loa_ark_gridUncheckedCreateNestedManyWithoutLoa_classInput
  }

  export type loa_classCreateOrConnectWithoutLoa_usersInput = {
    where: loa_classWhereUniqueInput
    create: XOR<loa_classCreateWithoutLoa_usersInput, loa_classUncheckedCreateWithoutLoa_usersInput>
  }

  export type loa_ark_gridUpsertWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    update: XOR<loa_ark_gridUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
    create: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
    where?: loa_ark_gridWhereInput
  }

  export type loa_ark_gridUpdateToOneWithWhereWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    where?: loa_ark_gridWhereInput
    data: XOR<loa_ark_gridUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput>
  }

  export type loa_ark_gridUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_class?: loa_classUpdateOneWithoutLoa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_moonToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUpsertWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    update: XOR<loa_ark_gridUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
    create: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
    where?: loa_ark_gridWhereInput
  }

  export type loa_ark_gridUpdateToOneWithWhereWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    where?: loa_ark_gridWhereInput
    data: XOR<loa_ark_gridUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput>
  }

  export type loa_ark_gridUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_class?: loa_classUpdateOneWithoutLoa_ark_gridNestedInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_starToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUpsertWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    update: XOR<loa_ark_gridUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
    create: XOR<loa_ark_gridCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUncheckedCreateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
    where?: loa_ark_gridWhereInput
  }

  export type loa_ark_gridUpdateToOneWithWhereWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    where?: loa_ark_gridWhereInput
    data: XOR<loa_ark_gridUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput, loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput>
  }

  export type loa_ark_gridUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_class?: loa_classUpdateOneWithoutLoa_ark_gridNestedInput
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUncheckedUpdateWithoutLoa_users_loa_users_core_sunToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
  }

  export type loa_classUpsertWithoutLoa_usersInput = {
    update: XOR<loa_classUpdateWithoutLoa_usersInput, loa_classUncheckedUpdateWithoutLoa_usersInput>
    create: XOR<loa_classCreateWithoutLoa_usersInput, loa_classUncheckedCreateWithoutLoa_usersInput>
    where?: loa_classWhereInput
  }

  export type loa_classUpdateToOneWithWhereWithoutLoa_usersInput = {
    where?: loa_classWhereInput
    data: XOR<loa_classUpdateWithoutLoa_usersInput, loa_classUncheckedUpdateWithoutLoa_usersInput>
  }

  export type loa_classUpdateWithoutLoa_usersInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid?: loa_ark_gridUpdateManyWithoutLoa_classNestedInput
  }

  export type loa_classUncheckedUpdateWithoutLoa_usersInput = {
    idx?: BigIntFieldUpdateOperationsInput | bigint | number
    class_engraving?: NullableStringFieldUpdateOperationsInput | string | null
    class_root?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    class_detail?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid?: loa_ark_gridUncheckedUpdateManyWithoutLoa_classNestedInput
  }

  export type loa_usersCreateManyLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersCreateManyLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_moon?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersCreateManyLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    class?: bigint | number | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_moon?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_starToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridNestedInput
    loa_class?: loa_classUpdateOneWithoutLoa_usersNestedInput
  }

  export type loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridNestedInput
    loa_class?: loa_classUpdateOneWithoutLoa_usersNestedInput
  }

  export type loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUpdateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_starToloa_ark_gridNestedInput
    loa_class?: loa_classUpdateOneWithoutLoa_usersNestedInput
  }

  export type loa_usersUncheckedUpdateWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    class?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_ark_gridCreateManyLoa_classInput = {
    seq?: bigint | number
    core?: string | null
    star?: string | null
    order?: number | null
  }

  export type loa_usersCreateManyLoa_classInput = {
    seq?: bigint | number
    server?: string | null
    level?: number | null
    combat_power?: Decimal | DecimalJsLike | number | string | null
    thesix?: number | null
    name?: string | null
    expedition_key?: string | null
    core_sun?: bigint | number | null
    core_moon?: bigint | number | null
    core_star?: bigint | number | null
    stat_crit?: number
    stat_spec?: number
    stat_swift?: number
    stat_build?: string | null
  }

  export type loa_ark_gridUpdateWithoutLoa_classInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUncheckedUpdateWithoutLoa_classInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    loa_users_loa_users_core_moonToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_moonToloa_ark_gridNestedInput
    loa_users_loa_users_core_starToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_starToloa_ark_gridNestedInput
    loa_users_loa_users_core_sunToloa_ark_grid?: loa_usersUncheckedUpdateManyWithoutLoa_ark_grid_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_ark_gridUncheckedUpdateManyWithoutLoa_classInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    core?: NullableStringFieldUpdateOperationsInput | string | null
    star?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type loa_usersUpdateWithoutLoa_classInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
    loa_ark_grid_loa_users_core_moonToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_moonToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_starToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_starToloa_ark_gridNestedInput
    loa_ark_grid_loa_users_core_sunToloa_ark_grid?: loa_ark_gridUpdateOneWithoutLoa_users_loa_users_core_sunToloa_ark_gridNestedInput
  }

  export type loa_usersUncheckedUpdateWithoutLoa_classInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type loa_usersUncheckedUpdateManyWithoutLoa_classInput = {
    seq?: BigIntFieldUpdateOperationsInput | bigint | number
    server?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableFloatFieldUpdateOperationsInput | number | null
    combat_power?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    thesix?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    expedition_key?: NullableStringFieldUpdateOperationsInput | string | null
    core_sun?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_moon?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    core_star?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    stat_crit?: IntFieldUpdateOperationsInput | number
    stat_spec?: IntFieldUpdateOperationsInput | number
    stat_swift?: IntFieldUpdateOperationsInput | number
    stat_build?: NullableStringFieldUpdateOperationsInput | string | null
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