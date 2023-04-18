import { BaseDatabase } from "./BaseDatabase";
import { TVideos } from "../types";

export class VideosDatabase extends BaseDatabase {
  public static TABLE_VIDEOS = "videos";

  public async findVideos(q: string | undefined): Promise<TVideos[]> {
    let videosDB;

    if (q) {
      const result: TVideos[] = await BaseDatabase.connection(
        VideosDatabase.TABLE_VIDEOS
      ).where("titulo", "LIKE", `%${q}%`);
      videosDB = result;
    } else {
      const result: TVideos[] = await BaseDatabase.connection(
        VideosDatabase.TABLE_VIDEOS
      );
      videosDB = result;
    }
    return videosDB;
  }
  public async findeVideosById(id: string) {
    const [userDBExists]: TVideos[] | undefined[] =
      await BaseDatabase.connection(VideosDatabase.TABLE_VIDEOS).where({
        id,
      });
    return userDBExists;
  }
  public async createVideos(newUserDB: TVideos | undefined): Promise<void> {
    await BaseDatabase.connection(VideosDatabase.TABLE_VIDEOS).insert(
      newUserDB
    );
  }
  public async editeVideos(id: string, updateVideoDB: TVideos): Promise<void> {
    await BaseDatabase.connection(VideosDatabase.TABLE_VIDEOS)
      .update(updateVideoDB)
      .where({ id });
  }
  public async deleteVideos(id: string) {
    await BaseDatabase.connection(VideosDatabase.TABLE_VIDEOS)
      .del()
      .where({ id });
  }
}
