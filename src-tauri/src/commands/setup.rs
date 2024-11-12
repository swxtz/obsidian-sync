use tauri::command;


#[command]
pub fn log_message() {
    println!("teste")
}