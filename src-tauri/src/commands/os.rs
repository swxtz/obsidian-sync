use tauri::command;

#[command]
pub fn get_os() -> String {
    std::env::consts::OS.to_string()
}